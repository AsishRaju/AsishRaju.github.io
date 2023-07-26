import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
      <div className='fixed h-32 pb-4 w-full top-0 shadow bg-just-black flex items-end font-bold'>
          <section className='w-full flex justify-around md:justify-evenly text-base md:text-lg'>

          <Link 
          to='/' 
          key='home'  
          className='underline decoration-sky-500 decoration-2 hover:decoration-sky-600 hover:decoration-4'>
            home
          </Link>

          <Link 
          to='Projects' 
          key='projects' 
          className='underline decoration-sky-500 decoration-2 hover:decoration-sky-600 hover:decoration-4'>
            works
          </Link>

          <Link 
          to='About' 
          key='about' 
          className='underline decoration-sky-500 decoration-2 hover:decoration-sky-600 hover:decoration-4'>
            about
          </Link>

          </section>
      </div>
  )
}

export default Nav