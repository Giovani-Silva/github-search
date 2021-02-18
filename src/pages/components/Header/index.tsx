import React from 'react';
import logoImg from '../../../assets/logo.svg';

import { Logo, Wrapper, Navigation, Menu, Item } from './styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Logo src={logoImg} alt="GitHub Search" />
      <Navigation>
        <Menu>
          <li>
            <Item href="/historico">Histórico</Item>
          </li>
        </Menu>
      </Navigation>
    </Wrapper>
  );
};

export default Header;
