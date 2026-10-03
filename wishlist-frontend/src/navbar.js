import React from 'react'
import "./styles/navbar.css"

function navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li>
                <a href="/home">home</a>
            </li>
            <li>
                <a href="/about">about</a>
            </li>
            <li>
                <a href="/">wishlist</a>
            </li>
        </ul>
    </div>
  )
}

export default navbar