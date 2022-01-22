import React from 'react';
import { ComponentProps } from './types';
import { StyledWrapper, Container } from './styles';

const Wrapper: React.FC<ComponentProps> = ({ children }) => {
  return (
    <StyledWrapper>
      <Container>{children}</Container>
    </StyledWrapper>
  );
};

export default Wrapper;
