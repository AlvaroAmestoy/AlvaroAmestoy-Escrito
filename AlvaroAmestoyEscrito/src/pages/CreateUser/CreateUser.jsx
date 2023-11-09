import { useState } from 'react';
import './createUser.css'
import axios from 'axios';

function CreateUser() {
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
        <div className='createUser'>
            <form onSubmit={handleSubmit}>
                <h2>Crear Usuario</h2>
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
                    <input type="number" value={celular} onChange={(e) => setCelular(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Crear</button>
                </div>
            </form>
            {error && <div>{error}</div>}
        </div>
    );
}

export default CreateUser;