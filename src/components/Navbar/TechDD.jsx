import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductDD.css';
import SJDD from './SJDD';
import I105DD from './I105';

export default function TechDD({ isopentech, onHoverEnter, onHoverLeave}) {
  const [sjddopen, setSjddopen] = useState(false);
  const [i105ddopen, setI105ddopen] =useState(false)

  const handleSjddopen = () => setSjddopen(true)
  const handleSjddclose = () => setSjddopen(false)

  const handleI105ddopen = () => setI105ddopen(true)
  const handleI105ddclose =() => setI105ddopen(false)
  

  return (
    <div className={`tech_div ${isopentech ? 'showtech':'hidetech'}`} onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>
      <div className="sj_container" onMouseEnter={handleSjddopen} onMouseLeave={handleSjddclose}>
        <Link to="/smart-jeans">
          <div className="smartjean">
            SMART JEANS
          </div>
          <div className="right">
            <i class="fa-solid fa-angle-right right_icon"></i>
          </div>
        </Link>
        <SJDD isopensj={sjddopen}/>
      </div>
      <div className="i105_container" onMouseEnter={handleI105ddopen} onMouseLeave={handleI105ddclose}>
        <Link to="/techurban-jeans-icon105-lightweight">
          <div className="icon105">
            ICON150 Lightweight
          </div>
          <div className="right">
            <i class="fa-solid fa-angle-right right_icon"></i>
          </div>
        </Link>
        <I105DD isopeni105={i105ddopen}/>
      </div>
    </div>
  );
}