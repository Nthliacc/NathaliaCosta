import React from 'react';
import styled from 'styled-components';
import Nav from './component/Pages/Nav';
import Section from './component/Pages/Section/Section';
import Footer from './component/Pages/Footer';

const AppContainer = styled.div`
  height: 100vh;
  max-width: 100vw;
`;

function App() {
  return (
    <AppContainer>
      <Nav />
      <Section />
      <Footer />
    </AppContainer>
  );
}

export default App;
