import React from 'react';

const Item = ({ item, onDelete }) => {
  return (
    <li>
      {item.title}
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
};

export default Item;
