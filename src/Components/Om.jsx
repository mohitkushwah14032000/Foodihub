import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import burger1 from "../assets/images/burger1.png";
import burger2 from "../assets/images/burger2.png";
import pizza1 from "../assets/images/pizza1.png";
import pizza2 from "../assets/images/pizza2.png";
import cupcake1 from "../assets/images/cupcake1.png";
import cupcake2 from "../assets/images/cupcake2.png";
import icecream1 from "../assets/images/icecream1.png";
import icecream2 from "../assets/images/icecream2.png";


const menuItems = [

    { name: "Burger", Price: "Rs.25", icon: "🍔", image1: burger1, image2: burger2 },
    { name: "Pizza", Price: "Rs.110", icon: "🍕", image1: pizza1, image2: pizza2 },
    { name: "Cupcake", Price: "Rs.50", icon: "🧁", image1: cupcake1, image2: cupcake2 },
    { name: "Ice Cream", Price: "Rs.20", icon: "🍦", image1: icecream1, image2: icecream2 },


];

const Om = () => {

    const [selectedItem, setSelectedItem] = useState(menuItems[0]);

    return (
        <div className='bg-white min-h-screen py-12 px-4 sm:px-6 md:px-8 lg:px-8 flex flex-col md:flex-col lg:flex-row
         items-center gap-8'>

            {/* {LEFT SIDEBAR} */}

            <div className='w-full md:w-3/4 lg:w-1/4 bg-white p-4 md:p-6 rounded-3xl shadow-lg border border-amber-300'>
                <h1 className='text-3xl md:text-4xl font-pacifico text-amber-600 mb-4 md:mb-6 text-center '>Our Menu</h1>
                <p className='text-base md:text-lg font-Comfortaa text-amber-700 italic mb-4 md:mb-4 text-center'>Menu That Always <br />Make you fall in Love</p>

                <div className='space-y-3 md:spacey-4'>
                    {menuItems.map((item, index) => (
                        <button key={index} onClick={() => setSelectedItem(item)} className={
                            `flex items-center justify-between w-full p-2 md:p-3 rounded-2xl transition-all duration-300
                             ${selectedItem.name === item.name ? "bg-amber-600 text-white" : "bg-white text-gray-800 border-amber-300"} hover:bg-amber-500
                              hover:text-white shadow:md`
                        }>
                            <div className='flex items-center space-x-2 md:space-x-3'>
                                <div className={`w-10 h-10d md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gradient-to-r 
                                ${selectedItem.name === item.name ?
                                        "from-yellow-400 to-orange-500 border-4 border-white shadow-lg scale-105" :
                                        "from-gray-200 to-gray-300 border-2 border-transparent"} text-white shadow-md transition-all duration-300
                                    transform hover:scale-105`}>
                                    <span className='text-[1.7rem]'>
                                        {item.icon}
                                    </span>
                                </div>
                                <h3 className='text-[1.1rem] font-semibold'>
                                    {item.name}
                                </h3>
                            </div>
                            <span className='text-[1.1rem] font-semibold'>
                                {item.Price}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className='w-full lg:w-3/4 flex flex-col items-center '>
                <div className='relative flex flex-col md:flex-row gap-4 md:gap-6'>
                    <div className='p-2 md:p-4 rounded-3xl'>
                        <img src={selectedItem.image1} alt={`${selectedItem.name} 1`}
                            className='w-70 sm:w-70 h-auto md:w-full' />
                    </div>
                    <div className='p-2  md:p-4 rounded-3xl'>
                        <img src={selectedItem.image2} alt={`${selectedItem.name} 2`}
                            className='w-70 sm:w-70 md:w-full h-auto' />
                    </div>
                </div>
                <h className="text-[1.6rem] font-semibold font-comfortaa text-gray-800">
                    {selectedItem.name}
                </h>
                <p className="text-[1.7rem] font-semibold font-comfortaa text-amber-600">
                    {selectedItem.Price}
                </p>

                {/* ADDITIONAL ICONS */}

                <div className=' mt-2 md:mt-5  flex items-center space-x-3 md:space-x-4 lg:space-x-6'>
                    <div className='flex items-center justify-center  bg-gray-250 p-1 rounded-full shadow-3xl 
                    transform transition hover:scale-110 '>
                        <FaHeart className='text-red-500' size={25} />
                    </div>
                    <div className='flex items-center justify-center  bg-gray-250 rounded-full shadow-3xl 
                    transform transition hover:scale-110 '>
                        <FaStar className='text-red-500' size={25} />
                    </div>
                    <div className='flex items-center justify-center  bg-white bg-gray-250 rounded-full shadow-3xl 
                    transform transition hover:scale-110 '>
                        <FaShareAlt className='text-red-500' size={25} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Om
