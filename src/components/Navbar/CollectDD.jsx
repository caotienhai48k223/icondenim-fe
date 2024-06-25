import React from 'react'
import { Link } from 'react-router-dom'
import './ProductDD.css'
import { useState } from 'react'

export default function CollectDD({isopencollect}) {
    const[collectdd, setCollectdd] = useState(false)
    console.log(isopencollect)
    if (isopencollect==false) {return null}

  return (
    <div className='collect_div'>
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
