import React from 'react';
import { useParams } from "react-router-dom";

const Product = ({products}) => {
    const { product_name } = useParams();
    const selectedProduct = products.find(
      (p) => p.name.toLowerCase() === product_name.toLowerCase()
    );
  return (
    <div className='flex flex-col items-center border-2 border-gray-300 p-5 m-5'>
      <img src={selectedProduct.image} alt={selectedProduct.name} className='w-60 h-60 p-5'/>
      <div className='font-bold p-2 text-xl m-2'>
      <h1>Name: {selectedProduct.name}</h1>
      <p>Description: {selectedProduct.description}</p>
      <p>Price: ${selectedProduct.price}</p>
      <p>Discount: {selectedProduct.discount_percentage}%</p>
      </div>
    </div>
  );
}

export default Product