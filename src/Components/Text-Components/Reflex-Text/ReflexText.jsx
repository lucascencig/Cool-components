import React, { useState } from 'react'
import s from '../Reflex-Text/Styles.module.css'
import '../../../index.css'

const ReflexText = () => {


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
  .reflex {
    font-size: 50px;
    width: fit-content;
  }
  
  .reflex::after {
    content: "Reflex Text";
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotateX(180deg);
    margin-top: -30px;
    background: linear-gradient(to top, #ffffff, #ffffff00);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

  return (
    <div>
      <div className=''>
        <p className={s.reflex}>Reflex Text</p>
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
              &lt;p class="reflex"&gt;Reflex Text &lt;/p&gt;
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

export default ReflexText