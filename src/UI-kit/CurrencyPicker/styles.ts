import styled from 'styled-components';

export const CurrencyPickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CurrencyButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  border: none;
  padding: 0;

  background: ${(props) => props.theme.colors.background.transparent};
  color: ${(props) => props.theme.colors.text.primary};

  &:hover {
    cursor: pointer;
  }
`;

export const Currency = styled.span`
  font-size: 1rem;
`;

export const Balance = styled.span`
  font-size: 0.7rem;
  opacity: 0.8;
`;
