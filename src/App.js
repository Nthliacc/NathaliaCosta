import React from 'react';
import styled from 'styled-components';
import Nav from './component/Pages/Nav';
import Section from './component/Pages/Section/Section';
import Footer from './component/Pages/Footer';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const AppContainer = styled.div`
  height: 100vh;
  max-width: 100vw;
`;

const meuTema = createMuiTheme({
  palette: {
    primary: {
      main: "#ff6000"
    },
    secondary: {
      main: "#ffffff"
    },
    error: {
      main: "#ff0000"
    }
  }
})

function App() {
  return (
    <MuiThemeProvider theme={meuTema}>
      <AppContainer>
        <Nav />
        <Section />
        <Footer />
      </AppContainer>
    </MuiThemeProvider>
  );
}

export default App;
