import React, { useState } from 'react'

const App = () => {

  //async function getData(){
    
  // const response=  await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // console.log(response) }
const [data, setData] = useState([])
const  getData= async () =>{

  
  const response=  await fetch('https://jsonplaceholder.typicode.com/todos')
  const result= await response.json()
  setData(result)
  console.log(data)
}
  return (
    <div>
      <button onClick={getData}>Get Data</button>

      {data.map((item) => (
        <p key={item.id} >(item.title)</p>
      )
      )}

    </div>
  )
}

export default App
