import styled from 'styled-components';

import { COLORS, SIZES } from '../../styles/variables';

export const Wrapper = styled.header`
  display: flex;
`;

export const ProfileInfo = styled.section`
  margin-top: 80px;
  box-shadow: 0px 10px 15px -10px rgba(0, 0, 0, 0.38);
  padding: ${SIZES.xxlarge};
  border-radius: 5px;
  background: ${COLORS.white};
  header {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 24px;
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: ${SIZES.xxlarge};
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: ${COLORS.gray};
      }
    }
  }
`;

export const Name = styled.h1`
  font-size: ${SIZES.xxlarge};
  color: ${COLORS.green};
`;
export const Email = styled.p`
  color: ${COLORS.gray_dark};
  font-style: italic;
  margin: ${SIZES.large} 0;
`;
export const Bio = styled.p`
  color: ${COLORS.gray};
`;