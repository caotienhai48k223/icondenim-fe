import React from "react";
import "./MobileDD.css";
import { Link } from "react-router-dom";


export default function MobileDD({visible, toggleMobileDropdown}) {
  return (
    <div className='mobile_div'>
      <div className={`mobile_container ${visible ? 'showmb' : 'hidemb'}`}>
        <div className="mobile_content">
          <div className="top_mobiledd">
            <Link to="/">
              <div className="login_ic">
                <i class="fa-solid fa-user user2"></i>
              </div>
              <div className="mobile_login">
                <div className="login_title">ĐĂNG NHẬP</div>
                <div className="login_content">Nhận nhiều ưu đãi hơn</div>
              </div>
            </Link>
          </div>
          <div className="bottom_mobiledd">
            <div className="product_mb">
              <div className="product_mb_title">
                <Link to="/tat-ca-san-pham">Sản Phẩm</Link>
                <Link>
                  <i class="fa-solid fa-angle-right right_ic2"></i>
                </Link>
              </div>
            </div>
            <div className="newproduct_mb">
              <div className="newproduct_mb_title">
                <Link to="/san-pham-moi">Hàng Mới New</Link>
              </div>
            </div>
            <div className="aonam_mb">
              <div className="aonam_mb_title">
                <Link to="/tat-ca-san-pham">Áo Nam</Link>
                <Link>
                  <i class="fa-solid fa-angle-right right_ic2"></i>
                </Link>
              </div>
            </div>
            <div className="quannam_mb">
              <div className="quannam_mb_title">
                <Link to="/tat-ca-san-pham">Quần Nam</Link>
                <Link>
                  <i class="fa-solid fa-angle-right right_ic2"></i>
                </Link>
              </div>
            </div>
            <div className="techurban_mb">
              <div className="techurban_mb_title">
                <Link to="/tat-ca-san-pham">TECH URBAN JEANS</Link>
                <Link>
                  <i class="fa-solid fa-angle-right right_ic2"></i>
                </Link>
              </div>
            </div>
            <div className="outlet_mb">
              <div className="outlet_mb_title">
                <Link to="/san-pham-moi">OUTLET</Link>
              </div>
            </div>
            <div className="collect_mb">
              <div className="collect_mb_title">
                <Link to="/tat-ca-san-pham">Collection</Link>
                <Link>
                  <i class="fa-solid fa-angle-right right_ic2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile_opacity ${visible ? 'showopa':'hideopa'}`} onClick={toggleMobileDropdown}></div>
    </div>
  );
}
