import PropTypes from "prop-types";

import "./Cart.css";

const Cart = ({ cart, handleRemoveFromcart }) => {
  return (
    <div>
      <h4>Cart: {cart.length}</h4>
      <div className="cart-container">
        {cart.map((Bottle) => (
          <div key={Bottle.id}>
            <img src={Bottle.img}></img>
            <button onClick={()=>handleRemoveFromcart(Bottle.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};


Cart.propTypes = {
    cart:PropTypes.array.isRequired,
    handleRemoveFromcart:PropTypes.func.isRequired
}
export default Cart;
