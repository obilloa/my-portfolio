import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center mt-4 max-w-[1240px] mx-auto px-4 text-black'>
        <h1 className='w-full text-3xl font-bold'>tone.</h1>
        <ul class="flex">
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Works</li>
            <li className='p-4'>Contact</li>
        </ul>
    </div>
  )
}
