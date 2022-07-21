import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './product.css';

const Product = ()=>{

     const [products,setProducts] = useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((response)=>{
            setProducts(response.data)
        })
    },[''])
return(
<div className='container'>
  
  {products.map((product,key)=>(
  <div className="card" key ={product.id}>
    <img
      src={product.image}
      alt="Denim Jeans"
      style={{ width: "82%", height:'250px' }}
    />
    <h5>{product.title}</h5>
    <p className="price">${product.price}</p>
  </div>
  ))}
</div>
)
}
export default Product;