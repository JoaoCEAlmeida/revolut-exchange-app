import React from 'react';
import { HeaderWrapper, Text, SubText } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Text>Sell EUR</Text>
      <SubText>1 EUR = 0.737654 USD</SubText>
    </HeaderWrapper>
  );
};

export default Header;
