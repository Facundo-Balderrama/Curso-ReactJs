import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos);
            }, 2000);
        });

        promesa.then(respuesta => {
            setItems(respuesta);
        })
    }, [id])

    return (
        <div className="container-fluid py-5">
            <div className="row">
                    {/*<img src={"img/banner.png"} alt="banner de la marca" className="img-fluid" width={2000}/>*/}
                    <ItemList items = {items}/>
            </div>
        </div>
    )
}

export default ItemListContainer;