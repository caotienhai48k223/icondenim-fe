import React from 'react'
import { Link } from 'react-router-dom'
import './ProductDD.css'


export default function CollectDD({isopencollect, onHoverEnter, onHoverLeave}) {
  return (
    <div className={`collect_div ${isopencollect ? 'showcollect':'hidecollect'}`} onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>
      <div className='listcollect'>
        <Link to='/bst-ligth-summer-2024'><span>LIGHT SUMMER COLLECTION</span></Link>
        <Link to='/bst-winter-2023'><span>The Rhythm of Life - FW23</span></Link>
        <Link to='/bst-endless-summer'><span>ENDLESS SUMMER - Collection SS23</span></Link>
        <Link to='/de-do-ba-lo'><span>ĐỂ ĐÓ BA LO - Mini Camp 23</span></Link>
        <Link to='/fairplayfw19'><span>Fair Play FW19</span></Link>
        <Link to='/theartofhatboi'><span>[Colab Project 21] The Art Of Hát Bội</span></Link>
        <Link to='/icondenim-x-hozo-international-music-festival-collection'><span>ICONDENIM x HOZO Collection 2022</span></Link>
      </div>
    </div>
  )
}
