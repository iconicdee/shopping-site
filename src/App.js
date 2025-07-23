import './App.css';
import React, {useState} from 'react';
import Nav from './Nav';
import ItemPage from './ItemsPage';
import CartPage from './CartPage';
import {items} from './items'


function App () {
  const [tab,setTab]= useState(0);
  const [cart,setCart] =useState({});

  const handleTab= (index) =>(
    setTab(index)
  )
  
  function handleClickCart() {
    setTab(1);
  }
  

  const totalPrice = Object.keys(cart).reduce((sum, itemId) => {
      const item = items.find(i => i.id === parseInt(itemId));
      const count = cart[itemId];
      return sum + item.price * count;
  }, 0);

  const handleAddToCart = (item) => {
  setCart(prevCart => ({
    ...prevCart,
    [item.id]: (prevCart[item.id] || 0) + 1
  }));
};

  const handleRemoveOne = (item) => {
    setCart(prevCart => {
      const currentCount = prevCart[item.id] || 0;

      if (currentCount <= 1) {
        const { [item.id]: _, ...rest } = prevCart;
        return rest;
      } else {
        return {
          ...prevCart,
          [item.id]: currentCount - 1
        };
    }
  });
};
  
  const renderContent= () =>{ 
    switch(tab) {
      default:
      case 0:
        return <ItemPage items={items} onAddToCart={handleAddToCart} cart={cart} />;

      case 1:
        return renderCart();
    }
    
  }
  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);


  function renderCart() {
  let cartItems = Object.keys(cart).map(itemId => {
    let item = items.find(item => item.id === parseInt(itemId));
    return {
      ...item,
      count: cart[itemId]
    };

  });

  
  
  return <CartPage items={cartItems} onRemoveOne={handleRemoveOne} onAddOne={handleAddToCart} finalPrice={totalPrice}/>
}

    return (
      <div className='App'>
        <Nav activeTab={tab} onTabChange={handleTab} total={totalItems} totalPrice={totalPrice} onClickCart={handleClickCart}/>
        <main className="App-content">
            {tab === 1 && Object.keys(cart).length === 0 ? (
                <>
                  <h2>Your cart is empty</h2>
                  <h3>Why not add some expensive products to it?</h3>
                  
                </>
              ) : (
                <>
                  {renderContent()}
                  
                </>
                
              )}
        </main>
      </div>
    )
  }




export default App;
 