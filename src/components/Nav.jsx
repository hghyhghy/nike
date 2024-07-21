import React from 'react'
import {headerLogo} from "../assets/images"
import {hamburger} from "../assets/icons"
import { navLinks } from './../constants/index';

const Nav = () => {
  return (
    <header className='absolute z-10 w-full py-8 padding-x'>

        <nav className='flex items-center justify-center max-container'>

            <a href=' / '>

            <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
           
          />

            </a>
            <ul className='flex items-center justify-center flex-1 gap-16 max-lg:hidden'>

              {navLinks.map((item) => (

                <li key={item.label}>

                    <a href={item.href}   
                    className='text-lg leading-normal font-montserrat text-slate-gray z-99'>
                        {item.label}
                    </a>

                </li>
              ))}

            </ul>
            <div className='hidden ml-auto max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} 
           className='ml-4'
          />
            </div>
        </nav>


    </header>
  )
}

export default Nav