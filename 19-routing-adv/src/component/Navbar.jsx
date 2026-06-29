import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-8 bg-cyan-900'>
      <h2 className='text-xl font-bold '>JoinYou</h2>
      <div className='flex gap-8'>
      <a href='/'>Home</a>
      <a href='/about'>About</a>
      <a href='/contact'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar
