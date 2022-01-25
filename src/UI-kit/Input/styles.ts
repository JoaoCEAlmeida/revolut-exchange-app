import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MyInput = styled.input`
  padding: 0;
  text-align: right;
  background: none;
  border-width: 0 0 0;
  outline: 0;
  border-color: ${(props) => props.theme.colors.primary.main};
  &:focus {
    outline: none;
    caret-color: ${(props) => props.theme.colors.primary.main};
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.error.main};
  text-align: right;
`;
