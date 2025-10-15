import React, { useState } from 'react'
import Bannervideo from '../assets/images/Bannervideo.mp4'
import '../Components/Global.css'
import Bannerfood from '../assets/images/Bannerfood.png'
import Bannersmall1 from '../assets/images/Bannersmall1.png'
import Bannersmall2 from '../assets/images/Bannersmall2.png'
import Bannersmall3 from '../assets/images/Bannersmall3.png'
import FireIcon from '../assets/images/FireIcon.png'



const Banner = () => {

    const [showvideo, setShowvideo] = useState(false);

    return (
        <div className='bg-white pt-12 md:pt-24 min-h-[800px] flex items-center'>
            {/* Video Model */}
            {showvideo && (<div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'>
                <div className='bg-white p-4 md:p-8 rounded-lg w-full max-w-4xl relative'>
                    <button onClick={() => (setShowvideo(false))} className='absolute -top-8 right-8 text-white text-2xl'>
                        &times;
                    </button>
                    <div className='aspect-video'>
                        <iframe src={Bannervideo} width="100%" height="100%" allow='autoplay' allowFullScreen className='rounded-lg'></iframe>
                    </div>
                </div>
            </div>
            )}


            <div className='container mx-auto px-6 md:px-22 xl:px-20 flex flex-col lg:flex-row items-center justify-between 
                gap-12 '>
                <div className='w-full lg:flex-1 text-center lg:text-left bg:green-500'>
                    <h3 className='text-lg mt-5 md:text-xl lg:text-2xl font-bold text-gray-600 mb-2 md:mb-5 font-comforta'>Mane Dion Fuster</h3>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-6xl font-pacifico animate-slide-up font-extrabold 
                    leading-type mb-4   '>
                        Claim best offer on
                        <br />
                        <span className='text-orange-600'>Fast Food</span> &{''}
                        <br className='hidden md:block' />
                        <span className='text-yellow-500'>Restaurent</span>
                    </h1>
                    <p className='mb-6 text-sm md:text-base lg:text-lg text-gray-600'>
                        Out job is to fill your tummy with delicious food{''}
                        <br className='hidden sm:block' />
                        and with fast & free delivery
                    </p>
                    <div className='flex flex-wrap justify-center lg:justify-start gap-6'>
                        <button className='bg-red-500 text-white px-5 py-2 md:px-5 md:py-2 rounded-full hover:bg-red-600
                        transition hover:scale-105 text-sm md:text-base font-semibold'>Get Start</button>
                        <button className='flex items-center  md:gap-3 group ' onClick={() => setShowvideo((true))}>
                            <span className='w-10 h-10 md:w-12 bg-red-500 rounded-full flex items-center justify-center transition
                            group-hover:bg-red-600 group-hover:scale-110 shadow-lg relative'>
                                <span className='absolute inset-0 animate-ping rounded-ful bg-red-400 opacity-75'></span>
                                <span className='text-white text-lg'>&#9654;</span>
                            </span>
                            <span className='text-gray-600 hover:text-red-500 font-semibold text-sm md:tex-base'>Watch Video</span>
                        </button>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center sm:justify-center md:justify-start sm:items-center gap-4 mt-6'>
                        <div className='flex -space-x-2'>
                            <img src={Bannersmall1} alt='customer' className='w-10 h-10 md:w-12 md:h-12 rounded-full
                            border-2 border-white shadow-md'></img>
                            <img src={Bannersmall2} alt='customer' className='w-10 h-10 md:w-12 md:h-12 rounded-full
                            border-2 border-white shadow-md'></img>
                            <img src={Bannersmall3} alt='customer' className='w-10 h-10 md:w-12 md:h-12 rounded-full
                            border-2 border-white shadow-md'></img>
                        </div>
                        <div>
                            <p className='text-lg md:text-xl font-bold flex items-center bg-white'>
                                <span className='text-yellow-500 mr-2'>&#x2605;&#x2605;&#x2605;</span>7.48k
                            </p>
                            <p className='text-gray-600 text-sm md:text-base'>Our Happy Customer</p>
                        </div>
                    </div>
                </div>


                {/* Right Side */}


                <div className=' w-full lg:flex-1 relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto'>
                    <div className='relative mx-auto flex justify-center items-center overflow-hidden p-4'>
                        <img
                            src={Bannerfood}
                            alt="Banner Food"
                            className='w-full h-auto object-cover  transition-transform duration-800 ease-in-out origin-center 
                            rotate-[180deg] hover:rotate-[0deg]'
                        />

                    </div>
                </div>



            </div>
        </div>
    )
}

export default Banner
