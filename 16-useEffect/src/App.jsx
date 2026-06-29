
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(10)
  
  useEffect(function(){
    console.log("use effect is running");

  } , [num])

  
  return (
    <div>
      <h1>Num: {num}</h1>
      <h1>Num2: {num2}</h1>
      
        <button onClick={() => setNum(num +1)}>Click</button>  
        <button onClick={() => setNum2(num2 +1)}>Click</button>  
                                                          
        {/* Mounting: whenever value is changing useEffect also executing  */}
      
    </div>
  )
}

export default App
