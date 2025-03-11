import React from 'react';
import ItemList from './components/ItemList';

const API_URI = 'https://jsonplaceholder.typicode.com/doors'; // Example API for practice

function App() {
    return (
        <div>
            <h1>Item List with Delete Feature 🗑️</h1>
            <ItemList apiUri={API_URI} />
        </div>
    );
}

export default App;
