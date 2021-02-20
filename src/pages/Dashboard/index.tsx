import React, { FormEvent, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { FiSearch } from 'react-icons/fi';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Repos } from '../../@types/user';
import Profile from '../../components/Profile';

import RepositoryItem from '../../components/RepositoryItem';
import api from '../../services/api';
import { Form, Error } from './styles';
import Loading from '../../components/Loading';
import { userActionTypes } from '../../store/reducer/userReducer';
import { historicActionTypes } from '../../store/reducer/historicReducer';

const Dashboard: React.FC = () => {
  const [input, setInput] = useState('');
  const [searching, setSearching] = useState(false);
  const [inputError, setInputError] = useState('');
  const user = useSelector((state: RootStateOrAny) => state.user);
  const repos = useSelector((state: RootStateOrAny) => state.user.repos);
  const dispatch = useDispatch();

  const requestUser = async (): Promise<void> => {
    try {
      const getUser = await api.get(`/users/${input}`);
      const actionUser = { type: userActionTypes.ADD_USER, data: getUser.data };
      dispatch(actionUser);
      requesRepos();
    } catch (e) {
      setInputError('Não foi possível encontrar o usuário');
    } finally {
      setSearching(false);
    }
  };

  const requesRepos = async (): Promise<void> => {
    try {
      const getRepos = await api.get(`/users/${input}/repos`);
      const actionRepos = {
        type: userActionTypes.ADD_REPOS,
        repos: getRepos.data,
      };
      dispatch(actionRepos);
    } catch (e) {
      // console.log(e);
    }
  };

  useEffect(() => {
    if (user.login) {
      setInput(user.login);
      const userData = {
        history_date: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss"),
        ...user,
      };
      const actionHistoric = {
        type: historicActionTypes.ADD_USER_TO_HISTORIC,
        payload: {
          ...userData,
        },
      };
      dispatch(actionHistoric);
    }
  }, [user, dispatch]);

  async function handleSearchUser(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    setInputError('');
    if (!input) {
      setInputError('Digite um username para pesquisa.');
      return;
    }

    setSearching(true);

    requestUser();
  }

  return (
    <>
      <Form hasError={!!inputError} action="" onSubmit={handleSearchUser}>
        <input
          type="text"
          placeholder="username"
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />
        <button type="submit">
          {!searching && <FiSearch aria-label="Pesquisar" />}
          {searching && <Loading size={80} />}
        </button>
      </Form>
      {inputError && <Error>{inputError}</Error>}

      {!searching && user.login && <Profile user={user} />}
      {!searching &&
        repos.map((repository: Repos) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
    </>
  );
};

export default Dashboard;
