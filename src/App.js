import React from "react";
import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import NewProduct from "./components/Pages/NewProduct";
import Product from "./components/Pages/Product/Product";
import AoNam from "./components/Pages/AoNam";
import Home from "./components/Pages/Home/Home";
import QuanNam from "./components/Pages/QuanNam";
import Tech from "./components/Pages/Tech";
import Outlet from "./components/Pages/Outlet";
import Collect from "./components/Pages/Collect";
import Enjoy from "./components/Pages/Enjoy";
import Account from "./components/Pages/Account/Account";
import Cart from "./components/Pages/Cart";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/san-pham-moi" element={<NewProduct />} />
        <Route path="/tat-ca-san-pham" element={<Product />} />
        <Route path="/nhom-quan" element={<QuanNam />} />
        <Route path="/nhom-ao" element={<AoNam />} />
        <Route path="/techurban-jeans" element={<Tech />} />
        <Route path="/outlet" element={<Outlet />} />
        <Route path="/collect" element={<Collect />} />
        <Route path="/enjoy" element={<Enjoy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
};

export default App;
