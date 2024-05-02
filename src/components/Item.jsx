const Item = ({item}) => {
    return (
        <div className="col-md-4 text-center py-3">
        <div className="card border-0">
            <img src={item.imagen} className="img-fluid" alt={item.nombre} />
            <div className="card-body">
                <p className="card-text text-uppercase">{item.nombre}</p>
                <p className="card-text"><b>${item.precio}</b></p>
        </div>
        </div>
        </div>
    )
}

export default Item;