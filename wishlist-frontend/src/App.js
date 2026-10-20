import { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [wishlist, setWishlist] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  
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


  const handleSubmit = (e) => {

    e.preventDefault();

    const postoutputs = { title, description } // object

    fetch("http://localhost:4000/post", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postoutputs) // converts object into json string
    }).then(() => {
      console.log("new post added")
    })
    // const response = await fetch("http://localhost:4000/post"); 

  }

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
        
        <form onSubmit={handleSubmit}>
          <div className='inputfields'>

            <input
            placeholder='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <textarea 
            placeholder='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            
            <button>submit</button>
            
          </div>
        </form>

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
