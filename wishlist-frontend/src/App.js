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


  // const [data, setData] = useState([]);
  // const fetchapidata = async () =>{
  //   const response = await fetch("http://localhost:4000/all");
  //   if (!response.ok){
  //     throw new Error("network response was not ok")
  //   }
  //   const apidata = await response.json();
  //   setData(apidata);
  // }
  // useEffect(() => {
  //   fetchapidata();
  // }, [])

  return (
    <div className='background'>
      <div className="App">
        <h1>Wishlist App</h1>
        
        <div className='inputfields'>

          <input placeholder='title'/>
          <textarea placeholder='description' />
          <button>submit</button>
          
        </div>

        <div className='data'>
          
          {wishlist.map((wishlist) => (
          // <p key={wishlist.id} >{wishlist.title}</p>
          <div >
            <p >{wishlist.title}</p>
            <p>{wishlist.description}</p>
            <br />
          </div>
        ))}        
      
      
          {/* {data.map((item) => (
            <div>
              <p key={item.id}>{item.title}</p>
              <p key={item.id}>{item.description}</p>
              <br />
            </div>
          ))} */}

        </div>


      </div>
    </div>
  );
}

export default App;
