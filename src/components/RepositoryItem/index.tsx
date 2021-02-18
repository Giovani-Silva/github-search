import React from 'react';
import { FiLink, FiStar, FiEye } from 'react-icons/fi';
import { Repository, RepositoryInfo, RepositoryTitle, Link } from './styles';

const RepositoryItem: React.FC = () => (
  <Repository>
    <RepositoryInfo>
      <RepositoryTitle>Repo name</RepositoryTitle>
      <p>Repo desription</p>
      <ul>
        <li>
          <strong>
            9 <span>estrelas</span>
          </strong>
          <FiStar aria-hidden="true" />
        </li>
        <li>
          <strong>
            9 <span>visualizações</span>
          </strong>
          <FiEye aria-hidden="true" />
        </li>
      </ul>
    </RepositoryInfo>
    <Link href="/">
      <FiLink />
    </Link>
  </Repository>
);

export default RepositoryItem;
