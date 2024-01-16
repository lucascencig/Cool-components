import React, { useState } from 'react'
import s from '../Typewriter/Styles.module.css'


const Typewritter = () => {


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
  .container {
    display: inline-block;
  }
  
  .typewriter {
    font-size: 20px;
    letter-spacing: 5px;
    text-align: center;
    font-family: monospace;
    border-right: 5px solid;
    width: 100%;
    height: auto;
    white-space: nowrap;
    overflow: hidden;
    /*Make sure that the number on "steps" are the quantity number of your text. Or just remove it for other animation.*/
    animation: typewriter 4s steps(15) alternate, cursor .4s step-end infinite alternate;
  }
  
  @keyframes cursor {
    50% {
      border-color: transparent;
    }
  }
  
  @keyframes typewriter {
    from {
      width: 0;
    }
  
    to {
      width: 100%;
    }
  }
`;
  return (
    <div>
      <div className={s.container}>
        <p className={s.typewriter}>Typewriter Text</p>
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
              &lt;div class="container"&gt;
              &lt;p class="typewriter"&gt;Typewriter Text &lt;/p&gt;
              &lt;/div&gt;
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

export default Typewritter