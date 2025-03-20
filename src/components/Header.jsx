import React from 'react'

function Header() {
  return (
    <>
    <img src={logo} alt="" />
    <div className='w-full bg-black text-white flex flex-wrap justify-between'>
        <div className='text px-4 py-4'>LOGO</div>
        <div> <ul>
            <li><a href="">Home</a></li>
            </ul>
            /</div>
    </div>
    </>
  )
}

export default Header