import React from 'react';
import products from '../productsData';

export default function Product({product}) { 
 return (
    <div>
        <h1>{product.name}</h1>
        <img src ={products.image} className="img-fluid"/>
    </div>
 );
}