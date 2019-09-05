import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import theme from '../../theme';
import Header from '../Header';

// const GlobalStyle = createGlobalStyle`
//   body {
//     font-family: serif, Arial;
//     background-color: ${props => props.theme.colors.someGrey};
//   }
// `;

const Content = styled.div`
  min-height: calc(100vh - 65px);
  padding-top: 30px;
  overflow-y: auto;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.someGrey};
`;

const Constrain = styled.div`
  width: 70vw;
  @media screen and (min-width: ${props => props.theme.constrain}px) {
    width: ${props => props.theme.constrain}px;
  }
`;

const Layout: React.FC = props => (
  <ThemeProvider theme={theme}>
    <>
      {/* <GlobalStyle /> */}
      <Header />
      <Content>
        <Constrain>{props.children}</Constrain>
      </Content>
    </>
  </ThemeProvider>
);

export default Layout;
