import React, { useState } from 'react'
import s from '../GhostText/Styles.module.css'


const GhostText = () => {


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
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100px;
    background: #111;
    overflow: hidden;
  }
  
  h2 span {
    transition: 1.5s;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
  }
  
  h2:hover span {
    filter: blur(20px);
    opacity: 0;
    transform: scale(2);
  }
  
  h2 span:nth-child(8n+1) {
    transition-delay: 0s;
  }
  
  h2 span:nth-child(8n+2) {
    transition-delay: 0.1s;
  }
  
  h2 span:nth-child(8n+3) {
    transition-delay: 0.2s;
  }
  
  h2 span:nth-child(8n+4) {
    transition-delay: 0.3s;
  }
  
  h2 span:nth-child(8n+5) {
    transition-delay: 0.4s;
  }
  
  h2 span:nth-child(8n+6) {
    transition-delay: 0.5s;
  }
  
  h2 span:nth-child(8n+7) {
    transition-delay: 0.6s;
  }
  
  h2 span:nth-child(8n+8) {
    transition-delay: 0.7s;
  }
`;
  return (
    <div>
      <div className={s.container}>
        <section className={s.section}>
          <h2 className={s.h2}>
            <span>H</span>
            <span>O</span>
            <span>V</span>
            <span>E</span>
            <span>R</span>
            <span> </span>
            <span>M</span>
            <span>E</span>
          </h2>
        </section>
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
              &lt;div &gt;
              &lt;section &gt;
              &lt;h2&gt;
              &lt;span&gt;H&lt;/span&gt;
              &lt;span&gt;O&lt;/span&gt;
              &lt;span&gt;V&lt;/span&gt;
              &lt;span&gt;E&lt;/span&gt;
              &lt;span&gt;R&lt;/span&gt;
              &lt;span&gt; &lt;/span&gt;
              &lt;span&gt;M&lt;/span&gt;
              &lt;span&gt;E&lt;/span&gt;
              &lt;/h2&gt;
              &lt;/section&gt;
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

export default GhostText