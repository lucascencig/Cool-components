import React, { useState } from 'react'
import s from '../Changing-Text/Styles.module.css'
import '../../../index.css'

const ChangingText = () => {

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
      width: 300px;
      height: 40px;
      font-size: 30px;
      line-height: 40px;
      padding-left: 10px;
      top: 0;
      top: 0;
      left: 0;
      margin: auto;
      overflow: hidden;
    }

    .list_ul {
      list-style: none;
      padding-left: 10px;
      animation: change-word 7s infinite;
    }

    .list_ul,
    .first_word {
      margin: 0;
    }

    @keyframes change-word {
      0% {
        margin-top: 0;
      }

      20% {
        margin-top: 0;
      }

      25% {
        margin-top: -40px;
      }

      50% {
        margin-top: -40px;
      }

      80% {
        margin-top: -80px;
      }

      95% {
        margin-top: -80px;
      }

      100% {
        margin-top: 0;
      }
    }
  `;


  return (
    <div className='flex flex-col '>
      <div className={s.container}>
        <p className={s.first_word}>Hello </p>
        <ul className={s.list_ul}>
          <li className={s.list_li}>World</li>
          <li className={s.list_li}>Universe</li>
          <li className={s.list_li}>to you!</li>
        </ul>
      </div>

      <div className='flex mt-2 w-60 justify-around m-auto'>
        <button onClick={handleOpenModalHTML}>HTML</button>
        <button onClick={handleOpenModalCSS}>CSS</button>
      </div>

      {
        openModalHTML === true ?
          <div className='flex flex-col mt-2'>
            <button onClick={handleCloseModalHTML} className='mb-2'>X</button>
            <textarea readOnly id="" className='resize-none object-contain h-48'>
              &lt;div class="container"&gt;
              &lt;p class="first_word"&gt;Hello &lt;/p&gt;
              &lt;ul class="list_ul"&gt;
              &lt;li class="list_li"&gt;World&lt;/li&gt;
              &lt;li class="list_li"&gt;Universe&lt;/li&gt;
              &lt;li class="list_li"&gt;to you!&lt;/li&gt;
              &lt;/ul&gt;

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

export default ChangingText
