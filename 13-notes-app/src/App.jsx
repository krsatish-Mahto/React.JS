import React from 'react'

const App = () => {

  // localStorage.setItem('user', 'Satish')
  // const user=localStorage.getItem('user')
  // localStorage.removeItem('user')
  // localStorage.clear()
  // console.log(user)

  const User= {
    userName: 'Satish',
    city: 'Ranchi',
    age: 21
  }
  localStorage.setItem('user', User)  // to store in local starage we need to pass value in string format
  localStorage.setItem('user', JSON.stringify(User))
  // to convert from string to object
  const user1= JSON.parse(localStorage.getItem('User'))
  console.log(User)

  return (
    <div>
      App
    </div>
  )
}

export default App
