import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <h6 className="logo">
        <Link href="/">December</Link>
      </h6>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        {/* {dynamic value passed} */}
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {/* should only be shown when cart component in clicked  */}
      {showCart && <Cart />}

    </div>
  )
}

export default Navbar