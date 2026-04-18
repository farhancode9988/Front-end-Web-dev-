import { useState } from 'react'
import Card from './Card'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>Value is {count}</h1>
        <button onClick={()=>{if(count<20){setCount(count+1)}else{alert("Limit is 20")}}}> Increase Value </button><br/>
    
        <button onClick={()=>{if(count>0){setCount(count-1)}else{alert("Limit is 0")}}}> Decrease Value </button>
      
      </div>
      <Card title="My Card" description="This is a simple card component." buttonText="Click Me" />
    </>
  )
}

export default App
