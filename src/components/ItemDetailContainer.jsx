import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                const producto = arrayProductos.find(item => item.id == id);
                resolve(producto);
            }, 2000);
        });

        promesa.then(respuesta => {
            setItem(respuesta);
        })
    }, [id])

    return (
        <div className="container-fluid py-5">
            <div className="row">
                    {/*<img src={"img/banner.png"} alt="banner de la marca" className="img-fluid" width={2000}/>*/}
                    <ItemDetail item = {item}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;