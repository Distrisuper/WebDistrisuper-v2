import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import './App.css'

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
