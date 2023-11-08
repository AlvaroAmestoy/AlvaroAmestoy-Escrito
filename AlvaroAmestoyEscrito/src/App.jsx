import './App.css'

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/crear">
            <CrearUsuario />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Inicio() {
  return (
    <div>
      <h2>Inicio</h2>
      <Link to="/crear">
        <button>Crear usuario</button>
      </Link>
    </div>
  );
}

function CrearUsuario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !email || !celular) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (!/^\d{9}$/.test(celular)) {
      setError('El campo "celular" debe tener 9 dígitos numéricos');
      return;
    }

    try {
      await axios.post('https://654acfad5b38a59f28ee3f86.mockapi.io/api/users', {
        nombre,
        email,
        celular
      });

      alert('Usuario creado exitosamente');
    } catch (error) {
      setError('Error al crear el usuario');
    }
  };

  return (
    <div>
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Celular:</label>
          <input type="text" value={celular} onChange={(e) => setCelular(e.target.value)} />
        </div>
        <div>
          <button type="submit">Crear</button>
        </div>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
}

export default App;
