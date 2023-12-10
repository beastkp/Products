import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import wheat from "./assets/wheat.jpeg";
import wheat2 from "./assets/wheat2.jpeg";
import rice from "./assets/rice.jpeg";
import rice2 from "./assets/rice2.jpeg";
import perfume from "./assets/perfume.jpeg";
import perfume2 from "./assets/perfume2.jpeg";
import perfume3 from "./assets/perfume3.jpeg";
import perfume4 from "./assets/perfume4.jpeg";
import soy from "./assets/soy.jpeg";
import oil from "./assets/oil.jpeg";
import baseball from "./assets/baseball.jpeg";
import cosmetic from "./assets/cosmetic.jpeg";
import cosmetic2 from "./assets/cosmetic2.jpeg";
import uniform from "./assets/uniform.jpeg";
import uniform2 from "./assets/uniform2.jpeg";
import ProductList from './Components/ProductList'
import Product from './Components/Product'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Header from './Components/Header';

function App() {
  const [count, setCount] = useState(0);
  const products = [
    {
      name: "Product1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: wheat,
      price: 29.99,
      discount_percentage: 10,
    },
    {
      name: "Product2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: wheat2,
      price: 49.99,
      discount_percentage: 15,
    },
    {
      name: "Product3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: rice,
      price: 39.99,
      discount_percentage: 20,
    },
    {
      name: "Product4",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: rice2,
      price: 59.99,
      discount_percentage: 12,
    },
    {
      name: "Product5",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: perfume,
      price: 19.99,
      discount_percentage: 18,
    },
    {
      name: "Product6",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      image: perfume2,
      price: 34.99,
      discount_percentage: 25,
    },
    {
      name: "Product7",
      description:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      image: perfume3,
      price: 44.99,
      discount_percentage: 15,
    },
    {
      name: "Product8",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      image: perfume4,
      price: 69.99,
      discount_percentage: 8,
    },
    {
      name: "Product9",
      description:
        "Soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
      image: soy,
      price: 23.99,
      discount_percentage: 20,
    },
    {
      name: "Product10",
      description:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      image: uniform,
      price: 54.99,
      discount_percentage: 12,
    },
    {
      name: "Product11",
      description:
        "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      image: cosmetic,
      price: 31.99,
      discount_percentage: 18,
    },
    {
      name: "Product12",
      description:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
      image: cosmetic2,
      price: 47.99,
      discount_percentage: 15,
    },
    {
      name: "Product13",
      description:
        "Omnis voluptas assumenda est, omnis dolor repellendus temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      image: uniform2,
      price: 38.99,
      discount_percentage: 10,
    },
    {
      name: "Product14",
      description:
        "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      image: oil,
      price: 29.99,
      discount_percentage: 22,
    },
    {
      name: "Product15",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      image: baseball,
      price: 42.99,
      discount_percentage: 15,
    },
  ];


  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path='/' element={<ProductList products={products}/>} />
      <Route exact path='/product/:product_name' element={<Product products = {products}/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
