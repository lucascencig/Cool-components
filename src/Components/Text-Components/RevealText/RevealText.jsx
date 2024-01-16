import React, { useState } from 'react'
import s from './Styles.module.css'
const RevealText = () => {


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
    min-height: 200px;
    background-color: #000000;
  }
  
  .reveal {
    position: relative;
    margin: 0;
    font-size: 20px;
    font-weight: 900;
    color: #fff;
    z-index: 1;
    overflow: hidden;
  }
  
  .reveal::before {
    content: "";
    position: absolute;
    top: 0;
    width: 120%;
    height: 100%;
    background: linear-gradient(90deg, transparent 0%, #000 5%, #000 100%);
    animation: animate 3.5s linear forwards infinite;
  }
  
  @keyframes animate {
    0% {
      left: -5%;
    }
  
    100% {
      left: 120%;
    }
  }
  
  .reveal span {
    color: #ff022c;
  
  }
`;

  return (
    <div>
      <div className={s.container}>
        <p className={s.reveal}><span>R</span>eveal <span>Text</span></p>
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
              &lt;p class="reveal" &gt; &lt;span &gt;R&lt; /span&gt;eveal &lt;span &gt;Text&lt;  &lt;/p&gt;
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

export default RevealText