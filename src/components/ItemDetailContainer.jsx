import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [visible, setVisible] = useState(true);
    const {id} = useParams();

    //Productos Firestore
    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "items", id);
        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()}); 
                setVisible(false);
            }
        });
    }, [id]);

    return (
        <div className="container-fluid py-5">
            <div className="row">
                    {/*<img src={"img/banner.png"} alt="banner de la marca" className="img-fluid" width={2000}/>*/}
                    {visible ? <Loading /> : <ItemDetail item = {item}/>}
            </div>
        </div>
    )
}

export default ItemDetailContainer;