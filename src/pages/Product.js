// src/pages/Product.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/productService';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await productService.getProductById(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
