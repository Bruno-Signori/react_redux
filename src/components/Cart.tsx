import React from 'react';
import { useSelector } from 'react-redux';
import { iState } from '../store';
import { ICartItem } from '../store/modules/cart/types';


const Cart: React.FC = () => {
  const cart = useSelector<iState, ICartItem[]>(state => state.cart.items)
  console.log(cart);

  return (
    <table>
      <thead>
        <tr>
        <th>Produto</th>
        <th>preço</th>
        <th>Quantidade</th>
        <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>


          </tr>
        ))}

      </tbody>
    </table>
  )
}

export default Cart;