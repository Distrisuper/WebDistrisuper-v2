import Layout from './components/Layout'
import About from './components/About'
import Products from './components/Products'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout title="Inicio" breadcrum="">
              <Home />
            </Layout>
          }
        />
        <Route
          path="/nosotros"
          element={
            <Layout title="Sobre nosotros" breadcrum="Nosotros">
              <About />
            </Layout>
          }
        />
        <Route
          path="/productos"
          element={
            <Layout title="Nuestros productos" breadcrum="Productos">
              <Products />
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
