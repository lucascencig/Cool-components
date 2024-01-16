import React from 'react'
import { Link } from 'react-router-dom'
import LogoLayout from './Layouts/LogoLayout/LogoLayout'
import Menu from './Layouts/Menu/Menu'
import '../index.css'

const LandingPage = () => {
  return (

    <div className="w-full h-screen absolute top-0 left-0 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className=' flex justify-center items-center m-auto flex-col w-full'>


        <div>
          <Menu />
          <p>Use this awesome components for your projects</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

