import React from 'react';
import { UserType } from '../../@types/user';

import { Wrapper, ProfileInfo, Name, Email, Bio } from './styles';

interface UserProps {
  user: UserType;
}

const Profile: React.FC<UserProps> = ({ user }) => {
  return (
    <Wrapper>
      <ProfileInfo>
        <header>
          <img src={user.avatar_url} alt="avatar" />
          <div>
            <Name>{user.name}</Name>
            <Email>{user.email || 'email não informado'}</Email>
            <Bio>{user.bio || 'bio não informado'}</Bio>
            <ul>
              <li>
                <strong>{user.followers}</strong>
                <span>Followers</span>
              </li>
              <li>
                <strong>{user.following}</strong>
                <span>Following</span>
              </li>
              <li>
                <strong>{user.public_repos}</strong>
                <span>Repos</span>
              </li>
              <li>
                <strong>{user.public_gists}</strong>
                <span>Gists</span>
              </li>
            </ul>
          </div>
        </header>
      </ProfileInfo>
    </Wrapper>
  );
};

export default Profile;
