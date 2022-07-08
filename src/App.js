import React from 'react';
import { Routing } from './components/commons/Routing';
import { NavBar } from './components/commons/NavBar';
import { NombreProvider } from './components/contexts/NombreContext';
import { StoreProvider } from './components/flux/Store';


function App() {
  return (
    <StoreProvider>
      <NombreProvider>
        <Routing>
          <NavBar />
        </Routing>
      </NombreProvider>
    </StoreProvider>
  );
}

export default App;
