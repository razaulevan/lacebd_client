import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`https://radiant-mesa-42940.herokuapp.com/cameras`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    let homeData = [];
    for (const data of products) {
        if (homeData.length <= 9) {
            homeData.push(data)

        }
    }


    return (

        <div style={{ backgroundColor: 'rgba(255, 206, 231, 0.5)' }} id="products" className="mt-3 mx-auto py-2">
            <h1 className="py-3"> Buy Your Dream Products</h1>
            <div className="row row-cols-md-4 row-cols-sm-3 row-cols-2 g-3 services mb-5">
                {

                    homeData.map(product => <Product


                        key={product._id}
                        product={product}
                    ></Product>)
                }

            </div>

        </div>
    );
};


export default Products;