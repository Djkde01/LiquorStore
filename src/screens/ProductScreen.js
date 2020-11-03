import React from 'react';
import Rating from '../components/Rating';
import data from '../data';
import {Link} from 'react-router-dom';

export default function ProductScreen(props){
    const product = data.products.find(x => x._id === props.match.params.id);
    if (!product){
        return (
            <div>
                No se ha encontrado el producto
            </div>
        )
    }
    return(
        <div>
        <Link to="/"> Volver </Link>
            <div className="row center">
                <div className="col-2">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            {product.name}
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}/>
                        </li>
                        <li>
                            Precio: ${product.price}
                        </li>
                        <li>
                            Descripción
                            <p>
                                {product.description}
                            </p>
                        </li>
                    </ul>
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>
                                        Precio 
                                    </div>
                                    <div>
                                        {product.price}
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>
                                        Estado: 
                                    </div>
                                    <div>
                                        {product.countInStock > 0 ? <span className="success">En Stock</span> : <span className="danger">No disponible</span>}
                                    </div>

                                </div>
                            </li>
                            <li>
                                <button className="primary block"> Añadir al carrito </button>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    )
}