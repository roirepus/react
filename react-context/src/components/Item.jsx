import React, {useContext} from 'react'
import { CartContext } from '../utils/contexts/Cart'

const Item = (props) => {
  const cart=useContext(CartContext)
  console.log(cart);
  return (
    <div className='item-card'>
      <h4>{props.name}</h4>
      <p>price: ${props.price}</p>
      <button className='border-solid border-2 border-lime-200' onClick={()=>
      {cart.setItems(...cart.items,{name:props.name, price: props.price})}
      }>add to cart</button>
    </div>
  )
}

export default Item
