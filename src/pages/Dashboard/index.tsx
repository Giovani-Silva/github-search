import React, { FormEvent, useState } from 'react';
import { FiGitBranch, FiLink, FiStar, FiEye } from 'react-icons/fi';

import Profile from '../../components/Profile';
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
        <RepositoryBoxIcon>
          <FiGitBranch aria-hidden="true" />
        </RepositoryBoxIcon>
        <RepositoryInfo>
          <RepositoryTitle>Repo name</RepositoryTitle>
          <p>Repo desription</p>
          <ul>
            <li>
              <strong>
                9 <span>estrelas</span>
              </strong>{' '}
              <FiStar aria-hidden="true" />
            </li>
            <li>
              <strong>
                9 <span>visualizações</span>
              </strong>{' '}
              <FiEye aria-hidden="true" />
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
