import React, { useEffect, useState } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProductDetails();
  }, [productId]);
  if (!product) {
    return <p>Loading details...</p>;
  }
  return (
    <div className='products'>
  <h1 className='productheading'>Product Details Page</h1>
      <div className='productImage'>
        <img src={product.thumbnail} alt={product.title} className='images'/>
        <h2>{product.title}</h2>
        <p>{product.brand}</p>
        <p>Ksh {product.price}</p>
      </div>
    </div>
  );
};
export default ProductDetails;