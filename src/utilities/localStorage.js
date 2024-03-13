const getStoredCart = ()=>{
    const storedCardString = localStorage.getItem('cart')
    if(storedCardString){
        return JSON.parse(storedCardString)
        //thakle string hisebe silo json a parse korte hbe
    }
    return [];
}

const addToLocalStorage = id =>{
  const cart = getStoredCart();
  cart.push(id);
  //save to local storage
  saveCartTools(cart)
}

const saveCartTools= cart =>{
    const cartStrigyFied=JSON.stringify(cart);
    localStorage.setItem('cart',cartStrigyFied)
}

const removeFromLocalStorage =id =>{
    const cart = getStoredCart();
    //removingg every id
    const remaining = cart.filter(idx => idx !== id)
    saveCartTools(remaining)
}

export {addToLocalStorage,getStoredCart,removeFromLocalStorage}