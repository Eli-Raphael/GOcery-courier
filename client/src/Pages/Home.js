import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import { getAllProducts } from '../actions/productActions';
import products from '../productsData'

export default function Home() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <div className="row">
            {products.map(product => (
                <div className="col-md-4" key={product.id}>
                    <div>
                        <Product product={product} />
                    </div>
                </div>
            ))}
        </div>
    );
}