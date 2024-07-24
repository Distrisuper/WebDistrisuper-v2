import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Product />
        <About />
        <Contact />
        <Chatbot />
      </Layout>


    </>
  )
}

export default App;
