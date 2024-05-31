import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
        console.log("Agregaste: " + quantity + " productos")
    }  

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src={item.imagen} className="img-fluid" alt={item.nombre} width={800}/>
                </div>
                <div className="col-md-5">
                    <h1 className="fs-5 text-uppercase">{item.nombre}</h1>
                    <p className="fs-2 fw-bold">${item.precio}</p>
                    <p>{item.descripcion}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;