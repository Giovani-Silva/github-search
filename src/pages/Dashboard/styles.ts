import styled, { css } from 'styled-components';

import { COLORS, SIZES } from '../../styles/variables';

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  margin: 64px auto 0;
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
    width: 210px;
    height: 70px;
    background: #737380;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${COLORS.green};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: ${SIZES.xlarge};
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: ${SIZES.large};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${COLORS.gray_dark};
`;

export const RepositoryInfo = styled.div`
  flex: 1;
  margin-left: 80px;
  position: relative;
  overflow: hidden;

  p {
    margin: ${SIZES.small} 0;
  }

  ul li + li {
    margin-left: ${SIZES.large};
  }
`;

export const RepositoryBoxIcon = styled.span`
  display: flex;
  justify-content: center;
  background: #7373800a;
  width: 80px;
  height: 100%;
  position: absolute;
  left: 0;
  align-items: center;
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
