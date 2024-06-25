import React from 'react'
import ArrowIcon from '../Icons/Arrow'
import DropDown from '../Navbar/DropDown'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AoNamDD from '../Navbar/AoNamDD';
import QuanNamDD from '../Navbar/QuanNamDD';
import CollectDD from '../Navbar/CollectDD';
import TechDD from '../Navbar/TechDD';

export default function Navigation() {
    const [dropdownopen, setDropdownopen] = useState(false)
    const [ishover, setIshover] = useState(false)
    const [ishoveraonam, setIshoveraonam] =useState(false)
    const [ishoverquannam, setIshoverquannam] = useState (false)
    const [ishovercollect, setIshovercollect]=useState(false)

    const handleDropdownopen = () => {
        setDropdownopen(true)
        setIshover(true)
    }
    const handleDropdownclose = () => {
        setDropdownopen(false)
        setIshover(false)
    }

    const [aonamddopen, setAonamddopen] = useState(false)
    const handleAonamddopen = () => {
        setAonamddopen(true)
        setIshoveraonam(true)
    }
    const handleAonamddclose = () => {
        setAonamddopen(false)
        setIshoveraonam(false)
    }

    const [quannamddopen, setQuannamddopen] = useState(false)
    const handleQuannamddopen = () => {
        setQuannamddopen(true)
        setIshoverquannam(true)
    }
    const handleQuannamddclose = () => {
        setQuannamddopen(false)
        setIshoverquannam(false)
    }

    const [collectddopen, setCollectddopen] =useState(false)
    const handleCollectddopen = () => {
        setCollectddopen(true)
        setIshovercollect(true)
    }
    const handleCollectddclose = () => {
        setCollectddopen(false)
        setIshovercollect(false)
    }

    const [techddopen, setTechddopen] = useState(false)
    const handleTechddopen =() => {
        setTechddopen(true)
    }
    const handleTechddclose =() => {
        setTechddopen(false)
    }

    return (
        <div className="navigation">
            <div className='product_container' onMouseEnter={handleDropdownopen} onMouseLeave={handleDropdownclose}>
                <Link to="/tat-ca-san-pham">
                    <div className={`product ${ishover ? 'font-red' : ''}`}>
                        Sản Phẩm
                    </div>
                    <div className={`nav_product ${ishover ? 'red' : ''}`}>
                        <ArrowIcon className='arrow'/>
                    </div>
                </Link>
                <DropDown isopen={dropdownopen} />
            </div>
            <div className='newproduct_container'>
                <Link to="/san-pham-moi">
                    <div className='newproduct'>
                        Hàng Mới
                    </div>
                </Link>
            </div>
            <div className='aonam_container' onMouseEnter={handleAonamddopen} onMouseLeave={handleAonamddclose}>
                <Link to='/nhom-ao'>
                    <div className={`aonam ${ishoveraonam ? 'font-red' : ''}`}>
                        Áo Nam
                    </div>
                    <div className={`nav_product ${ishoveraonam ? 'red' : ''}`}>
                        <ArrowIcon className='arrow'/>
                    </div>
                </Link>
                <AoNamDD isopenaonam={aonamddopen}/>
            </div>
            <div className='quannam_container' onMouseEnter={handleQuannamddopen} onMouseLeave={handleQuannamddclose}>
                <Link to="/nhom-quan">
                    <div className={`quannam ${ishoverquannam ? 'font-red':''}`}>
                        Quần Nam
                    </div>
                    <div className={`nav_product ${ishoverquannam ? 'red':''}`}>
                        <ArrowIcon className='arrow' />
                    </div>
                </Link>
                <QuanNamDD isopenquannam={quannamddopen} />
            </div>
            <div className='tech_container' onMouseEnter={handleTechddopen} onMouseLeave={handleTechddclose}>
                <Link to="/techurban-jeans">
                    <div className='tech'>
                        TECH URBAN JEANS
                    </div>
                    <div className='nav_product'>
                        <ArrowIcon />
                    </div>
                </Link>
                <TechDD isopentech={techddopen}/>
            </div>
            <div className='outlet_container'>
                <Link to="/outlet">
                    <div className='outlet'>
                        OUTLET
                    </div>
                </Link>
            </div>
            <div className='collect_container' onMouseEnter={handleCollectddopen} onMouseLeave={handleCollectddclose}>
                <Link to="/collect">
                    <div className={`collect ${ishovercollect ? 'font-red':''}`}>
                        Collection
                    </div>
                    <div className={`nav_product ${ishovercollect ? 'red' : ''}`}>
                        <ArrowIcon className='arrow'/>
                    </div>
                </Link>
                <CollectDD isopencollect={collectddopen}/>
            </div>
        </div>
    );
}
