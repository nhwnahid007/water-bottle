import PropTypes from "prop-types";

import "./Bottle.css";

const Bottle = ({ bottle, hanleAddToCart }) => {
  // console.log(bottle);
  // console.log(hanleAddToCart);
  const { name, img, price } = bottle;
  return (
    <div className="bottle">
      <h3>Botttle: {name} </h3>
      <img src={img} alt="" />
      <p>price: {price}</p>
      <button onClick={() => hanleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

Bottle.propTypes ={
  bottle: PropTypes.object.isRequired,
  hanleAddToCart: PropTypes.func.isRequired
}

export default Bottle;
