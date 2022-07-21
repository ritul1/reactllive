import React, { useEffect, useState } from 'react';
import './productdetails.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import '../Navbar/navbar.css';

function ProductDeatil(){
  const params = useParams();
  const [product,setProduct] = useState('');
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${params.id}`).then((response)=>{

      setProduct(response.data)
  })
  })


  return (
    <div>
      <Navbar></Navbar>
    <div className="product-container">
      <div className="product-image">
        <img
          src={product.image}
          alt=""
          className="product-pic"
        />
      </div>
      <div className="product-details">
        <header>
          <h1 className="title">{product.title}</h1>
          <div className="price">
            <span className="current">${product.price}</span>
          </div>
        </header>
        <article>
          <h5>Description</h5>
          <p>
           {product.description}
          </p>
        </article>
        <div className="footer">
          <button type="button">
            <img
              src="http://co0kie.github.io/codepen/nike-product-page/cart.png"
              alt=""
            />
            <span>add to cart</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
export default ProductDeatil;