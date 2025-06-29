import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { ImInstagram } from 'react-icons/im';

const Footer = () => {

    const socialLinks = [
        { icon: <FaFacebookF className="sm:size-4 size3" />, color: "bg-blue-600" },
        { icon: <FaTwitter className="sm:size-4 size3" />, color: "bg-sky-400" },
        { icon: <FaInstagram className="sm:size-4 size3" />, color: "bg-red-500" },
        { icon: <FaLinkedinIn className="sm:size-4 size3" />, color: "bg-blue-800" },
    ]

    const footerLinks = [
        { title: "Quick Links", links: ["Home", "Menu", "Services", "Reviews"] },
        { title: "Legal", links: ["Privacy Policy", "Terms of Use", "Payment Policy", "Cookies"] },

    ]

    return (
        <footer className='relative py-10 sm:py-16 md:py-18 bg-white'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 marker: gap-10 lg:gap-8 sm:mb-12'>

                    {/* BRAND SECTION */}
                    <div className='text-center space-y-3 sm:space-y-4 mt-2 sm:mt-0'>
                        <h2 className='text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-orange-600
                        font-serif tracking-wide drop-shadow-lg inline-block px-4 sm:px-6 md:px-8 lg:px-4
                        py-2 sm:py-4 md:py-3 lg:py-2 border-1 border-gray-300 rounded-full bg-transparent'>Foodei's Hub</h2>
                        <p className='text-gray-700 font-comfortaa text-lg sm:text-xl md:text-xl italic'>
                            Serving Happiness Since 2020
                        </p>
                        <div className='flex justify-center  space-x-2 sm:space-x-3'>
                            {socialLinks.map((item, index) => (
                                <a href='#' key={index} className={`${item.color} text-white p-2 sm:p-3 rounded-full shadow-sm
                                sm:shadow-lg transition-all transform hover:scale-110 hover:rotate-6 list-disc`}>
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* LINKS SECTION */}
                    {footerLinks.map((item, index) => (
                        <div key={index} className='text-center space-y-3 sm:space-y-4'>
                            <h2 className='text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-semibold text-gray-800 font-serif 
                            tracking-wide inline-block px-4 sm:px-6 md:px-8 lg:px-4 py-2 sm:py-4 md:py-4 lg:py-3 
                             border-gray-300 rounded-full bg-transparent'>
                                {item.title}
                            </h2>
                            <ul className='space-y-1 sm:space-y-2'>
                                {item.links.map((link, linkIndex) => (
                                    <li className=''>
                                        <a href='#' className='text-gray-700 font-comfortaa hover:text-orange-600
                                        transition-color text-base sm:text-lg md:text-xl'>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* CONTACT SECTION */}

                    <div className='text-center sm:text-left space-y-3 sm:space-y-4'>
                        <h3 className='text-2xl sm:text-3xl font-semibold text-gray-800 font-serif tracking-wide inline-block px-3 
                        sm:px-4 py-1 sm:py-2  rounded-full bg-transparent border-gray-300 '>Contact Us</h3>
                        <div className='space-y-2 sm:space-y-3'>
                            <div className='flex justify-center sm:justify-start items-center space-x-2'>
                                <FaMapMarkedAlt className='text-orange-600 shrink-0' size={20} />
                                <span className='text-gary-600 font-comfortaa text-base sm:text-lg
                                md:text-xl'>123 Food Street, New York</span>
                            </div>
                            <div className='flex justify-center sm:justify-start items-center space-x-2'>
                                <FaPhoneAlt className='text-orange-600 shrink-0' size={20} />
                                <span className='text-gary-600 font-comfortaa text-base sm:text-lg
                                md:text-xl'>+12 34567890</span>
                            </div>
                            <div className='flex justify-center sm:justify-start items-center space-x-2'>
                                <FaRegEnvelope className='text-orange-600 shrink-0' size={20} />
                                <span className='text-gary-600 font-comfortaa text-base sm:text-lg
                                md:text-xl'>contact@foodiehub</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* NEWSLETTERS SECTION */}
                <div className='rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-8 shadow-lg
                    sm:shadow-2xl max-w-4xl mx-auto mb-8 sm:mb-12 border border-white/20'>
                    <div className='text-center'>
                        <h3 className='text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-bold mb-3 sm:mb-4
                            font-serif tracking-wide drop-shadow-md inline-block px-3 sm:px-4 md:px-8 lg:px-3
                            py-1 sm:py-2 md:py-3 lg:py-1 bg-transparent'>Get 15% Off Your First Order
                        </h3>
                    </div>



                    <div className=' flex flex-col md:flex-row justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-4'>
                        <input type='email' placeholder='Enter your Email' className='bg-white w-full md:w-[70%] px-4 sm:px-6 md:px-8 lg:px-4
                            py-3 sm:py-4 md:py-3 lg:py-2 border border-orange-200 rounded-full focus:outline-none focus:ring-1 focus:ring-orange-500
                            text-base sm:text-lg placeholder-gray-500'/>
                        <button className='bg-red-500 text-white px-6 w-full md:w-[30%] sm:px-10 md:px-8 lg:px-6 py-2 sm:py-3 
                        md:py-3 lg:py-3 rounded-full font-semibold hover:bg-blue-500 transition-transform transform hover:scale-105 text-base
                             sm:text-lg shadow:md'>Subscribe Now</button>
                    </div>

                </div>


                <div className='border-t border-orange-200 pt-5 sm:pt-6 text-center space-y-3 sm:space-y-4 font-semibold'>
                    <p className='text-gray-800 text-sm sm:text-base md:text-xl'>
                        &copy;{new Date().getFullYear()} Foodie's Hub. All Right Reserved
                    </p>
                    <p className='text-gray-800 text-sm sm:text-base md:text-xl '>
                        Designed by{""}
                        <a target='_blank' rel='noopener noreferrer' className='text-red-500 cursor-pointer hover:text-blue-500 pl-2 font-semibold' >
                            MOHIT
                        </a>
                    </p>
                </div>
            </div>

        </footer>
    )
}

export default Footer
