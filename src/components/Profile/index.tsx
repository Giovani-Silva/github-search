import React from 'react';

import { Wrapper, ProfileInfo, Name, Email, Bio } from './styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <ProfileInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/583231?v=4"
            alt="avatar"
          />
          <div>
            <Name>The Octocat</Name>
            <Email>octocat@github.com</Email>
            <Bio>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              error itaque ipsa, quia consequatur, esse ut tempora tenetur ipsum
              voluptatem nesciunt nam, provident cum. Eligendi maxime error vero
              deserunt ullam?
            </Bio>
            <ul>
              <li>
                <strong>3526</strong>
                <span>Followers</span>
              </li>
              <li>
                <strong>9</strong>
                <span>Following</span>
              </li>
              <li>
                <strong>8</strong>
                <span>Repos</span>
              </li>
              <li>
                <strong>8</strong>
                <span>Gists</span>
              </li>
            </ul>
          </div>
        </header>
      </ProfileInfo>
    </Wrapper>
  );
};

export default Header;
