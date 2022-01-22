import styled from 'styled-components';
import { mobile } from '../../styles/mediaQueries';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  ${mobile(`
    margin-left: 5px;
    margin-right: 5px;
  `)}
`;

export const Text = styled.h1`
  color: ${(props) => props.theme.colors.text.primary};
`;

export const SubText = styled.span`
  color: ${(props) => props.theme.colors.primary.main};
`;
