import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './product.css';
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/navbar';
import '../Navbar/navbar.css';


const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([])
  const handleClick = (product) => {
    navigate(`/reactllive/productdetail/${product.id}`);
  }
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setProducts(response.data)
    })
  }, [''])
  return (
    <div><Navbar></Navbar>
    <div className='containe'>
      {products.map((product, key) => (
        <div className="card" key={product.id} onClick={() => handleClick(product)}>
          <img
            src={product.image}
            alt="Denim Jeans"
            style={{ width: "82%", height: '250px' }}
          />
          <h5>{product.title}</h5>
          <p className="price">${product.price}</p>
        </div>
      ))}
    </div>
    </div>
  )
}
export default Product;