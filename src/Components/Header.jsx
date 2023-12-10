// Header.js

import React from "react";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">My Website</div>

        <ul className="flex space-x-4">
          <li>
            <a
              href="/"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/products"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              About
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Header;
