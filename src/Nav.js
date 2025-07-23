import React,{useState} from 'react';

 export default function Nav({activeTab,onTabChange,total,totalPrice,onClickCart}) {
  return (
    <nav className='Nav'>
      <ul className='Nav-list'>
        <li className={`Nav-list-item ${activeTab===0 ? 'selected' :'' }`} >
          <a onClick={()=>onTabChange(0)}>Items</a>
        </li>
        <li className={`Nav-list-item ${activeTab===1 ? 'selected' :''}`}>
          <a onClick={() =>onTabChange(1)}>Cart</a>
        </li>
      </ul>
      <div className="cart-container">
        <i className="fa-solid fa-cart-shopping" onClick={onClickCart}></i>
        {total > 0 && <span className="cart-badge">{total}</span>}
        
     </div>
     <div className='Nav-item-info'>
        
        {total >0 && (
          <div className="CartPage-total">
          <strong>$({totalPrice.toFixed(2)})</strong>
          </div>
     
        )}
      </div>
        
        
    </nav>
  )
}

