import React, { useState } from 'react';
import './Cart.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const items = [
  { id: 1, name: 'Item 1', price: 29.99, image: 'https://via.placeholder.com/50' },
  { id: 2, name: 'Item 2', price: 19.99, image: 'https://via.placeholder.com/50' },
  { id: 3, name: 'Item 3', price: 49.99, image: 'https://via.placeholder.com/50' },
];

const PROMO_CODE = 'DISCOUNT10';
const DISCOUNT_PERCENTAGE = 10;

const Cart = () => {
  const MySwal = withReactContent(Swal);

  const [promoCode, setPromoCode] = useState('');
  const [total, setTotal] = useState(calculateTotal());
  const [discountedTotal, setDiscountedTotal] = useState(total);

  function calculateTotal() {
    return items.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  }

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handlePurchase = () => {
    let finalTotal = total;

    if (promoCode === PROMO_CODE) {
      const discount = (total * DISCOUNT_PERCENTAGE) / 100;
      finalTotal = (total - discount).toFixed(2);
    }

    setDiscountedTotal(finalTotal);

    
    MySwal.fire({
      title: 'Purchase Successful!',
      text: `Total Amount: $${finalTotal}`,
      icon: 'success',
    });
  };

  return (
    <div className="cartJApp">
      <div className="cartJCard">
        <h2 className='vv'>Checkout</h2>
        <div className="cartJItemsList">
          {items.map((item) => (
            <div key={item.id} className="cartJItem">
              <img src={item.image} alt={item.name} className="cartJItemImage" />
              <span className="cartJItemName">{item.name}</span>
              <span className="cartJItemPrice">${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="cartJTotal">
          <span>Total: ${total}</span>
        </div>
        <div className="cartJPromoCode">
          <input
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={handlePromoCodeChange}
          />
        </div>
        <button className='purchase2' onClick={handlePurchase}>Purchase</button>
        {discountedTotal !== total && (
          <div className="cartJDiscountedTotal">
            <span>Discounted Total: ${discountedTotal}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
