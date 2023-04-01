import React from 'react';
import Header from './components/PagesParts/Header/Header';
import Footer from './components/PagesParts/Footer/Footer'
import HomePage from './components/PagesParts/Main/Main_Pages/Home_Page/HomePage';

function App() {

  return (
    <div className="App">
      <Header />
      <HomePage/>
      <Footer />
    </div>
  );
}

export default App;
