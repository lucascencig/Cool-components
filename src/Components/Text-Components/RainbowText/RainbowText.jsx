import React, { useState } from 'react'
import s from '../RainbowText/Styles.module.css'

const RainbowText = () => {
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
  }
  
  h2 {
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    animation: rainbow 2s linear infinite;
  }
  
  @keyframes rainbow {
    0% {
      color: red;
      text-shadow: 10px 0px 30px #FF0000;
    }
  
    15% {
      color: orange;
      text-shadow: 10px 0px 30px #FFA500;
    }
  
    30% {
      color: yellow;
      text-shadow: 10px 0px 30px #FFFF00;
    }
  
    45% {
      color: rgb(3, 216, 3);
      text-shadow: 10px 0px 30px #03D803;
    }
  
    60% {
      color: blue;
      text-shadow: 10px 0px 30px #0000FF;
    }
  
    75% {
      color: indigo;
      text-shadow: 10px 0px 30px #4B0082;
    }
  
    100% {
      color: red;
      text-shadow: 10px 0px 30px #FF0000;
    }
  
  }
`;
  return (
    <div>
      <div className={s.container}>
        <h2 className={s.h2}>Rainbow Text</h2>
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
              &lt;h2&gt;
              Rainbow Text
              &lt;/h2&gt;
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

export default RainbowText