import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                const producto = arrayProductos.find(item => item.id == 1);
                resolve(producto);
            }, 2000);
        });

        promesa.then(respuesta => {
            setItem(respuesta);
        })
    }, [])

    return (
        <div className="container-fluid py-5">
            <div className="row">
                    <img src={"img/banner.png"} alt="banner de la marca" className="img-fluid" width={2000}/>
                    <ItemDetail item = {item}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;