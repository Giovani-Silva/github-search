import React, { FormEvent, useEffect, useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Profile from '../../components/Profile';

import RepositoryItem from '../../components/RepositoryItem';
import api from '../../services/api';
import { Form } from './styles';

const Dashboard: React.FC = () => {
  const [input, setInput] = useState('');
  const [searching, setSearching] = useState(false);
  // const [inputError, setInputError] = useState('');
  const user = useSelector((state: RootStateOrAny) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.login) {
      setInput(user.login);
    }
  }, [user]);

  console.log(user);

  async function handleSearchUser(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await api.get(`/users/${input}`);
    const action = { type: 'ADD_USER', data: response.data };
    dispatch(action);
  }

  return (
    <>
      <Form hasError={false} action="" onSubmit={handleSearchUser}>
        <input
          type="text"
          placeholder="username"
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />
        <button type="submit">
          <FiSearch aria-label="Pesquisar" />
        </button>
      </Form>
      <Profile user={user} />
      <RepositoryItem />
    </>
  );
};

export default Dashboard;
