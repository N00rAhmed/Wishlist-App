import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/all")
    .then((res) => {
      return res.json();
    })
    .then((info) => {
      console.log(info);
      setWishlist(info)
    });
  }, []);
  return (
    <div className='background'>
      <div className="App">
        <h1>Wishlist App</h1>
        
        <div className='inputfields'>

          <input placeholder='title'/>
          <textarea placeholder='description' />
          <button>submit</button>
          
        </div>

        {wishlist.map((wishlist) => (
          // <p key={wishlist.id} >{wishlist.title}</p>
          <div >
            <p >{wishlist.title}</p>
            <p>{wishlist.description}</p>
            <br />
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
