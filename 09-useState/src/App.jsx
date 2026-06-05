import { useState } from 'react'

const App = () => {
  
  const [num, setnum] = useState(100)

  function increase(){
    setnum(num+1)
  }

  function decrease(){
    setnum(num-1)
  }


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>Increase</button>
      
       
    </div>
  )
}

export default App
