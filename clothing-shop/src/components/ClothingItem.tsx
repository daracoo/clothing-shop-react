import React from 'react';
import { ClothingItem } from '../data';

interface Props {
  item: ClothingItem;
}

const ClothingItemComponent: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <img src={item.imageUrl} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>${item.price.toFixed(2)}</p>
    </div>
  );
};

export default ClothingItemComponent;
