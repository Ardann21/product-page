import React from "react";
import product1 from "../assets/image-product-1.jpg";
import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import { useState } from "react";
import { useRef } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Main = () => {
  const slider = useRef(null);
  const slideRight = () => {
    if (slider.current) {
      slider.current.scrollLeft += 550;
    }
  };

  const slideLeft = () => {
    if (slider.current) {
      slider.current.scrollLeft -= 550;
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-13 mx-3 md:max-w-[1240px] md:mx-auto mt-12">
        <div className="absolute transform left-0 ml-22 md:ml-72">
          <FaArrowCircleLeft
            className="text-[#B9FF66] cursor-pointer"
            onClick={slideLeft}
            size={40}
          />
        </div>

        <div className="absolute transform right-0 mr-22 md:mr-72">
          <FaArrowCircleRight
            className="text-[#B9FF66] cursor-pointer"
            onClick={slideRight}
            size={40}
          />
        </div>
        <div className="flex w-full md:flex-col gap-3">
          <div
            className=" relative overflow-x-auto flex hide-scroolbar "
            ref={slider}
          >
            <img className="rounded-xl md:w-full" src={product1} alt="" />
            <img
              className="rounded-xl md:w-full md:hidden"
              src={product1}
              alt=""
            />
            <img
              className="rounded-xl md:w-full md:hidden"
              src={product1}
              alt=""
            />
            <img
              className="rounded-xl md:w-full md:hidden"
              src={product1}
              alt=""
            />
            <img
              className="rounded-xl md:w-full md:hidden"
              src={product1}
              alt=""
            />
          </div>

          <div className=" gap-2 hidden md:flex flex-wrap mt-2">
            <div className="w-32">
              <img className="rounded-md" src={product1} alt="" />
            </div>
            <div className="w-32">
              <img className="rounded-md" src={product1} alt="" />
            </div>
            <div className="w-32">
              <img className="rounded-md" src={product1} alt="" />
            </div>
            <div className="w-32">
              <img className="rounded-md" src={product1} alt="" />
            </div>
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
                  <div className="ml-2">
                    <img src={minus} alt="" />
                  </div>
                  <div>
                    <p>0</p>
                  </div>
                  <div className="mr-2">
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
