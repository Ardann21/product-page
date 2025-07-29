import React from "react";
import product1 from "../assets/image-product-1.jpg";
import product2 from "../assets/image-product-2.jpg";
import product3 from "../assets/image-product-3.jpg";
import product4 from "../assets/image-product-4.jpg";
import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import { useState } from "react";
import { useRef } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Main = ({quant,setQuant}) => {
  
  const [index,setIndex] = useState(0)
  const slides =[
    {
      image:product1
    },
    {
      image:product2
    },
    {
      image:product3
    },
    {
      image:product4
    }
  ]
  const prevSlide=()=>{
    const first = index===0
    const prevIndex = first ? index : index -1
    setIndex(prevIndex)
  }

  const nextSlide=()=>{
    const last = index=== slides.length -1
    const nextIndex = last ? index : index +1
    setIndex(nextIndex)
  }
  const setSlide=(i)=>{
    setIndex(i);
  }

  const addQuant =()=>{
    setQuant(quant+1)
  }
  const removeQuant =()=>{

    if (quant > 0) {
      setQuant(quant - 1);
    }
  }




  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-13 mx-3 md:max-w-[1240px] md:mx-auto mt-12">
        
        <div className="flex w-full md:flex-col gap-3">
          <div
              className="w-full h-[400px] bg-cover bg-center rounded-xl duration-500"
              style={{ backgroundImage: `url(${slides[index].image})` }}
            ></div>
          <FaArrowCircleLeft className="absolute keft-4 top-76 md:hidden" onClick={prevSlide} size={30}/>
          <FaArrowCircleRight className="absolute right-4 top-76 md:hidden" onClick={nextSlide} size={30}/>
          <div className="hidden md:flex gap-3 flex-wrap">
            <div className="w-32" onClick={() => setSlide(0)}><img className="rounded-xl" src={product1}alt="" /></div>
            <div className="w-32" onClick={() => setSlide(1)}><img  className="rounded-xl" src={product2}alt="" /></div>
            <div className="w-32" onClick={() => setSlide(2)}><img className="rounded-xl" src={product3}alt="" /></div>
            <div className="w-32" onClick={() => setSlide(3)}><img className="rounded-xl" src={product4}alt="" /></div>
          </div>
         
        </div>
        <div className="">
          <div className="mx-5 mt-3 grid-cols-1 md:grid-cols-2">
            <div className="text-left flex flex-col gap-2">
              <h1 className="font-bold text-gray-400">SNEAKER COMPANY</h1>
              <p className="font-bold text-5xl text-gray-800">
                Fall Limited Edition Sneakers
              </p>
              <p className="text-gray-600">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer
              </p>
            </div>
            <div>
              <div className="text-left flex md:flex-col justify-between mt-3">
                <p>
                  $125.00{" "}
                  <span className="bg-gray-900 text-white font-bold p-1 rounded-md">
                    50%
                  </span>
                </p>
                <p className="line-through text-gray-400">$250.00</p>
              </div>
              <div className="flex flex-col md:flex-row mt-2 gap-2">
                <div className="flex bg-gray-200 justify-between md:w-1/4 p-3 items-center rounded-md">
                  <div className="ml-2" onClick={removeQuant}>
                    <img src={minus} alt="" />
                  </div>
                  <div>
                    <p>{quant}</p>
                  </div>
                  <div className="mr-2" onClick={addQuant}>
                    <img src={plus} alt="" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <button className="bg-orange-500 w-full p-3 rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
