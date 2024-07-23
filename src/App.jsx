import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/nosotros"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contacto"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/productos"
          element={
            <Layout>
              <Product />
            </Layout>
          }
        />
        {/* Redirecciona a la página de inicio para rutas no definidas */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  )
}

export default App;
