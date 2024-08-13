import React from 'react';
import { clothingItems } from '../data';
import ClothingItemComponent from './ClothingItem';
import './ClothingItem.css'

const Shop: React.FC = () => {
  return (
    <div className='shop-container'>
      {clothingItems.map(item => (
        <ClothingItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Shop;
