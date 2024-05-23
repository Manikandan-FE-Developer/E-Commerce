import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        setLoading(true);
        fetch(process.env.REACT_APP_API_URL + '/products?' + searchParams)
            .then(res => res.json())
            .then(res => {
                setProducts(res.products);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [searchParams]);

    return (
        <Fragment>
            <h1 id="products_heading">Latest Products</h1>
            <section id="products" className="container mt-5">
                {loading ? (
                    <img className="spinner" src='/images/spinner.svg' alt='spinner'/>
                ) : (
                    <div className="row">
                        {products.map(product => ( <ProductCard key={product.id} product={product} />))}
                    </div>
                )}
            </section>
        </Fragment>
    );
}