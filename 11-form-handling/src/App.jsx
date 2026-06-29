

const App = () => {

  const submitHandler= (e) =>{
    e.preventDefault()  // it prevent default behavior that is reload the page
    console.log("Form submitted.")
    // wihtout submithandler page get reload the moment we click submit
    

  }
  return (
    <div>
      <form onSubmit={(e) =>{
        submitHandler(e)}
        }>
        <input type="text" placeholder='Enter your  name' />
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App
