import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 1.5s linear infinite;
`;
