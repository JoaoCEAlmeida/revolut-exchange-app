import styled from 'styled-components';
import { mobile } from '../../styles/mediaQueries';
import Input from '../../UI-kit/Input';
import Button from '../../UI-kit/Button';

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  ${mobile(`
    margin-left: 5px;
    margin-right: 5px;
  `)}
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
`;

export const StyledInput = styled(Input)`
  display: flex;
  text-align: left;
  border-color: ${(props) => props.theme.colors.secondary.main};
  border-width: 0 0 2px;

  &:focus {
    outline: none;
    caret-color: ${(props) => props.theme.colors.primary.main};
    border-color: ${(props) => props.theme.colors.primary.main};
  }
`;

export const StyledButton = styled(Button)`
  && {
    width: 25%;
  }
`;

export const StyledButtonCurrency = styled(Button)`
  && {
    background-color: ${(props) => props.theme.colors.secondary.main};
    color: ${(props) => props.theme.colors.primary.main};
    width: 100px;
    margin-bottom: 10px;
  }
`;

export const NotFound = styled.span``;
