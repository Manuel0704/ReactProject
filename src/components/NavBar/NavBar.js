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
            <div className="CustomNavbar collapse navbar-collapse" id="navbarText">
                <ul className="CustomNavbar__list navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className={"CustomNavbar__item"} to="/">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"CustomNavbar__item"} to="/categoria/Human">Humanos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"CustomNavbar__item"} to="/categoria/Alien">Aliens</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"CustomNavbar__item"} to="/categoria/Humanoid">Humanoides</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"CustomNavbar__item"} to="/categoria/unknown">Desconocido</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"CustomNavbar__item"} to="/categoria/Mythological Creature">Criaturas mitológicas</NavLink>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    </header>
}

export default Header;