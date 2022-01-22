import styled from 'styled-components';

export const CurrencyInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px;
  background-color: ${(props) => props.theme.colors.secondary.main};
  border-radius: 7px;
  margin-top: 5px;
  margin-bottom: 5px;
  &:focus-within {
    background-color: ${(props) => props.theme.colors.secondary.contrast};
  }
`;
