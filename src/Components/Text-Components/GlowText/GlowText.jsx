import React, { useState } from 'react'
import s from '../GlowText/Styles.module.css'
import '../../../index.css'

const GlowText = () => {


  const [openModalHTML, setOpenModalHTML] = useState(false)
  const [openModalCSS, setOpenModalCSS] = useState(false)

  const handleOpenModalHTML = () => {
    setOpenModalHTML(true)
  }

  const handleCloseModalHTML = () => {
    setOpenModalHTML(false)
  }

  const handleOpenModalCSS = () => {
    setOpenModalCSS(true)
  }

  const handleCloseModalCSS = () => {
    setOpenModalCSS(false)
  }

  const cssContent = `
  .glow {
    width: 100%;
    font-size: 50px;
    text-shadow: 0px 5px 5px rgba(224, 9, 9, 0.5);
    color: rgb(248, 248, 248);
    letter-spacing: 10px;
    text-align: center;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0008);
    line-height: 0.70em;
    outline: none;
    animation: animate 5s linear infinite;
  }
  
  @keyframes animate {
  
    0%,
    18%,
    20%,
    50.1%,
    60%,
    65.1%,
    80%,
    90.1%,
    92% {
      color: red;
      box-shadow: none;
    }
  
    18.1%,
    20.1%,
    30%,
    50%,
    60.1%,
    65%,
    80.1%,
    90%,
    92.1%,
    100% {
      color: #fff;
      box-shadow: 0 0 10px #f40303,
        0 0 20px #f40303,
        0 0 40px #f40303,
        0 0 80px #f40303
    }
  }
`;

  return (
    <div>
      <div className=''>
        <p className={s.glow}>Glow Text</p>
      </div>

      <div className='flex mt-2 w-60 justify-around m-auto'>
        <button onClick={handleOpenModalHTML}>HTML</button>
        <button onClick={handleOpenModalCSS}>CSS</button>
      </div>


      {
        openModalHTML === true ?
          <div className='flex flex-col mt-2 '>
            {/* absolute top-0 left-0 translate-y-1/2 translate-x-1/2 */}
            <button onClick={handleCloseModalHTML} className='mb-2'>X</button>
            <textarea readOnly id="" className='resize-none object-contain h-48'>
              &lt;p class="glow"&gt;Glow Text &lt;/p&gt;
            </textarea>

          </div>
          :
          null
      }

      {
        openModalCSS === true ?
          <div className='flex flex-col mt-2'>
            <button onClick={handleCloseModalCSS} className='mb-2'>X</button>
            <textarea readOnly className='resize-none object-contain h-48' >
              {cssContent}

            </textarea>


          </div>
          :
          null
      }

    </div>
  )
}

export default GlowText