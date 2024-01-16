import React, { useState } from 'react'
import s from '../StokeText/Styles.module.css'
const StrokeText = () => {
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
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
  }
`;
  return (
    <div>
      <div className={s.container}>
        <h2 className={s.h2}>Stroke Text</h2>
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
              Stroke Text
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

export default StrokeText