import React from 'react';
import { ClothingItem } from '../data';
import './ClothingItem.css'
interface Props {
  item: ClothingItem;
}

const ClothingItemComponent: React.FC<Props> = ({ item }) => {
  return (
    <div className='clothing-item-card'>
      <img src={item.imageUrl} alt={item.name} />
      <div className='clothing-item-content'>
        <h2 className='clothing-item-title'>{item.name}</h2>
        <p className='clothing-item-description'>{item.description}</p>        
      </div>
      <div className='clothing-item-footer'>
        ${item.price.toFixed(2)}
      </div>
      <button className="add-to-cart-btn">
          Add to Cart
        </button>
    </div>
  );
};

export default ClothingItemComponent;