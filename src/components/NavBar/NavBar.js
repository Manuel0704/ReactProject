import "./estilos/NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const Header = () =>
{
    return <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="./index.html">
                <img src="./assets/makross_logo.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                Makross Store
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="./index.html">Inicio<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./index.html">Categorías</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./index.html">Carrito</a>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    </header>
}

export default Header;