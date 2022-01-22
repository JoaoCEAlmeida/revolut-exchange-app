import styled from 'styled-components';
import { StyledButtonProps } from './types';

export const StyledSwitchButton = styled.button<StyledButtonProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.colors.background.main};
  width: 40px;
  height: 40px;
  cursor: pointer;
  transform: translate(-50%, -50%);

  svg {
    transition: all 0.2s;
    transform: ${(props) => (props.transactionType === 'BUY' ? 'rotateX(180deg)' : '')};
    color: ${(props) => props.theme.colors.primary.main};
  }
`;
