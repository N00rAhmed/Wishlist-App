import { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  return (
    <div className='background'>
      <div className="App">
        <h1>Wishlist App</h1>
        
        <div className='inputfields'>

          <input placeholder='title'/>
          <textarea placeholder='description' />
          <button>submit</button>
          
        </div>
      
      </div>
    </div>
  );
}

export default App;
