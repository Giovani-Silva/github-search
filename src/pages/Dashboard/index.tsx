import React, { FormEvent, useState } from 'react';

import { Form } from './styles';

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');

  function handleSearchUser(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    console.log(event);
  }

  return (
    <>
      <Form hasError={false} action="" onSubmit={handleSearchUser}>
        <input type="text" placeholder="username" />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  );
};

export default Dashboard;
