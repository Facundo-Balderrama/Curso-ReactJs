import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo-blanco.png"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-black p-3">
                <div className="col"></div>
                <div className="col-md text-center">
                    <Link to={"/"}>
                        <img src={logo} alt="logo de la marca" width={320}/>    
                    </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink className="nav-link text-dark" to={"/"}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-dark" to={"/category/tops"}>Tops</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-dark" to={"/category/buttoms"}>Buttoms</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-dark" to={"/category/accesories"}>Accesories</NavLink>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;