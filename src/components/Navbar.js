import React from 'react'
import {ReactComponent as ReactLogo} from '../images/logo.svg';
import {ReactComponent as Hamburger} from '../images/icon-menu.svg';
import { navContent } from '../content/content';
import ListItem from './ListItem';
import { navButtons } from '../content/content';
import Button from './Button';

const Navbar = ({closeModal}) => {
  return (
    <nav className='flex justify-between py-2 z-20'>
      <div className='flex flex-row items-center'>
        <div className='m-4 cursor-pointer flex justify-between'>
        <ReactLogo />
        </div>
        <div className='hidden ml-12 lg:flex gap-4 '>
        {navContent.map((el, idx) => (
                <ListItem
                  key={idx}
                  text={el.text}
                  arrow={el.arrow}
                  childrens={el.childrens}
                />
              ))}
        </div>
        </div>
        <div className='m-4 cursor-pointer'>
        <Hamburger className="flex lg:hidden" onClick={closeModal}/>
        <div className="hidden lg:flex gap-10 items-center w-100">
              <p className="text-gray-500 cursor-pointer py-3 flex items-center hover:text-black duration-300">
                {navButtons.login}
              </p>
              <Button reverse>{navButtons.register}</Button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar