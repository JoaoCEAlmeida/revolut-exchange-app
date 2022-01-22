import styled from 'styled-components';

export const MyButton = styled.button`
  color: ${(props) => props.theme.colors.text.secondary};
  background: ${(props) => props.theme.colors.primary.main};
  border-radius: 6px;
  width: 100%;
  height: 30px;
  border: none;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
`;
