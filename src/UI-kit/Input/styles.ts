import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MyInput = styled.input`
  direction: rtl;
  padding: 0;
  background: none;
  border: 0;
  &:focus {
    outline: none;
    caret-color: ${(props) => props.theme.colors.primary.main};
  }
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.error.main};
  text-align: right;
`;
