import React, { useEffect, useState } from 'react';

const CartPage = ({ removeFromCart }) => {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [thankYouMessage, setThankYouMessage] = useState('');

  // Fetch cart function, now callable independently
  const fetchCart = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/cart');
      if (!response.ok) {
        throw new Error('Failed to fetch cart data');
      }
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error('Error fetching cart data:', error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCart(); // Initial load of cart data
  }, []);

  if (!Array.isArray(cart)) {
    return <div>Error: Cart data is not valid.</div>;
  }

  // Calculate total price with safe access
  const totalPrice = cart
    .filter(item => item && item.productId && item.productId.price != null)
    .reduce((acc, item) => acc + (item.productId.price * item.quantity), 0);

  const handleBuyNow = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/cart', {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to clear cart');
      }
  
      setCart([]);  // Clears the cart on the frontend
      setThankYouMessage('Thank you for buying! Please come again.');
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', marginTop: '200px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Your Cart</h2>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {thankYouMessage && <p style={{ color: 'green', fontWeight: 'bold', textAlign: 'center' }}>{thankYouMessage}</p>}

      {cart.length === 0 ? (
        <p style={{ textAlign: 'center', fontStyle: 'italic' }}>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map(item => (
              item && item.productId ? (
                <li key={item.productId._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                  <span>
                    {item.productId.name} - ₱{item.productId.price} x {item.quantity}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.productId._id)}
                    style={{ padding: '5px 10px', backgroundColor: '#a50113', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Remove
                  </button>
                </li>
              ) : (
                <li style={{ color: 'red', fontStyle: 'italic' }}>Invalid item in cart</li>
              )
            ))}
          </ul>

          <p style={{ fontWeight: 'bold', fontSize: '18px', textAlign: 'right', marginTop: '10px' }}>Total: ₱{totalPrice.toFixed(2)}</p>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <label style={{ marginRight: '10px' }}>Payment Method:</label>
            <select 
              value={paymentMethod} 
              onChange={(e) => setPaymentMethod(e.target.value)} 
              style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Cash">Cash</option>
            </select>
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button 
              onClick={handleBuyNow}
              style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
