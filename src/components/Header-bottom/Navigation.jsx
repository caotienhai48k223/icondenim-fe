import React from 'react'
import DropDown from '../Navbar/DropDown'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AoNamDD from '../Navbar/AoNamDD';
import QuanNamDD from '../Navbar/QuanNamDD';
import CollectDD from '../Navbar/CollectDD';
import TechDD from '../Navbar/TechDD';

export default function Navigation() {
    const [dropdownopen, setDropdownopen] = useState(false)
    const [hovered, setHovered] = useState(false);
    const handleDropdownopen = () => {
        setDropdownopen(true)
    }
    const handleDropdownclose = () => {
        setDropdownopen(false)
    }
    const handleDropdownHover = () => {
        setHovered(true);
    }

    const handleDropdownLeave = () => {
        setHovered(false);
    }

    const [aonamddopen, setAonamddopen] = useState(false)
    const [hoveredaonam, setHoveredaonam] = useState(false);
    const handleAonamddopen = () => {
        setAonamddopen(true)
    }
    const handleAonamddclose = () => {
        setAonamddopen(false)
    }
    const handleAonamddHover = () => {
        setHoveredaonam(true);
    }

    const handleAonamddLeave = () => {
        setHoveredaonam(false);
    }

    const [quannamddopen, setQuannamddopen] = useState(false)
    const [hoveredquannam, setHoveredquannam] = useState(false);
    const handleQuannamddopen = () => {
        setQuannamddopen(true)
    }
    const handleQuannamddclose = () => {
        setQuannamddopen(false)
    }
    const handleQuannamddHover = () => {
        setHoveredquannam(true);
    }

    const handleQuannamddLeave = () => {
        setHoveredquannam(false);
    }

    const [collectddopen, setCollectddopen] = useState(false)
    const [hoveredcollect, setHoveredcollect] = useState(false)
    const handleCollectddopen = () => {
        setCollectddopen(true)
    }
    const handleCollectddclose = () => {
        setCollectddopen(false)
    }
    const handleCollectddHover = () => {
        setHoveredcollect(true);
    }
    const handleCollectddLeave = () => {
        setHoveredcollect(false);
    }

    const [techddopen, setTechddopen] = useState(false)
    const [hoveredtech, setHoveredtech] = useState(false)
    const handleTechddopen = () => {
        setTechddopen(true)
    }
    const handleTechddclose = () => {
        setTechddopen(false)
    }
    const handleTechddHover = () => {
        setHoveredtech(true);
    }
    const handleTechddLeave = () => {
        setHoveredtech(false);
    }

    return (
        <div className='navigation_div'>
            <div className='navigation_container'>
                <div className='navigation_content'>
                    <div className={`nav_product_container ${hovered ? 'hovered' : ''}`} onMouseEnter={handleDropdownopen} onMouseLeave={handleDropdownclose}>
                        <Link to="/tat-ca-san-pham">
                            <div className='nav_product_content'>
                                <div className='nav_product'>
                                    Sản Phẩm
                                </div>
                                <div className='nav_arrow'>
                                    <i className='fa-solid fa-angle-down' id="arrow"></i>
                                </div>
                            </div>
                        </Link>
                        <DropDown isopen={dropdownopen} onHoverEnter={handleDropdownHover} onHoverLeave={handleDropdownLeave} />
                    </div>
                    <div className='nav_newproduct_container'>
                        <Link to="/san-pham-moi">
                            <div className='nav_newproduct_content'>
                                <div className='nav_newproduct'>Hàng Mới</div>
                                <div className='nav_new'>New</div>
                            </div>
                        </Link>
                    </div>
                    <div className={`nav_aonam_container ${hoveredaonam ? 'hoveredaonam' : ''}`} onMouseEnter={handleAonamddopen} onMouseLeave={handleAonamddclose}>
                        <Link to='/nhom-ao'>
                            <div className='nav_aonam_content'>
                                <div className='nav_aonam'>
                                    Áo Nam
                                </div>
                                <div className='nav_arrow'>
                                    <i className='fa-solid fa-angle-down' id="arrow"></i>
                                </div>
                            </div>
                        </Link>
                        <AoNamDD isopenaonam={aonamddopen} onHoverEnter={handleAonamddHover} onHoverLeave={handleAonamddLeave} />
                    </div>
                    <div className={`nav_quannam_container ${hoveredquannam ? 'hoveredquannam' : ''}`} onMouseEnter={handleQuannamddopen} onMouseLeave={handleQuannamddclose}>
                        <Link to="/nhom-quan">
                            <div className='nav_quannam_content'>
                                <div className='nav_quannam'>
                                    Quần Nam
                                </div>
                                <div className='nav_arrow'>
                                    <i className='fa-solid fa-angle-down' id="arrow"></i>
                                </div>
                            </div>
                        </Link>
                        <QuanNamDD isopenquannam={quannamddopen} onHoverEnter={handleQuannamddHover} onHoverLeave={handleQuannamddLeave} />
                    </div>
                    <div className={`nav_tech_container ${hoveredtech ? 'hoveredtech' : ''}`} onMouseEnter={handleTechddopen} onMouseLeave={handleTechddclose}>
                        <Link to="/techurban-jeans">
                            <div className='nav_tech_content'>
                                <div className='nav_tech'>
                                    TECH URBAN JEANS
                                </div>
                                <div className='nav_arrow'>
                                    <i class="fa-solid fa-angle-down" id='arrow1'></i>
                                </div>
                            </div>
                        </Link>
                        <TechDD isopentech={techddopen} onHoverEnter={handleTechddHover} onHoverLeave={handleTechddLeave} />
                    </div>
                    <div className='nav_outlet_container'>
                        <Link to="/outlet">
                            <div className='nav_outlet_content'>
                                <div className='nav_outlet'>OUTLET</div>
                            </div>
                        </Link>
                    </div>
                    <div className={`nav_collect_container ${hoveredcollect ? 'hoveredcollect' : ''}`} onMouseEnter={handleCollectddopen} onMouseLeave={handleCollectddclose}>
                        <Link to="/collect">
                            <div className='nav_collect_content'>
                                <div className='nav_collect'>
                                    Collection
                                </div>
                                <div className='nav_arrow'>
                                    <i className='fa-solid fa-angle-down' id="arrow"></i>
                                </div>
                            </div>
                        </Link>
                        <CollectDD isopencollect={collectddopen} onHoverEnter={handleCollectddHover} onHoverLeave={handleCollectddLeave} />
                    </div>
                </div>
            </div>
        </div>
    );
}
