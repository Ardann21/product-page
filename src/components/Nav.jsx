import React from 'react'
import cart from '../assets/icon-cart.svg'
import avatar from '../assets/image-avatar.png'
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-close.svg'
import { useState } from 'react'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen =()=>{
        setIsOpen(!isOpen)
    }

  return (
    <>
    <div className='max-w-[1280px] mx-auto p-5 border-b border-b-gray-200 flex justify-between'>
        <div className='flex gap-5 md:gap-13 items-center'>
            <div className='z-32' onClick={handleOpen}>
              { isOpen ? <img className='md:hidden items-center' src={menu} alt="" /> : <img className='md:hidden items-center' src={close} alt="" />}  
                </div>
            <h1 className='text-3xl font-bold'>sneakers</h1>
                 <ul className=' gap-13 hidden md:flex'>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                 </ul>
                 
            </div>
        <div className='flex items-center gap-6'>
            <img src={cart} alt="" />
            <img className='h-auto w-9 block' src={avatar} alt="" />
        </div>
        {!isOpen }
        <div className={!isOpen ?'fixed left-0 top-0 bg-white  border-r w-[60%] border-r-black h-full ease-in-out duration-150' : 'fixed left-[-100%] ease-out duration-950'}>
            <ul className='text-left ml-4 mt-18'>
                
                    <li className='mt-5 text-xl'>Collections</li>
                    <li className='mt-5 text-xl'>Men</li>
                    <li className='mt-5 text-xl'>Women</li>
                    <li className='mt-5 text-xl'>About</li>
                    <li className='mt-5 text-xl'>Contact</li>
                 </ul>
        </div>
         
    </div>
    </>
  )
}

export default Nav