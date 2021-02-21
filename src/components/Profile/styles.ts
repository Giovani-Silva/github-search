import styled from 'styled-components';

import { COLORS, SIZES } from '../../styles/variables';

export const Wrapper = styled.header`
  display: flex;
`;

export const ProfileInfo = styled.section`
  margin-top: 80px;
  padding: ${SIZES.xxlarge};
  border-radius: 5px;
  background: ${COLORS.white};
  width: 100%;
  header {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 520px) {
      flex-direction: row;
    }
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 0;
      margin-top: ${SIZES.xlarge};
      flex: 1;
      @media (min-width: 520px) {
        margin-left: ${SIZES.xlarge};
        margin-top: 0;
      }
    }
  }
  ul {
    margin-top: 40px;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${SIZES.normal};

    @media (min-width: 520px) {
      grid-template-columns: repeat(4, 1fr);
    }

    li {
      text-align: center;
      strong {
        display: block;
        font-size: ${SIZES.xxlarge};
        color: ${COLORS.gray_dark};
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
