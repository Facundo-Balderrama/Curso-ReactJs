const ItemListContainer = ({mensaje}) => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col text-center">
                    <h2 className="text-dark">{mensaje}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col margin">
                    <img src={"img/banner.png"} alt="banner de la marca" className="img-fluid"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md 3">
                    <a href="#"><img src={"img/TOP.png"} alt="diseños de remeras y buzos" className="img-fluid" /></a>
                </div>
                <div className="col">
                    <a href="#"><img src={"img/BOTTOM.png"} alt="diseños de pantalones" className="img-fluid" /></a>
                </div>
                <div className="col">
                    <a href="#"><img src={"img/ACCESORIOS.png"} alt="diseños de accesorios" className="img-fluid" /></a>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;