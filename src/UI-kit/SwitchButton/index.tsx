import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/outline';

import { StyledSwitchButton } from './styles';
import { StyledButtonProps } from './types';

const SwitchButton: React.FC<StyledButtonProps> = ({ transactionType, onClick, ...rest }) => {
  return (
    <StyledSwitchButton
      data-testid="test-switchButton"
      transactionType={transactionType}
      onClick={onClick}
      {...rest}>
      <ArrowDownIcon height="20px" />
    </StyledSwitchButton>
  );
};

export default SwitchButton;
