import React from 'react';
import logo from 'assets/images/logo/logo.svg';
import { MainContent, Wrapper } from './App.styles';
import { ExampleComponent } from 'components/ExampleComponent';

const App = () => {
  return (
    <Wrapper>
      <header>
        <img src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <MainContent>
        <ExampleComponent />
      </MainContent>
    </Wrapper>
  );
};

export default App;
