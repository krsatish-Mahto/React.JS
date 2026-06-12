import React, { useState } from 'react'

const App = () => {
  //const [num, setNum] = useState(20)

  //const [first, setfirst] = useState({name: 'Satish' , age: 21})
  //const [num, setnum] = useState([10,20,30])

  
    //const btnClicked= () =>{
    //setNum(10)
    //console.log(num)  // It will print num=20 in console (prev) because it is asynchronous although in ui it is updated 
    
    // De-sturcturing

      // const newNum=[...num]  // copy of num
      // newNum.push(50)
      // console.log(newNum)
      // setnum(newNum)

    // batch update
    const [num, setnum] = useState(10)
    const btnClicked= () =>{
      // setnum(num+1)
      // setnum(num+1)
      // setnum(num+1)
      // Problem in above is num only increased by 1 not by 3

      // Solution (batch update)
      setnum(prev =>(prev+1))
      setnum(prev =>(prev+1))
      setnum(prev =>(prev+1))



    }

  
  return (
    <div>
      <h1>Value of num is :{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
