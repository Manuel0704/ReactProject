import "./estilos/NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from "react-router-dom"

const Header = () =>
{
    return <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src="./assets/makross_logo.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                Makross Store
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/">Inicio<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/categoria/human">Humanos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/categoria/alien">Aliens</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/categoria/humanoid">Humanoides</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/categoria/mythological%20creature">Criaturas mitológicas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/categoria/unknown">Desconocido</NavLink>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    </header>
}

export default Header;