import React from 'react';
import Product from '../components/Product'; 
import products from '../productsData';

export default function Home() {
 return (
    <div className="row">
    {products.map(product => {
        return <div className="col-md-4">
            <div>
                <Product product={product}/> 
            </div>
        </div>
    })}
    </div>
 );
}