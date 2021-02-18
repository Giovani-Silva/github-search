import styled from 'styled-components';

import { COLORS, SIZES } from '../../../styles/variables';

export const Wrapper = styled.header`
  display: flex;
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
  justify-content: space-around;
  align-items: center;
  max-width: 300px;
  width: 100%;
  margin-left: auto;
`;

export const Item = styled.a`
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
