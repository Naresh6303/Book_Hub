// Import statements
import React, { useEffect, useState } from 'react';
import '../Style/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function product_data() {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
        }
        product_data();
    }, []);

    return (
        <>
            <h2 className='home_title'>Home</h2>

            <div className="product-container">
                {products.map((data) => (
                    <div key={data.id} className="proCard">
                        <div>
                            <img className="product_img" src={data.thumbnail} alt="" />
                        </div>

                        <div className="card_content">
                            <div className="brand">{data.title}</div>
                            <div className="description">{data.description}</div>
                            <div className="price">
                                <small>&#x20B9;</small>
                                <span className='priceProduct'>{data.price * 70 * 0.9}</span> &nbsp;
                                <span className='mrp'>M.R.P</span> &nbsp;
                                <strike>{data.price * 70}</strike> &nbsp;
                                <span>(10% off)</span>
                            </div>
                        </div>

                        <button className='view_btn'><Link className='BtnLink' to={`/${data.id}`}>View</Link></button>
                    </div>
                ))}
            </div>
            <div className="bottomBar">

                <div className="bottmomFlex">
                    
                    <div className="bottomText">
                        Become a Seller
                    </div>

                    <div className="bottomText">
                        Help Center
                    </div>

                    <div className="bottomText">
                        Gift Cards
                    </div>

                    <div className="bottomText">
                        Advertise
                    </div>


                    <div>
                        <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg' alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
