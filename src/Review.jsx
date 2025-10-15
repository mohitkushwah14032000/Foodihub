
import React from 'react'
import Wts1 from '../src/assets/images/Wts1.png'
import Wts3 from '../src/assets/images/Wts3.png'
import { FaUtensils } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Review = () => {
    return (
        <section className='py-12 sm:py-16 md:py-20 lg:py-21 bg-white relative overflow-hidden mt-15'>
            <div className='container mx-auto px-4 sm:px-6 md:px-8 xl:px-12 relative  flex flex-col md:flex-row items-center
            gap-6 md:gap-8 lg:gap-12'>
                {/* MOBILE CONTENT */}
                <div className='w-full md:w-1/2 order-2 md:order-1 mb-6 md:mb-10 md:-ml-20  transform hover:translate-y-2
                transition-all duration-300'>
                    <div className='relative group'>
                        <img src={Wts1} alt='Happy Customer' className='w-full h-auto object-cover rounded-2xl shadow-2xl
                        transform rotate-2 group-hover:rotate-0 transition-all duration-300' style={{ maxWidth: "min(100%,640px)" }} />
                        <div className='absolute -bottom-4 -right-4 sm:bottom-6 sm:-right-6 md:-bottom-6 md:-right-2 bg-white p-2 rounded-full '>
                            <img src={Wts3} alt='Customer' className='w-10 h-10 sm:w-14 sm:h-14 md:h-14 rounded-4xl border-2 border-orange-200' />
                        </div>
                    </div>
                </div>
                {/* RIGHT CONTENT AREA */}
                <div className='w-full md:w-1/2 bg-white order-1 md:order-2'>
                    <div className='bg-white/30 backdroup-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl 
                    border-green/500 relative
                    overflow-hidden'>
                        <div className='relative z-10'>
                            <div className=' flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8'>
                                <FaUtensils className='text-orange-500 text-[2rem]' />
                                <span className='font-bold text-[1.25rem] text-orange-600 uppercase tracking-wider' >
                                    Testimonials
                                </span>
                            </div>
                            <h2 className='text-2xl sm:text-3xl md:text-2xl lg:text-5xl font-bold
                            text-gray-800 mb-4 sm:mb-6 lg:mb-8 leading-tight' style={{ fontFamily: "cursive" }}>
                                Epicurean Echoes: <br className='hideen md:block' />Savour the Moments</h2>
                            <div className='rounded-xl p-5 sm:p-6 md:p-4 lg:p-4 mb-6 border border-white/30'>
                                <div className='flex gap-1 sm:gap-2 mb-3 text-orange-400'>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
                                    ))}
                                </div>
                                <blockquote className='text-base sm:text-lg md:text-lg lg:text-xl xl-text-2xl  
                                text-gray-700 italic mb-4 sm:mb-6 tracking-wider'>
                                    "Fudo is the best.Besides the many and delicious meals, the service is also very good,
                                    Especially in the very fast delivery"
                                </blockquote>
                                <div className='flex items-center gap-3 sm:gap-4'>
                                    <img src={Wts3} alt='customer' className='w-10 h-10 sm:w-14 sm:h-14 md:h-14 
                                    rounded-full border-2 border-orange-200' />
                                    <div>
                                        <h4 className='font-bold text-sm sm-text-base md:text-lg lg:text-xl text-gray-800'>John Carter</h4>
                                        <p className='text-xs sm:text-sm md:text-base lg:text-lg text-gray-600'>Food Enthusiast</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Review
