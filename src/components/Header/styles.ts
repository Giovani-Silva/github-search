import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS, SIZES } from '../../styles/variables';

export const Wrapper = styled.header`
  display: flex;
  margin-bottom: 80px;
`;

export const Logo = styled.img`
  height: ${SIZES.xxlarge};
`;

export const Navigation = styled.nav`
  width: 100%;
  display: inherit;
`;
export const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 300px;
  width: 100%;
  margin-left: auto;
`;

export const NavigationLink = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 16px;
  text-decoration: none;
  color: ${COLORS.gray_dark};
  font-weight: 700;
  &:hover {
    color: ${COLORS.green};
  }
`;
