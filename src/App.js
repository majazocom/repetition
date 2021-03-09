import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  const [headerTitle, setHeaderTitle] = useState('Plant app');
  const [footerTitle, setFooterTitle] = useState('This is a footer');
  
  return (
    <div className="App">
      <Header title={headerTitle} />
      <Footer title={footerTitle} />
    </div>
  );
}

export default App;
