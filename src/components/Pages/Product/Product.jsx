import React from 'react'
import Header from '../../Header/Header'
import { Helmet } from 'react-helmet';
import Footer from '../../Footer/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Product.css'

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/products')
      .then(response => {
        console.log(response.data)
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Tất Cả Sản Phẩm - Thời Trang Đa Dạng Phong Cách</title>
      </Helmet>
      <div className='product_page'>
        <Header />
        <body>
          <div className='product_page_div'>
            <h1>Product List</h1>
            <ul>
              {products.map(product => (
                <li key={product.Id}>
                  <h2>{product.Title}</h2>
                  <p>{product.Price}</p>
                  <p>{product.Stock}</p>
                  <div>
                    {product.Category.map((cat, index) => (
                      <span key={index}>{cat}</span>
                    ))}
                  </div>
                  <div>
                    {product.Img.map((img, index) => (
                      <img key={index} src={img} alt={product.Title} />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </body>
        <Footer />
      </div>
    </div>
  );
}
