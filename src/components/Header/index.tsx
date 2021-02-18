import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import { Logo, Wrapper, Navigation, Menu, NavigationLink } from './styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src={logoImg} alt="GitHub Search" />
      </Link>
      <Navigation>
        <Menu>
          <li>
            <NavigationLink to="historico">Histórico</NavigationLink>
          </li>
        </Menu>
      </Navigation>
    </Wrapper>
  );
};

export default Header;
