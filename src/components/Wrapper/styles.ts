import styled from 'styled-components';
import { mobile } from '../../styles/mediaQueries';

export const StyledWrapper = styled.div`
  display: grid;
  place-items: center;
  background-color: ${(props) => props.theme.colors.secondary.contrast};
  height: 100vh;
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background.main};
  width: 90vw;
  height: 90vh;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.2);

  ${mobile(`
    width: 100%;
    height: 100%;
  `)}
`;
