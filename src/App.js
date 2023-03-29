import { useState } from 'react';
import ChangeContainerColor from './ChangeContainerColor';
import './index.css';

function App() {

  const [newItem, setNewItem] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    
  }

  return (
    <ChangeContainerColor
    newItem={newItem}
    setNewItem={setNewItem}
    handleSubmit={handleSubmit}
    setHexValue={setHexValue}
    isDarkText={isDarkText}
    setIsDarkText={setIsDarkText}

  />

  );
}

export default App;
