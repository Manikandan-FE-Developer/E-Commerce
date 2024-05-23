import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

export default function ProductCard({product}){
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    const formatPriceWithCommas = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const formattedPrice = formatPriceWithCommas(product.price);

    return  isLoading ? ( <img className="pcSpinner" src='images/spinner.svg' alt='spinner'/> ) : (
            <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                <div className="card p-3 rounded">
                    <img className="card-img-top mx-auto" src={product.image} alt={product.name}/>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                        <Link to={"/product/"+product._id}>{product.name}</Link>
                        </h5>
                    </div>
                    <div className="ratings mt-auto">
                        <div className="rating-outer">
                            <div className="rating-inner" style={{width : `${product.ratings/5*100}%`}}></div>
                        </div>
                    </div>
                    <p className="card-text">₹ {formattedPrice}</p>
                    <Link to={"/product/"+product._id} href="#" id="view_btn" className="btn btn-block">View Details</Link>
                </div>
            </div>
    );
}