import React, { useContext } from 'react'
import Context from './Context/Context'

function Header() {
  let [data,setData,cart,setCart]=useContext(Context)
  return (
    <div>
      <nav>
        <h1>Shopping App</h1>
        <p id='nav-cart-item-count' >{cart.length}</p>
      </nav>
    </div>
  )
}

export default Header