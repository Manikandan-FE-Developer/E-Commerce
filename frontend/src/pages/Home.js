import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Fragment>
            <div className="swiper">
                <Slider {...settings}>
                    <div className="swiper-slide">
                        <img src='/images/banner1.jpg' className='banner banner1' alt='banner1'/>
                    </div>
                    <div className="swiper-slide">
                        <img src='/images/banner2.jpg' className='banner banner2' alt='banner2'/>
                    </div>
                    <div className="swiper-slide">
                        <img src='/images/banner3.jpg' className='banner banner3' alt='banner3'/>
                    </div>
                </Slider>
            </div>
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