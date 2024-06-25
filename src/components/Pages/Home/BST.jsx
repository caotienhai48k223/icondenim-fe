import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function BST() {
  return (
    <div className='bst_div'>
      <div className='bst_container'>
        <div className='bst_content'>
          <div className='bst1'>
            <Link to='/techurban-jeans-icon105-lightweight'>
              <div className='bst1_img'>
                <img src='https://file.hstatic.net/1000360022/file/techopen_jeans_7e32840e2aba41ecb0cd8772d8eff9ee_grande.jpg' alt='techurban'/>
              </div>
            </Link>
          </div>
          <div className='bst2'>
            <Link to='/quan-jean'>
              <div className='bst2_img'>
                <img src='https://file.hstatic.net/1000360022/file/sp_denim_779deb4755ad4251bc8ecbbca8004673_grande.jpg' alt='denim'/>
              </div>
            </Link>
          </div>
          <div className='bst3'>
            <Link to='/do-mac-hang-ngay'>
              <div className='bst3_img'>
                <img src='https://file.hstatic.net/1000360022/file/dohangngay_69ac0ead5c7c4b4483520cec6804996a_grande.jpg' alt='hangngay'/>
              </div>
            </Link>
          </div>
          <div className='bst4'>
            <Link to='/do-di-lam'>
              <div className='bst4_img'>
                <img src='https://file.hstatic.net/1000360022/file/dodilam_5e4f45bc5c8645deb71eea2b8dec4f99_grande.jpg' alt='dilam'/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
