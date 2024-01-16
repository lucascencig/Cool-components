import React, { useState } from 'react'
import s from './Styles.module.css'
const GlowRevealText = () => {


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
    min-height: 100px;
    background: #000;
    border-radius: 10px;
  }
 
  .glow_reveal {
    position: relative;
    font-size: 30px;
    font-weight: 900;
    color: #222;
  }
 
  .glow_reveal::before {
    content: attr(data-text);
    position: absolute;
    color: #fff;
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    border-right: 1px solid #fff;
    animation: glow-reveal 8s linear infinite;
    filter: drop-shadow(0 0 20px #fff)drop-shadow(0 0 50px #fff);
  }
 
  @keyframes glow-reveal {
 
    0%,
    10%,
    100% {
      width: 0;
    }
 
    70%,
    90% {
      width: 100%;
    }
  }
`;

  return (
    <div>
      <div className={s.container}>
        <p data-text="&nbsp;Glow Reveal Text&nbsp; " className={s.glow_reveal}>&nbsp;Glow Reveal Text&nbsp;</p>
      </div>


      <div className='flex mt-2 w-60 justify-around m-auto'>
        <button onClick={handleOpenModalHTML}>HTML</button>
        <button onClick={handleOpenModalCSS}>CSS</button>
      </div>


      {
        openModalHTML === true ?
          <div className='flex flex-col mt-2 '>
            <button onClick={handleCloseModalHTML} className='mb-2'>X</button>
            <textarea readOnly id="" className='resize-none object-contain h-48'>
              &lt;div className="container"&gt;
              &lt;p data-text="&amp;nbsp;Glow Reveal Text&amp;nbsp; " className="glow_reveal"&gt;
              &amp;nbsp;Glow Reveal Text&amp;nbsp;
              &lt;/p&gt;
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

export default GlowRevealText