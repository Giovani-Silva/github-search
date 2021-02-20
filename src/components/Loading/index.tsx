import React from 'react';
import { FiLoader } from 'react-icons/fi';

import { Wrapper } from './styles';

interface LoadingProps {
  size: number;
}

const Loading: React.FC<LoadingProps> = ({ ...rest }) => {
  return (
    <Wrapper {...rest}>
      <FiLoader />
    </Wrapper>
  );
};

export default Loading;
