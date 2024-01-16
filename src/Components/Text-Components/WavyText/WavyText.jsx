import React, { useState } from 'react'
import s from '../WavyText/Styles.module.css'
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
  .wavy {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    position: relative;
  }
  
  .wavy span {
    position: relative;
    display: inline-block;
    color: #fff;
    font-size: 20px;
    text-align: center;
    animation: wavy 1s ease-in-out infinite;
    animation-delay: calc(0.1s * var(--i));
  }
  
  @keyframes wavy {
    0% {
      transform: translateY(0px);
    }
  
    20% {
      transform: translateY(-10px);
    }
  
    40%,
    100% {
      transform: translateY(0px);
    }
  }
`;

  return (
    <div>
      <div className={s.wavy}>
        <span style={{ "--i": 1 }}>T</span>
        <span style={{ "--i": 2 }}>h</span>
        <span style={{ "--i": 3 }}>i</span>
        <span style={{ "--i": 4 }}>s</span>
        <span style={{ "--i": 5 }}>&nbsp; </span>
        <span style={{ "--i": 6 }}>is</span>
        <span style={{ "--i": 7 }}>&nbsp; </span>
        <span style={{ "--i": 8 }}>a</span>
        <span style={{ "--i": 9 }}>&nbsp; </span>
        <span style={{ "--i": 10 }}>W</span>
        <span style={{ "--i": 11 }}>a</span>
        <span style={{ "--i": 12 }}>v</span>
        <span style={{ "--i": 13 }}>y</span>
        <span style={{ "--i": 14 }}>&nbsp; </span>
        <span style={{ "--i": 15 }}>T</span>
        <span style={{ "--i": 16 }}>e</span>
        <span style={{ "--i": 17 }}>x</span>
        <span style={{ "--i": 18 }}>t</span>
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
              &lt;div class="wavy"&gt;
              &lt;span style="--i: 1;"&gt;T&lt;/span&gt;
              &lt;span style="--i: 2;"&gt;h&lt;/span&gt;
              &lt;span style="--i: 3;"&gt;i&lt;/span&gt;
              &lt;span style="--i: 4;"&gt;s&lt;/span&gt;
              &lt;span style="--i: 5;"&gt; &lt;/span&gt;
              &lt;span style="--i: 6;"&gt;is&lt;/span&gt;
              &lt;span style="--i: 7;"&gt; &lt;/span&gt;
              &lt;span style="--i: 8;"&gt;a&lt;/span&gt;
              &lt;span style="--i: 9;"&gt; &lt;/span&gt;
              &lt;span style="--i: 10;"&gt;W&lt;/span&gt;
              &lt;span style="--i: 11;"&gt;a&lt;/span&gt;
              &lt;span style="--i: 12;"&gt;v&lt;/span&gt;
              &lt;span style="--i: 13;"&gt;y&lt;/span&gt;
              &lt;span style="--i: 14;"&gt; &lt;/span&gt;
              &lt;span style="--i: 15;"&gt;T&lt;/span&gt;
              &lt;span style="--i: 16;"&gt;e&lt;/span&gt;
              &lt;span style="--i: 17;"&gt;x&lt;/span&gt;
              &lt;span style="--i: 18;"&gt;t&lt;/span&gt;
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