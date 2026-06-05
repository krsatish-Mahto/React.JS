

const card = (props) => {
    
  return (
    <div>
      <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1779734561555-7b1ee1729427?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button>View profile</button>
      </div>

    </div>
  )
}

export default card
