import React from 'react';
import { clothingItems } from '../data';
import ClothingItemComponent from './ClothingItem';

const Shop: React.FC = () => {
  return (
    <div>
      {clothingItems.map(item => (
        <ClothingItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Shop;
