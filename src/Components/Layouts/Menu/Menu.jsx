import React from 'react'
import '../../../index.css'
import { Link } from 'react-router-dom'
import LogoLayout from '../LogoLayout/LogoLayout'


const Menu = () => {
  return (
    <div>
      <LogoLayout />
      <nav className=''>
        <ul className='flex list-none  w-full h-10 font-bold text-xl'>
          <Link to={'/'}>
            <li className='ml-2'>Home</li>
          </Link>

          <Link to={'/text-components'}>
            <li className='ml-2'>Texts Efeccts</li>
          </Link>

          <Link to={'/hover-effects'}>
            <li className='ml-2'>Hover Effects</li>
          </Link>

        </ul>
      </nav>
    </div>
  )
}

export default Menu