
import CartWidget from '../CartWidget.js/CartWidget'
import './NavBar.css'

function NavBar(){
        return(

        <nav className="nav">    
                <h1 className="logoH1">Tiana Vegana</h1>

        <ul className="list">

                <li className="list__item list__item-click">
                </li>
                        <a className="nav__link" href="#1">Elección vegana</a>
                
                
                <li className="list__item">
                        <a className="nav__link" href="#1">Menú de la semana</a>
                </li>

                <li className="list__item list__item-click">
                        <a className="nav__link" href="#1">Prepara en casa</a>
                </li>

                <li className="list__item">
                        <a className="nav__link" href="#1">Contacto</a>
                </li>
                
                <li className="list__item">
                        <a className="nav__link" href="#1"><CartWidget/></a>
                </li>

                </ul>

        </nav>
        )
}


export default NavBar