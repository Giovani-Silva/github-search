import styled from 'styled-components';
import { COLORS, SIZES } from '../../styles/variables';

export const Repository = styled.div`
  margin-top: ${SIZES.xlarge};
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: ${SIZES.xxlarge};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${COLORS.gray_dark};
`;

export const RepositoryInfo = styled.div`
  flex: 1;
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

export const RepositoryTitle = styled.strong`
  font-size: ${SIZES.large};
`;

export const Link = styled.a`
  font-size: ${SIZES.large};
  text-decoration: none;
  color: ${COLORS.gray_dark};
  padding: ${SIZES.normal};
  opacity: 1;

  &:hover {
    opacity: 0.6;
  }
`;
