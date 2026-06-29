import { useState } from "react"


const App = () => {
  const [title, setTitle] = useState('Aman')
  const submitHandler= (e) =>{
    
    
    e.preventDefault()  
    console.log("Form submitted by", title)
    setTitle('') //  To blank the form 
  }
  return (
    // <div>
    //   <form onSubmit={(e) =>{submitHandler(e)}}>

    //     <input type="text" placeholder='Enter your  name'
    //     onChange={(e) => console.log("Filling the form.." , e.target.value)} />
    //     <button>Submit</button>
    //   </form>
      
    // </div>


    <div>
      <form onSubmit={(e) =>{submitHandler(e)}}>
        
        <input type="text" 
          placeholder='Enter your  name' 
          value={title}
          onChange={(e)=>
            setTitle(e.target.value)
            }
              />
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App
