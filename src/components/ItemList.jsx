import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';

const API_URI = import.meta.env.VITE_API_URI;

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${API_URI}/doors`);
        setItems(response.data);
      } catch (err) {
        setError('Failed to fetch items. Please try again later.');
      }
    };
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URI}/doors/${id}`);
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (err) {
      setError('Failed to delete item. Please try again.');
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
