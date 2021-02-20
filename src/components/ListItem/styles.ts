import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, SIZES } from '../../styles/variables';

export const Item = styled.div`
  margin-top: ${SIZES.xlarge};
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: ${SIZES.large};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${COLORS.gray_dark};

  img {
    border-radius: 50%;
  }
`;

export const ItemInfo = styled.div`
  flex: 1;
  margin-left: ${SIZES.xxlarge};
  position: relative;
  overflow: hidden;

  p {
    margin: ${SIZES.small} 0;
  }

  ul {
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 40px;
      margin-right: 16px;
      & + li {
        margin-left: ${SIZES.large};
      }

      span {
        position: absolute;
        left: -1000%;
      }
    }
  }
`;

export const ItemTitle = styled.strong`
  font-size: ${SIZES.large};
`;

export const LinkRestore = styled.a`
  font-size: ${SIZES.large};
  text-decoration: none;
  color: ${COLORS.gray_dark};
  padding: ${SIZES.normal};
  opacity: 1;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;
