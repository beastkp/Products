import React from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductList = ({products}) => {
    const navigate = useNavigate();
  
  const handleClick = (name) => {
    console.log("HI ");
    navigate(`/product/${name}`);

  }

  return (
    <div className="flex flex-wrap p-5 m-5">
      {products.map((product) => {
        return (
          <div className="flex gap-4 p-5 m-5 flex-col border-2 border-gray-300 rounded-xl shadow-xl hover:scale-110 delay-100 duration-300">
            <img src={product.image} alt={product.name} className="w-48 h-48" />
            <div className="font-semibold">
              <p className="p-1" >Name: {product.name}</p>
              <p className="p-1">Price: {product.price}</p>
              <button className="border-2 border-gray-300 rounded-xl p-2 hover:bg-gray-300" onClick={()=>handleClick(product.name)}>See More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
