import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const CategoryProductDetail = () => {
  const { categoryName, productId } = useParams(); // Get category and product ID from the URL
  console.log("categoryName:", categoryName);
  console.log("productId:", productId);
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/categories/${categoryName}/products/${productId}`);
        console.log('Fetched product data:', response.data);
        setProduct(response.data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to load product.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [categoryName, productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2 ">{product.name}</h1>
      <img 
        src={`http://localhost:3000/${product.image}`} 
        alt={product.name} 
        className="w-96 h-60 object-cover mb-6 rounded-lg" 
      />
      <p className="mb-2">{product.description}</p>
      <p className="text-lg font-semibold">Price: ${product.price}</p>

      <button 
        onClick={handleAddToCart}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CategoryProductDetail;
