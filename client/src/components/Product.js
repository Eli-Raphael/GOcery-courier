import React, {useState} from "react";
// import products from "../productsData";

export default function Product({ product }) {
  
  const [quantity, setquantity] = useState(1)
  const [variant, setvariant] = useState("")

  return (
    <div className ='m-5 shadow p-3 mb-5 bg-white rounded'> 
      <h1>{product.name}</h1>
      <img
        src={product.image}
        className="img-fluid"
        style={{ height: "200px", width: "250px" }}
      />

      <div className="flex-container">
        <div className='m-1 w-100'>
          <p> Variants</p>
          <select className='form-control' value = {variant} onChange={(e)=>{setvariant(e.target.value)}}> 
            {product.variants.map((variants) => {
              return <option value={variants}>{variants}</option>;
            })}
          </select>
        </div>

        <div className='m-1 w-100'>
          <p> Quantity </p>
          <select className='form-control' value = {quantity} onChange={(e)=>{setquantity(e.target.value)}}>
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className='m-1 w-100'>
            <h1>Price: ₱{product.prices[0][variant]*quantity}</h1>
        </div>

        <div className='m-1 w-100'>
            <button className="btn"> Add to Cart</button>
        </div>
      </div>
    </div>
  );
}