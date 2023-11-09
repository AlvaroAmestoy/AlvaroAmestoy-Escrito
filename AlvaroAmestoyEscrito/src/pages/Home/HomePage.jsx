import { Link } from 'react-router-dom';
import './homeStyle.css'

function HomePage() {
    return (
        <div className='home'>
            <h2>Inicio</h2>
            <p>Crear usuario</p>
            <Link to="/crear">Crear un usuario</Link>
        </div>
    );
}

export default HomePage;