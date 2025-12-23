import React from 'react'
import Link from 'next/link';
import './Projectcard.css';
const Projectcard = () => {
  return (
    <div>
      <div className="cards">
        <div className="card">
            <Link href=""><img src="" alt="" /></Link>
            <div className="content">
                <p className='heading'></p>
                <p className='text'></p>
                <div className="buttons">
                    <button></button>
                </div>
                <div className="imp-btns">
                    <button><img src="" alt="" /></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projectcard
