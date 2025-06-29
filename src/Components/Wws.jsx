import React from 'react'
import wws1 from "../assets/images/wws1.png"
import wws2 from "../assets/images/wws2.png"
import wws3 from "../assets/images/wws3.png"

const Wws = () => {
    return (
        <div className='w-full bg-white min-h-screen  to yellow-50 px-4 sm:px-6 lg:px-20 py-12 md:py-20 xl:px-24'>
            <div className='mx-auto text-center max-w-7xl'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 uppercase
                font-poppins tracking-widest mb-3 animate-fade-in'>WHAT WE SERVE</h2>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-gray-800 font-poppins leading-tight
                mb-8 md:mb-12 lg:mb-16'>
                    Delicious Delivered <br className='hidden sm:block' />
                    Just The Way You Love! &#127829; &#128640;
                </h1>
                <div className='grid grid-cols-1 md:gird-cols-3 lg:grid-cols-3 gap-8 sm:gap-10 mt-10'>
                    {/* SERVICE CARDS */}
                    {[
                        {
                            img: wws1,
                            title: "One-Tap Ordering",
                            text: "Skip the hassle! With Just one tap, you cravings are on their way to doorstap!"
                        },
                        {
                            img: wws2,
                            title: "Flash-Speed Delivery",
                            text: "We don't just deliver food, we deliver happiness-hot & fresh, faster the ever!"
                        },
                        {
                            img: wws3,
                            title: "Five-start Quality",
                            text: "Every bite is a masterspiece! only the best ingredients for an unforgettable experience"
                        },

                    ].map((service, index) => (
                        <div key={index} className='group-relative rounded-xl p-4 sm:p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
                            <div className='overflow-hidden'>
                                <img src={service.img} alt={service.title} className='w-full  h-50 sm:h-56 md:h-48 lg:h-56 xl:h-64
                                object-contain lg:object-cover transition-transform duration-300'/>
                                <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-orange-600 mt-4 sm:mt-6 font-poppins'>
                                    {service.title}
                                </h3>
                                <p className='text-base sm:text-lg text-gray-700 leading-relaxed mt-2 sm:mt-3 px-2 sm:px-0'>
                                    {service.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Wws;
