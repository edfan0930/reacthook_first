import React,{useState} from 'react'
import Hello from "../components"
function HelloFun() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <Hello say="world"></Hello>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
}

export default HelloFun