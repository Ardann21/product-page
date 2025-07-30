import React from "react";
import cartt from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
import { useState } from "react";
import product1 from "../assets/image-product-1.jpg";
import trash from "../assets/icon-delete.svg";

const Nav = ({cart ,removeFromCart}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const isCartOpen = () => {
    setCartOpen(!cartOpen);
  };


  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

 

  return (
    <>
      <div className="max-w-[1280px] mx-auto p-5 border-b border-b-gray-200 flex justify-between">
        <div className="flex gap-5 md:gap-13 items-center">
          <div className="z-32" onClick={handleOpen}>
            {!isOpen ? (
              <img className="md:hidden items-center" src={menu} alt="" />
            ) : (
              <img className="md:hidden items-center" src={close} alt="" />
            )}
          </div>
          <h1 className="text-3xl font-bold">sneakers</h1>
          <ul className=" gap-13 hidden md:flex">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex">
              <div className={!cartOpen ? " p-7 fixed top-17 right-0 md:right-16  gap-3 rounded-2xl bg-white shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] flex flex-col ease-in-out duration-155" : "p-7 fixed top-[-100%] right-0 md:right-16  gap-3 rounded-2xl bg-gray-100 flex flex-col ease-out duration-800"}>
                <div className="border-b border-b-gray-300 flex"><h1 className="text-left font-bold">Cart</h1></div>
                {cart.length ===0 ? <p className="px-15 text-xl">No items in cart </p>:
                (cart.map((item)=>(
                  <div key={item.id} className="flex gap-3">
                  <div className="h-12 w-12"><img className="w-auto" src={product1} alt="" /></div>
                  <div className="flex flex-col">
                    <p>{item.name}</p>
                  <div className="flex gap-1"><p>${item.price}.00</p> <p>x{item.quantity}</p> <p className="font-bold">${item.price * item.quantity}.00</p></div>
                  
                  </div>
                  <div onClick={() => removeFromCart(cart[0].id)} className="items-center flex cursor-pointer"><img src={trash} alt="" /></div>
                  
                </div>
                )))
                 
                }
               
                  <button className="bg-orange-500 w-full p-3 rounded-md cursor-pointer hover:bg-black hover:text-white duration-250">
                    Checkout
                  </button>
              </div>
          </div>
          <div onClick={isCartOpen} className="cursor-pointer"><img src={cartt} alt="" /> <span className="absolute top-5 bg-amber-600 rounded-full text-[11px] px-1">{cart.map((item)=>(
            item.quantity
          ))}</span></div>
          
          <img className="h-auto w-9 block hover:scale-95 hover:border-amber-600 hover:border-5 rounded-full duration-100 cursor-pointer" src={avatar} alt="" />
          
        </div>
        
        {!isOpen}
        <div
          className={
            isOpen
              ? "fixed left-0 top-0 bg-white  border-r w-[60%] border-r-black h-full ease-in-out duration-150 z-31"
              : "fixed left-[-100%] ease-out duration-950"
          }
        >
          <ul className="text-left ml-4 mt-18 font-bold">
            <li className="mt-5 text-xl">Collections</li>
            <li className="mt-5 text-xl">Men</li>
            <li className="mt-5 text-xl">Women</li>
            <li className="mt-5 text-xl">About</li>
            <li className="mt-5 text-xl">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
