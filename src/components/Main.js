import React from 'react'
import heroImg from '../images/image-hero-mobile.png';
import heroDesktop from '../images/image-hero-desktop.png';
import Button from './Button';
import {ReactComponent as Databiz} from '../images/client-databiz.svg'
import {ReactComponent as Audiophile} from '../images/client-audiophile.svg'
import {ReactComponent as Meet} from '../images/client-meet.svg'
import {ReactComponent as Maker} from '../images/client-maker.svg'

const Main = () => {
  return (
    <main className='w-full lg:flex lg:items-center lg:justify-evenly z-0'>
        <div className='w-full mb-8 lg:w-[500px] lg:order-last'>
            <img src={heroImg} className="w-full lg:hidden"/>
            <img src={heroDesktop} className="object-cover hidden lg:block"/>
        </div>
        <div className='flex flex-col lg:w-6/12 '>
        <div className='flex flex-col items-center justify-center lg:-order-3 lg:items-start'>
            <h1 className='font-bold text-4xl my-8 lg:text-8xl z-0'>Make remote work</h1>
            <p className='font-medium text-gray-700 text-md text-center px-2 mb-8 lg:text-start lg:text-lg '>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <Button>Learn more</Button>
        </div>
        <div className='flex w-full mt-20 mb-8 justify-evenly lg:justify-between lg:mt-35'>
            <Databiz className="scale-75 sm:scale-100 "/>
            <Audiophile className="scale-75 sm:scale-100" />
            <Meet className="scale-75 sm:scale-100"/>
            <Maker className="scale-75 sm:scale-100"/>
        </div>
        </div>
    </main>
  )
}

export default Main