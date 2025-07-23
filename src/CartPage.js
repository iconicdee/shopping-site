import React from 'react';
import Item from './Item';
import {items} from './items'



export default function CartPage({items,onAddOne,onRemoveOne,finalPrice}) {
  let cartPrice = finalPrice.toFixed(2);

    return (
      <>
        <ul className="CartPage-items">
          {items.map(item =>
            <li key={item.id} className="CartPage-item">
              <Item item={item}>
                <div className='CartItem-controls'>
                  <button className="CartItem-removeOne"
                  onClick={()=>onRemoveOne(item)}>
                    &ndash;
                  </button>
                  <span className='CartItem-count'>{item.count}</span>
                  <button className="CartItem-addOne"
                    onClick={() =>onAddOne(item)}
                  >+</button>
                </div>
              </Item>
            </li>
          )}
              
        </ul>
      </>
      
      
    )
  }
