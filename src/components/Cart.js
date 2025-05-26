import Context from'./Context/Context'
import React, { useContext } from 'react'
import '../styles/App.css'

function Cart() {
  let [data,setData,cart,setCart]=useContext(Context)
  
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  

function handleIncrement(id){
  const product=data.find(item=>item.id===id)
  setCart(prevCart=>{
    const existing=prevCart.find(item=>item.id===id)
    if(existing){
      return prevCart.map(item=>
        item.id===id
        ?{...item,quantity:item.quantity+1}
        :item
      )
    }else{
      return[...prevCart,{...product,quantity:1}]
    }
  })
}
function handleDecrement(id){
  const product=data.find(item=>item.id===id)
  setCart(prevCart=>{
    const existing=prevCart.find(item=>item.id===id)
    if(existing){
      if(existing.quantity===1){
        return prevCart.filter(item=>item.id!==id)
      }else{
        return prevCart.map(item=>
          item.id===id
          ?{...item,quantity:item.quantity-1}
          :item
        )
      }
    }
  })
}
  return (
    <div id='main' >
      <p id='cart-total-amount' >Total Price:{totalPrice}</p>
      <button id='clear-all-cart' onClick={()=>{setCart([])}} >Clear Cart</button>
      <div id='cart-items-list' >
      {
        data.map(product=>(
          <div className="card" key={product.id}  >
            <img src={product.image} alt={product.title} />
            <div className="cardContent">
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <p id='cart-item-price-id' >${product.price}</p>
            </div>
            <div className="buttons">
              <div className="button-row">
              <button onClick={()=>{handleIncrement(product.id)}} id='increment-btn-id' >+</button>
              <button onClick={()=>{handleDecrement(product.id)}} id='decrement-btn-id' >-</button>
              </div>
              <p id='cart-amount-id' >{(cart.find(item => item.id === product.id)?.quantity || 0)}</p>
              {/* <p id='cart-amount-id' >Amount:{(cart.find(item => item.id === product.id)?.quantity*product.price || 0)}</p> */}
              <button
                id={`cart-item-remove-${product.id}`}
                onClick={() => setCart(prev => prev.filter(item => item.id !== product.id))}
              >
                Remove
              </button>
            </div>
            
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Cart