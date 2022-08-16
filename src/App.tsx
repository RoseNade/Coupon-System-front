import React from 'react';
import './App.css';
import Footer from './Components/LayoutArea/Footer/Footer';
import Header from './Components/LayoutArea/Header/Header';
import Main from './Components/LayoutArea/Main/Main';
import Menu from './Components/LayoutArea/Menu/Menu';
import SideMenu from './Components/LayoutArea/SideMenu/SideMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Main />
      <SideMenu />
      <Footer />
    </div>
  );
}

export default App;
