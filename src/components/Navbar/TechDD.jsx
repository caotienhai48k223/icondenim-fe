import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductDD.css';
import RightIcon from '../Icons/Right';
import SJDD from './SJDD';
import I105DD from './I105';

export default function TechDD({ isopentech }) {
  const [techdd, setTechdd] = useState(false);
  const [sjddopen, setSjddopen] = useState(false);
  const [i105ddopen, setI105ddopen] =useState(false)

  if (!isopentech) {return null}

  const handleSjddopen = () => {
      setSjddopen(true)
  }
  const handleSjddclose = () => {
      setSjddopen(false)
  }

  const handleI105ddopen = () => {
    setI105ddopen(true)
  }
  const handleI105ddclose =() => {
    setI105ddopen(false)
  }

  return (
    <div className="tech_div">
      <div className="sj_container" onMouseEnter={handleSjddopen} onMouseLeave={handleSjddclose}>
        <Link to="/smart-jeans">
          <div className="smartjean">
            SMART JEANS
          </div>
          <div className="right">
            <RightIcon className='right_ic'/>
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
            <RightIcon className='right_ic'/>
          </div>
        </Link>
        <I105DD isopeni105={i105ddopen}/>
      </div>
    </div>
  );
}