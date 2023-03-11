import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            {/* component */}
            {/* Foooter */}
            <section className="bg-slate-900 text-gray-200 pt-20">
                <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                        <div className="px-5 py-2">
                            <a
                                href="#"
                                className="text-base leading-6 text-gray-300 hover:text-sky-200"
                            >
                                Home
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a
                                href="#"
                                className="text-base leading-6 text-gray-300 hover:text-sky-200"
                            >
                                Blogs
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a
                                href="#"
                                className="text-base leading-6 text-gray-300 hover:text-sky-200"
                            >
                                Team
                            </a>
                        </div>
                      
                        <div className="px-5 py-2">
                            <a
                                href="#"
                                className="text-base leading-6 text-gray-300 hover:text-sky-200"
                            >
                                Contact
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a
                                href="#"
                                className="text-base leading-6 text-gray-300 hover:text-sky-200"
                            >
                                Terms
                            </a>
                        </div>
                    </nav>
                    <div className="flex justify-center mt-8 space-x-6">
                        <a href="#" className="text-gray-400 hover:text-gray-300">
                            <FaFacebook className='text-2xl' />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300">
                            <FaInstagram className='text-2xl' />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300">
                            <FaTwitter className='text-2xl' />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300">
                            <FaGithub className='text-2xl' />
                        </a>
                        
                    </div>
                    <p className="mt-8 text-base leading-6 text-center text-gray-400">
                        © 2023 DeBlog. | All rights reserved.
                    </p>
                </div>
            </section>
        </>

    )
}

export default Footer