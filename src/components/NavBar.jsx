import logo from "../assets/img/logo-negro.png"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-black">
                <div className="col"></div>
                <div className="col-md text-center">
                    <a href="#">
                        <img src={logo} alt="logo de la marca" width={320}/>    
                    </a>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row">
                <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Tops</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Bottoms</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">Accesories</a>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;