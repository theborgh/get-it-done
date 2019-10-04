import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import './App.css';

const AppWrapper = styled.section`
  background-color: lightblue;
  height: 100vh;
`;

function App() {
  return (
    <div className='App' data-test='component-App'>
      <AppWrapper>
        <Navbar />
        <Sidebar />
        <Footer />
      </AppWrapper>
    </div>
  );
}

export default App;
