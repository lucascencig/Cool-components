import React, { useState } from 'react'
import '../../../index.css'
import Menu from '../Menu/Menu'
import ChangingText from '../../Text-Components/Changing-Text/ChangingText'
import ReflexText from '../../Text-Components/Reflex-Text/ReflexText'
import GlowText from '../../Text-Components/GlowText/GlowText'
import Typewritter from '../../Text-Components/Typewriter/Typewritter'
import RevealText from '../../Text-Components/RevealText/RevealText'
import WavyText from '../../Text-Components/WavyText/WavyText'
import GlowRevealText from '../../Text-Components/GlowRevealText/GlowRevealText'
import GhostText from '../../Text-Components/GhostText/GhostText'
import StrokeText from '../../Text-Components/StokeText/StrokeText'
import RainbowText from '../../Text-Components/RainbowText/RainbowText'


const TextComponentesLayout = () => {


  return (
    <div className='absolute top-0 left-0 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] w-full  flex flex-col justify-center items-center m-auto'>
      <Menu />
      <h2 className='mb-4'>Here you have some cool texts effects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 '>
        <div className='w-[350px] h-[300px] rounded-[30px] bg-[#212121] shadow-md p-4 '>
          <ChangingText />
        </div>
        <div className='w-[350px] h-[300px] rounded-[30px] bg-[#212121] shadow-md p-4 '>
          <ReflexText />
        </div>
        <div className='w-[350px] h-[300px] rounded-[30px] bg-[#212121] shadow-md p-4 '>
          <GlowText />
        </div>
        <div className='w-[350px] h-[300px] rounded-[30px] bg-[#212121] shadow-md p-4 '>
          <Typewritter />
        </div>
        <div className='w-[350px] h-[300px] rounded-[30px] bg-[#212121] shadow-md p-4 '>
          <RevealText />
        </div>
        <div className='w-[350px] h-[300px] rounded-[30px] bg-[#212121] shadow-md p-4 '>
          <WavyText />
        </div>

        <div className='w-[350px] h-[300px] rounded-[30px] bg-[#212121] shadow-md p-4 '>
          <GlowRevealText />
        </div>

        <div className='w-[350px] h-[300px] rounded-[30px] bg-[#212121] shadow-md p-4 '>
          <GhostText />
        </div>

        <div className='w-[350px] h-[300px] rounded-[30px] bg-[#212121] shadow-md p-4 '>
          <StrokeText />
        </div>

        <div className='w-[350px] h-[300px] rounded-[30px] bg-[#212121] shadow-md p-4 '>
          <RainbowText />
        </div>
      </div>
    </div>
  )
}

export default TextComponentesLayout