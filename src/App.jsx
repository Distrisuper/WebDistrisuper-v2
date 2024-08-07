import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Chatbot from './components/Chatbot';
import './App.css'

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
