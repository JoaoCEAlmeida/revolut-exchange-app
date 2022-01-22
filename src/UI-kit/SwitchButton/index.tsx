import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/outline';

import { StyledSwitchButton } from './styles';

const SwitchButton: React.FC = () => {
  return (
    <StyledSwitchButton transactionType="SELL">
      <ArrowDownIcon height="20px" />
    </StyledSwitchButton>
  );
};

export default SwitchButton;
