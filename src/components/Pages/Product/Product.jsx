import React from 'react';
import Header from '../../Header/Header';
import { Helmet } from 'react-helmet';
import Footer from '../../Footer/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Product.css';
import { Link } from 'react-router-dom';
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 30;
  const [currentTranslate, setCurrentTranslate] = useState({});
  const [atEnd, setAtEnd] = useState({});
  const [toggleIconPro, setToggleIconPro] = useState({});
  const [hoveredProduct, setHoveredProduct] = useState({});

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const containerWidth = 144;
  const handleScrollRight = (productId, itemCount) => {
    setCurrentTranslate(prevState => {
      const maxTranslate = -(itemCount * 35 + (itemCount - 1) * 1 - containerWidth);
      const currentTranslateValue = prevState[productId] || 0;
      let newTranslate = currentTranslateValue - containerWidth;
      if (newTranslate < maxTranslate) {
        newTranslate = maxTranslate;
      }
      if (newTranslate === maxTranslate) {
        setAtEnd(prevState => ({ ...prevState, [productId]: true }));
      }
      return { ...prevState, [productId]: newTranslate };
    });
  };
  const handleScrollLeft = (productId) => {
    setCurrentTranslate(prevState => {
      const currentTranslateValue = prevState[productId] || 0;
      let newTranslate = currentTranslateValue + containerWidth;
      if (newTranslate > 0) {
        newTranslate = 0;
      }
      if (newTranslate === 0) {
        setAtEnd(prevState => ({ ...prevState, [productId]: false }));
      }
      return { ...prevState, [productId]: newTranslate };
    });
  };

  const handleClickIcon = (productId) => {
    setToggleIconPro(prevState => ({
      ...prevState,
      [productId]: !prevState[productId]
    }));
  };


  const handleMouseEnter = (productId) => {
    setHoveredProduct(prevState => ({
      ...prevState,
      [productId]: true
    }));
  };
  const handleMouseLeave = (productId) => {
    setHoveredProduct(prevState => ({
      ...prevState,
      [productId]: false
    }));
  };




  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbersToDisplay = [];
  
    if (currentPage > 1) {
      pageNumbersToDisplay.push(
        <button key="prev" onClick={() => handlePageClick(currentPage - 1)}>
          <MdOutlineKeyboardArrowLeft />
        </button>
      );
    }
  
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(pageNumbers.length, currentPage + 2);
  
    for (let i = startPage; i <= endPage; i++) {
      pageNumbersToDisplay.push(
        <button
          key={i}
          className={i === currentPage ? 'active' : ''}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }
  
    if (endPage < pageNumbers.length) {
      if (endPage < pageNumbers.length - 1) {
        pageNumbersToDisplay.push(<span key="dots-end"><button>...</button></span>);
      }
      pageNumbersToDisplay.push(
        <button
          key={pageNumbers.length}
          onClick={() => handlePageClick(pageNumbers.length)}
        >
          {pageNumbers.length}
        </button>
      );
    }
  
    if (currentPage < pageNumbers.length) {
      pageNumbersToDisplay.push(
        <button key="next" onClick={() => handlePageClick(currentPage + 1)}>
          <MdOutlineKeyboardArrowRight />
        </button>
      );
    }
  
    return pageNumbersToDisplay;
  };
  

  return (
    <div>
      <Helmet>
        <title>Tất Cả Sản Phẩm - Thời Trang Đa Dạng Phong Cách</title>
      </Helmet>
      <div className='product_page'>
        <Header />
        <div className='product_page_div'>
          <div className='product_page_container'>
            <div className='product_page_list'>
              {currentProducts.map(product => (
                <div key={product.Id} className='product_page_item'>
                  <div className='product_page_item_container' onMouseEnter={() => handleMouseEnter(product.Id)} onMouseLeave={() => handleMouseLeave(product.Id)}>
                    <div className='product_page_item_top'>
                      <div className='product_img_page'>
                        {product.Img.length > 0 && (
                          <img
                            src={product.Img[0]}
                            alt={product.Title}
                            onMouseEnter={e => e.currentTarget.src = product.Img[1] || product.Img[0]}
                            onMouseLeave={e => e.currentTarget.src = product.Img[0]}
                          />
                        )}
                      </div>
                      <div className='product_enjoy_icon' onClick={() => handleClickIcon(product.Id)}>
                        {toggleIconPro[product.Id] ? <VscHeartFilled className='pro_enjoy_fill_ic' /> : <VscHeart className='pro_enjoy_ic' />}
                      </div>
                      {product.Price !== 'COMING SOON' && (
                        <div className={`product_cart_look ${hoveredProduct[product.Id] ? 'addcart_show' : 'addcart_hide'}`}>
                          <div className='pro_cart_ic'><FaShoppingCart className='pro_cl' /></div>
                          <div className='pro_look_ic'><FaEye className='pro_cl' /></div>
                        </div>
                      )}
                    </div>
                    <div className='product_page_item_bottom'>
                      <div className='product_title_page' title={`${product.Title}`}>
                        <Link>{product.Title}</Link>
                      </div>
                      <div className='product_price_stock'>
                        <div className={`product_price_page ${product.Price === 'COMING SOON' ? 'comingsoon' : ''}`}>
                          {product.Price}
                        </div>
                        <div className={`product_stock_page ${product.Stock === 'Hết hàng' ? '' : 'instock'}`}>
                          {product.Stock}
                        </div>
                      </div>
                      <div className='product_category_page_wrapper'>
                        <div className='product_category_page'>
                          <div className='product_category_page_detail' style={{ transform: `translateX(${currentTranslate[product.Id] || 0}px)` }}>
                            {product.Img.slice(2).map((img, index) => (
                              <div className='product_category_page_img' key={index}>
                                <div className='product_select_color' title={`${product.Category[index] || ''}`}>
                                  <img
                                    src={img}
                                    alt={product.Title}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {product.Img.slice(2).length * 35 > 200 && (
                          <div className='product_category_button'>
                            {!atEnd[product.Id] ? (
                              <div className='pro_btn_right' onClick={() => handleScrollRight(product.Id, product.Img.slice(2).length)}>
                                <MdKeyboardDoubleArrowRight className='double_arrow' />
                              </div>
                            ) : (
                              <div className='pro_btn_left' onClick={() => handleScrollLeft(product.Id)}>
                                <MdKeyboardDoubleArrowLeft className='double_arrow' />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='pagination'>
              {renderPageNumbers()}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}