import React,{ useState, useEffect} from 'react';

function HelloWorld(props) {
  const [pingPong,setPingPong]= useState('ping');
  console.log("props",props)
 
  useEffect(() => {
    console.log("in effect",pingPong);
    return ()=> console.log("in effect return")
  })

  return (
  <div>
    <h1>Hello, {pingPong}</h1> 
    <button onClick= {() => setPingPong(()=>pingPong==="ping"?"pong":"ping")}>
      Click me
    </button>
  </div>
  );
}

export default HelloWorld;