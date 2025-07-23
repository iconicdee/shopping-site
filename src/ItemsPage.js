import React from 'react';
import {items} from './items';
import Item from './Item';


export default function ItemPage({onAddToCart,cart}) {
  return (
    <ul className='itempage'>
      {items.map(item=>
        <li key={item.id}>
          <Item 
            item={item}  
            onAddToCart={() => onAddToCart(item)} 
            children={
                  <>
                    <p>Count:({cart[item.id] || 0}) </p>
                  </>
              
              } 
/>
        </li>
        
    )}
    </ul>
    
  )
}