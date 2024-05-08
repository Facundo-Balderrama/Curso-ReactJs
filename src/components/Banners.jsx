import bannerTop from "../assets/img/TOP.png";
import bannerBottom from "../assets/img/BOTTOM.png";
import bannerAces from "../assets/img/ACCESORIOS.png";
import { Link } from "react-router-dom";

const Banners = () => {
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col text-center">
                    <Link to={"/category/tops"}><img src={bannerTop} alt="banner para superiores" className="img-fluid"/></Link>
                </div>
                <div className="col text-center">
                    <Link to={"/category/buttoms"}><img src={bannerBottom} alt="banner para prendas inferiores" className="img-fluid"/></Link>
                </div>
                <div className="col text-center">
                    <Link to={"/category/accesories"}><img src={bannerAces} alt="banner para accesorios" className="img-fluid"/></Link>
                </div>
            </div>
        </div>
    )
}

export default Banners;