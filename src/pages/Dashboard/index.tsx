import React, { FormEvent, useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import Profile from '../../components/Profile';

import RepositoryItem from '../../components/RepositoryItem';
import { Form } from './styles';

const Dashboard: React.FC = () => {
  const [input, setInput] = useState('');
  // const [inputError, setInputError] = useState('');

  function handleSearchUser(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    console.log(event);
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
      <Profile />
      <RepositoryItem />
    </>
  );
};

export default Dashboard;
