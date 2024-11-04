import './App.css';
import React from 'react';
import MainFooter from './components/main/mainFooter.tsx';
import MainHeader from './components/main/mainHeader.tsx';
import MainMenu from './components/main/mainMenu.tsx';
function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      <MainHeader/>
      <MainMenu className="flex-grow" />
      <MainFooter/>
    </div>
  );
}

export default App;
