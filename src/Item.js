import React from 'react';

export default function Item({item,onAddToCart,children}) {
  return (
    <div className="item">
          <div className="item-first-side">
                <img className="box"
                src={item.url} 
                alt={item.name}
                width="60px" height="70px"/>
          </div>
          <div className="item-second-side">
                <b>{item.name}</b>
              <p>{item.description}</p>
          </div>
              
          
          <div className="item-third-side">
              <p>${item.price}</p>
              <button onClick={onAddToCart}  className='button'>Add to Cart</button>
              {children}
          </div>
    </div>)
}

