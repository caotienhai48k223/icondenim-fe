import React from "react";
import "./MobileDD.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MobileDD({ visible, toggleMobileDropdown }) {
  const [currentMenu, setCurrentMenu] = useState("mainMenu");
  const [menuHistory, setMenuHistory] = useState([]);
  const showSubMenu = (menuId) => {
    setMenuHistory([...menuHistory, currentMenu]);
    setCurrentMenu(menuId);
  };
  const showMainMenu = () => {
    setMenuHistory([]);
    setCurrentMenu("mainMenu");
  };
  const showPreviousMenu = () => {
    const newHistory = [...menuHistory];
    const previousMenu = newHistory.pop();
    setMenuHistory(newHistory);
    setCurrentMenu(previousMenu);
  };

  return (
    <div className="mobile_div">
      <div className={`mobile_container ${visible ? "showmb" : "hidemb"}`}>
        <div className={`menuproduct ${currentMenu === "mainMenu" ? "active" : ""}`} id="mainMenu">
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
                <Link onClick={() => showSubMenu("productsMenu")}>
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
                <Link onClick={() => showSubMenu("mensShirtsMenu")}>
                  <i class="fa-solid fa-angle-right right_ic2"></i>
                </Link>
              </div>
            </div>
            <div className="quannam_mb">
              <div className="quannam_mb_title">
                <Link to="/tat-ca-san-pham">Quần Nam</Link>
                <Link onClick={() => showSubMenu("mensPantsMenu")}>
                  <i class="fa-solid fa-angle-right right_ic2"></i>
                </Link>
              </div>
            </div>
            <div className="techurban_mb">
              <div className="techurban_mb_title">
                <Link to="/tat-ca-san-pham">TECH URBAN JEANS</Link>
                <Link onClick={() => showSubMenu("techUrbanMenu")}>
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
                <Link onClick={() => showSubMenu("collectionMenu")}>
                  <i class="fa-solid fa-angle-right right_ic2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`sub-menuproduct ${currentMenu === "productsMenu" ? "active" : ""}`} id="productsMenu">
          <div className="top_productmb">
            <div className="back_ic" onClick={showPreviousMenu}>
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="productmb_header">SẢN PHẨM</div>
          </div>
          <div className="bottom_productmb">
            <div className="menuproduct_items">
              <div className="menuproduct_items_title">
                <Link to="/tat-ca-san-pham">Áo</Link>
                <Link onClick={() => showSubMenu("mensShirtsMenu1")}>
                  <i class="fa-solid fa-angle-right right_ic2"></i>
                </Link>
              </div>
            </div>
            <div className="menuproduct_items">
              <div className="menuproduct_items_title">
                <Link to="/tat-ca-san-pham">Quần</Link>
                <Link onClick={() => showSubMenu("mensPantsMenu1")}>
                  <i class="fa-solid fa-angle-right right_ic2"></i>
                </Link>
              </div>
            </div>
            <div className="menuproduct_items">
              <div className="menuproduct_items_title">
                <Link to="/tat-ca-san-pham">Giày & Phụ Kiện</Link>
                <Link onClick={() => showSubMenu("mensGvpsMenu")}>
                  <i class="fa-solid fa-angle-right right_ic2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`sub-menuproduct ${currentMenu === 'mensShirtsMenu' ? 'active' : ''}`} id='mensShirtsMenu'>
          <div className="top_aonammb">
            <div className="back_ic" onClick={showPreviousMenu}>
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="aonammb_header">ÁO NAM</div>
          </div>
          <div className="bottom_aonammb">
            <div className="menuaonam_items">
              <div className="menuaonam_items_title">
                <Link to="/tat-ca-san-pham">Áo Thun</Link>
              </div>
            </div>
            <div className="menuaonam_items">
              <div className="menuaonam_items_title">
                <Link to="/tat-ca-san-pham">Áo Polo</Link>
              </div>
            </div>
            <div className="menuaonam_items">
              <div className="menuaonam_items_title">
                <Link to="/tat-ca-san-pham">Áo Sơmi</Link>
              </div>
            </div>
            <div className="menuaonam_items">
              <div className="menuaonam_items_title">
                <Link to="/tat-ca-san-pham">Áo Khoác</Link>
              </div>
            </div>
            <div className="menuaonam_items">
              <div className="menuaonam_items_title">
                <Link to="/tat-ca-san-pham">Tank Top - Áo Ba Lỗ</Link>
              </div>
            </div>
            <div className="menuaonam_items">
              <div className="menuaonam_items_title">
                <Link to="/tat-ca-san-pham">Áo Nỉ Và Len</Link>
              </div>
            </div>
            <div className="menuaonam_items">
              <div className="menuaonam_items_title">
                <Link to="/tat-ca-san-pham">Hoodie</Link>
              </div>
            </div>
            <div className="menuaonam_items">
              <div className="menuaonam_items_title">
                <Link to="/tat-ca-san-pham">Set Đồ</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`sub-menuproduct ${currentMenu === 'mensPantsMenu' ? 'active' : ''}`} id='mensPantsMenu'>
          <div className="top_quannammb">
            <div className="back_ic" onClick={showPreviousMenu}>
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="quannammb_header">QUẦN NAM</div>
          </div>
          <div className="bottom_quannammb">
            <div className="menuquannam_items">
              <div className="menuquannam_items_title">
                <Link to="/tat-ca-san-pham">Quần Jean</Link>
              </div>
            </div>
            <div className="menuquannam_items">
              <div className="menuquannam_items_title">
                <Link to="/tat-ca-san-pham">Quần Short</Link>
              </div>
            </div>
            <div className="menuquannam_items">
              <div className="menuquannam_items_title">
                <Link to="/tat-ca-san-pham">Quần Kaki & Chino</Link>
              </div>
            </div>
            <div className="menuquannam_items">
              <div className="menuquannam_items_title">
                <Link to="/tat-ca-san-pham">Quần Jogger</Link>
              </div>
            </div>
            <div className="menuquannam_items">
              <div className="menuquannam_items_title">
                <Link to="/tat-ca-san-pham">Quần Tây</Link>
              </div>
            </div>
            <div className="menuquannam_items">
              <div className="menuquannam_items_title">
                <Link to="/tat-ca-san-pham">QUần Boxer</Link>
              </div>
            </div>
            <div className="menuquannam_items">
              <div className="menuquannam_items_title">
                <Link to="/tat-ca-san-pham">Set Đồ</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`sub-menuproduct ${currentMenu === 'techUrbanMenu' ? 'active' : ''}`} id='techUrbanMenu'>
          <div className="top_techurbanmb">
            <div className="back_ic" onClick={showPreviousMenu}>
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="techurbanmb_header">TECH URBAN JEANS</div>
          </div>
          <div className="bottom_techurbanmb">
            <div className="menutechurban_items">
              <div className="menutechurban_items_title">
                <Link to="/tat-ca-san-pham">SMART JEANS</Link>
                <Link onClick={() => showSubMenu("smartJeansMenu")}>
                  <i class="fa-solid fa-angle-right right_ic2"></i>
                </Link>
              </div>
            </div>
            <div className="menutechurban_items">
              <div className="menutechurban_items_title">
                <Link to="/tat-ca-san-pham">ICON105 Lightweight</Link>
                <Link onClick={() => showSubMenu("icon105Menu")}>
                  <i class="fa-solid fa-angle-right right_ic2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className={`sub-menuproduct ${currentMenu === 'collectionMenu' ? 'active' : ''}`} id='collectionMenu'>
          <div className="top_collectmb">
            <div className="back_ic" onClick={showPreviousMenu}>
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="collectmb_header">COLLECTION</div>
          </div>
          <div className="bottom_collectmb">
            <div className="menucollect_items">
              <div className="menucollect_items_title">
                <Link to="/tat-ca-san-pham">BLOKECORE</Link>
              </div>
            </div>
            <div className="menucollect_items">
              <div className="menucollect_items_title">
                <Link to="/tat-ca-san-pham">LIGHT SUMMER COLLECTION</Link>
              </div>
            </div>
            <div className="menucollect_items">
              <div className="menucollect_items_title">
                <Link to="/tat-ca-san-pham">The Rhythm of Life - FW23</Link>
              </div>
            </div>
            <div className="menucollect_items">
              <div className="menucollect_items_title">
                <Link to="/tat-ca-san-pham">ENDLESS SUMMER - Collection SS23</Link>
              </div>
            </div>
            <div className="menucollect_items">
              <div className="menucollect_items_title">
                <Link to="/tat-ca-san-pham">ĐỂ ĐÓ BA LO - Mini Camp 23</Link>
              </div>
            </div>
            <div className="menucollect_items">
              <div className="menucollect_items_title">
                <Link to="/tat-ca-san-pham">Fair Play FW19</Link>
              </div>
            </div>
            <div className="menucollect_items">
              <div className="menucollect_items_title">
                <Link to="/tat-ca-san-pham">[Colab Project 21] The Art Of Hát Bội</Link>
              </div>
            </div>
            <div className="menucollect_items">
              <div className="menucollect_items_title">
                <Link to="/tat-ca-san-pham">ICONDENIM x HOZO Collection 2022</Link>
              </div>
            </div>
          </div>
        </div>


        <div className={`sub-menuproduct ${currentMenu === 'mensShirtsMenu1' ? 'active' : ''}`} id='mensShirtsMenu1'>
          <div className="top_aomb">
            <div className="back_ic" onClick={showPreviousMenu}>
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="aomb_header">ÁO</div>
          </div>
          <div className="bottom_aomb">
            <div className="menuao_items">
              <div className="menuao_items_title">
                <Link to="/tat-ca-san-pham">Áo Thun</Link>
              </div>
            </div>
            <div className="menuao_items">
              <div className="menuao_items_title">
                <Link to="/tat-ca-san-pham">Áo Polo</Link>
              </div>
            </div>
            <div className="menuao_items">
              <div className="menuao_items_title">
                <Link to="/tat-ca-san-pham">Áo Sơmi</Link>
              </div>
            </div>
            <div className="menuao_items">
              <div className="menuao_items_title">
                <Link to="/tat-ca-san-pham">Áo Khoác</Link>
              </div>
            </div>
            <div className="menuao_items">
              <div className="menuao_items_title">
                <Link to="/tat-ca-san-pham">Tank Top - Áo Ba Lỗ</Link>
              </div>
            </div>
            <div className="menuao_items">
              <div className="menuao_items_title">
                <Link to="/tat-ca-san-pham">Áo Nỉ Và Len</Link>
              </div>
            </div>
            <div className="menuao_items">
              <div className="menuao_items_title">
                <Link to="/tat-ca-san-pham">Hoodie</Link>
              </div>
            </div>
            <div className="menuao_items">
              <div className="menuao_items_title">
                <Link to="/tat-ca-san-pham">Set Đồ</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`sub-menuproduct ${currentMenu === 'mensPantsMenu1' ? 'active' : ''}`} id='mensPantsMenu1'>
          <div className="top_quanmb">
            <div className="back_ic" onClick={showPreviousMenu}>
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="quanmb_header">QUẦN</div>
          </div>
          <div className="bottom_quanmb">
            <div className="menuquan_items">
              <div className="menuquan_items_title">
                <Link to="/tat-ca-san-pham">Quần Jean</Link>
              </div>
            </div>
            <div className="menuquan_items">
              <div className="menuquan_items_title">
                <Link to="/tat-ca-san-pham">Quần Short</Link>
              </div>
            </div>
            <div className="menuquan_items">
              <div className="menuquan_items_title">
                <Link to="/tat-ca-san-pham">Quần Kaki & Chino</Link>
              </div>
            </div>
            <div className="menuquan_items">
              <div className="menuquan_items_title">
                <Link to="/tat-ca-san-pham">Quần Jogger</Link>
              </div>
            </div>
            <div className="menuquan_items">
              <div className="menuquan_items_title">
                <Link to="/tat-ca-san-pham">Quần Tây</Link>
              </div>
            </div>
            <div className="menuquan_items">
              <div className="menuquan_items_title">
                <Link to="/tat-ca-san-pham">Quần Boxer</Link>
              </div>
            </div>
            <div className="menuquan_items">
              <div className="menuquan_items_title">
                <Link to="/tat-ca-san-pham">Set Đồ</Link>
              </div> 
            </div>
          </div>
        </div>

        <div className={`sub-menuproduct ${currentMenu === 'mensGvpsMenu' ? 'active' : ''}`} id='mensGvpsMenu'>
          <div className="top_gvpmb">
            <div className="back_ic" onClick={showPreviousMenu}>
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="gvpmb_header">GIÀY & PHỤ KIỆN</div>
          </div>
          <div className="bottom_gvpmb">
            <div className="menugvp_items">
              <div className="menugvp_items_title">
                <Link to="/tat-ca-san-pham">Giày & Dép</Link>
              </div>
            </div>
            <div className="menugvp_items">
              <div className="menugvp_items_title">
                <Link to="/tat-ca-san-pham">Balo, Túi & Ví</Link>
              </div>
            </div>
            <div className="menugvp_items">
              <div className="menugvp_items_title">
                <Link to="/tat-ca-san-pham">Nón</Link>
              </div>
            </div>
            <div className="menugvp_items">
              <div className="menugvp_items_title">
                <Link to="/tat-ca-san-pham">Thắt Lưng</Link>
              </div>
            </div>
            <div className="menugvp_items">
              <div className="menugvp_items_title">
                <Link to="/tat-ca-san-pham">Mắt Kính</Link>
              </div>
            </div>
            <div className="menugvp_items">
              <div className="menugvp_items_title">
                <Link to="/tat-ca-san-pham">Vớ</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`sub-menuproduct ${currentMenu === 'smartJeansMenu' ? 'active' : ''}`} id='smartJeansMenu'>
          <div className="top_sjmb">
            <div className="back_ic" onClick={showPreviousMenu}>
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="sjmb_header">SMART JEANS</div>
          </div>
          <div className="bottom_sjmb">
            <div className="menusj_items">
              <div className="menusj_items_title">
                <Link to="/tat-ca-san-pham">Câu chuyện về Smart Jeans</Link>
              </div>
            </div>
            <div className="menusj_items">
              <div className="menusj_items_title">
                <Link to="/tat-ca-san-pham">Sản phẩm Smart Jeans</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`sub-menuproduct ${currentMenu === 'icon105Menu' ? 'active' : ''}`} id='icon105Menu'>
          <div className="top_i105mb">
            <div className="back_ic" onClick={showPreviousMenu}>
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="i105mb_header">ICON105 LIGHTWEIGHT</div>
          </div>
          <div className="bottom_i105mb">
            <div className="menui105_items">
              <div className="menui105_items_title">
                <Link to="/tat-ca-san-pham">Câu chuyện về ICON105 Lightweight</Link>
              </div>
            </div>
            <div className="menui105_items">
              <div className="menui105_items_title">
                <Link to="/tat-ca-san-pham">Sản phẩm ICON105 Lightweight</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={`mobile_opacity ${visible ? "showopa" : "hideopa"}`} onClick={toggleMobileDropdown}></div>
    </div>
  );
}
