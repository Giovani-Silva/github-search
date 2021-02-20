import React from 'react';
import { FiLink, FiStar, FiEye } from 'react-icons/fi';
import { Repos } from '../../@types/user';
import { Repository, RepositoryInfo, RepositoryTitle, Link } from './styles';

interface RepoProps {
  repository: Repos;
}

const RepositoryItem: React.FC<RepoProps> = ({ repository }) => (
  <Repository>
    <RepositoryInfo>
      <RepositoryTitle>{repository.name}</RepositoryTitle>
      <p>{repository.description}</p>
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
    <Link href={repository.html_url} target="_blank">
      <FiLink />
    </Link>
  </Repository>
);

export default RepositoryItem;
