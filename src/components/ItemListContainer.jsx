import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos);
            }, 2000);
        });

        promesa.then(respuesta => {
            setItems(respuesta);
        })
    }, [])

    return (
        <div className="container-fluid py-5">
            <div className="row">
                    <img src={"img/banner.png"} alt="banner de la marca" className="img-fluid" width={2000}/>
                    <ItemList items = {items}/>
            </div>
        </div>
    )
}

export default ItemListContainer;