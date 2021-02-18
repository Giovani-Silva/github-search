import styled, { css } from 'styled-components';

import { COLORS, SIZES } from '../../styles/variables';

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  margin: 0 auto;
  max-width: 700px;
  display: flex;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;
    ${props =>
      props.hasError &&
      css`
        border-color: ${COLORS.red};
      `}
    &::placeholder {
      color: ${COLORS.gray};
    }
  }
  button {
    width: 80px;
    height: 70px;
    background: ${COLORS.white};
    border-radius: 0 5px 5px 0;
    border: 0;
    color: ${COLORS.gray_dark};
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      color: ${COLORS.green};
    }
    > * {
      font-size: ${SIZES.xlarge};
    }
  }
`;
