import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './bottles.css'
import { addToLocalStorage, getStoredCart, removeFromLocalStorage } from "../../utilities/localStorage";
import Cart from "../cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart,setCart] =useState([])

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  //load cart from local storage 

  useEffect(()=>{
    
    console.log('check',bottles.length);
    if(bottles.length>0){
      const storedCart = getStoredCart();
      // console.log(storedCart,bottles);
      const savedCart= [];
      for(const id of storedCart){
        const bottle = bottles.find(bottle => bottle.id===id);
        if(bottle){
          savedCart.push(bottle)
        }
      }
      console.log('cart save',savedCart);
      setCart(savedCart)
    }
  },[bottles])


  // react a shuhu upor theke niche jawa jai tai ekhane handler add kori

  const hanleAddToCart =(bottle)=>{
    const newCart=[...cart,bottle]
    setCart(newCart);
    addToLocalStorage(bottle.id)
  }
//notun kore ekta copy banate hobe spread operator diye ar pore jeta add korte chai seta 

const handleRemoveFromcart = id =>{
  //vvisual cartremove//remove from local storage
  removeFromLocalStorage(id)
  const remainingCart = cart.filter(bottle => bottle.id !== id)
  setCart(remainingCart)
}

  return (
    <div>
      <h2>Bottless available Here: {bottles.length}</h2>
      <Cart cart={cart} handleRemoveFromcart ={handleRemoveFromcart}></Cart>
      {/* <h4>Cart: {cart.length}</h4> */}
      {/* <Bottle bottle={bottle}></Bottle> */}
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
          key={bottle.id} 
          bottle={bottle}
          hanleAddToCart={hanleAddToCart}

          ></Bottle>
        ))}
      </div>
      {/* Bootles k map kore loop korbe then ekta kore bottle pabo ..paile protttekta bottle er jonno j Bottle component ache seta banabo ..bottle er moddhe data patate chai bottle name a*/}
    </div>
  );
};

export default Bottles;
