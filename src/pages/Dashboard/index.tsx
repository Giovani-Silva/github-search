import React, { FormEvent, useState } from 'react';
import { FiGitBranch, FiLink, FiStar, FiEye } from 'react-icons/fi';

import Profile from '../components/Profile';
import {
  Form,
  Repositories,
  RepositoryInfo,
  RepositoryBoxIcon,
  RepositoryTitle,
  Link,
} from './styles';

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
      <Profile />
      <Repositories>
        <RepositoryBoxIcon aria-hidden="true">
          <FiGitBranch />
        </RepositoryBoxIcon>
        <RepositoryInfo>
          <RepositoryTitle>Repo name</RepositoryTitle>
          <p>Repo desription</p>
          <ul>
            <li>
              <span>9</span> <FiStar />
            </li>
            <li>
              <span>9</span> <FiEye />
            </li>
          </ul>
        </RepositoryInfo>
        <Link href="/">
          <FiLink />
        </Link>
      </Repositories>
    </>
  );
};

export default Dashboard;
