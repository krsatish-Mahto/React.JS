import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const getData= async() => {

    // axios.patch() for update 
    // axios.post() for sending data to backend 
    // axios.get() get data from backend 
    // axios.delete()  to delete 

    const response=  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    
    setUserData(response.data)
    // console.log(userData)
  }
  useEffect( function(){
      getData()
    },[index])

  let printUserData= " No user available"

  if(userData.length>0){
    printUserData= userData.map(function (elem, idx) {
      return <div key= {idx}>
              <a href={elem.url} target='_black'>
                <div className='h-40 w-44 overflow-hidden bg-white'>
                <img className=" rounded-xl h-full w-full object-cover" src={elem.download_url} alt="" />
                </div>
                <h1 className='font-bold text-lg'>{elem.author}</h1>
              </a>
      </div>
    })
  }
  return (
    <div className='bg-black overflow-auto text-white h-screen p-5'>
      {/* <button onClick={getData} className='bg-green-600  active:scale-95 px-5 py-3'>
        Get Data
      </button> */}

      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>

        <div  className='flex justify-center items-center p-4 gap-6'>
          <button onClick={()=>{
            if(index>1){
              setIndex(index-1)
            }
          } }
          className='bg-amber-400 text-black rounded px-4 font-bold active:scale-90'>Prev</button>
          <button 
          onClick={()=>{
            if(index>1){
              setIndex(index+1)
            }
          }}
          className='bg-amber-400 text-black rounded px-4 font-bold active:scale-90'>Next</button>
        </div>

    
    </div>
  )
}

export default App
