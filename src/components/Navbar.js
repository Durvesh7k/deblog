import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import profile from '../assets/user.png';
import { MdAccountCircle, MdKeyboardArrowRight } from 'react-icons/md';
import { HiMenuAlt3, HiOutlineX, HiLogout, HiMenuAlt4 } from 'react-icons/hi';
import { Transition } from '@headlessui/react';
import { AiOutlineLogout } from 'react-icons/ai'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useStateContext } from '../context';


export const Navbar = ({ account, onClickButton, handleLogout }) => {
    const {address} =useStateContext();

    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-transparent z-50 fixed border-b-2 border-slate-700 w-screen py-2 md:py-3 text-gray-100 backdrop-filter backdrop-blur-lg">
            <div className="container mx-auto  flex items-center justify-between sm:px-8 px-12 ">
                <div className="brand-logo">
                    <Link to="/" className="text-xl font-extrabold ">DeBlog.</Link>
                </div>
                <ul className="hidden  items-center md:flex">
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'cyan' : 'white' })} className='mx-1 px-2 text-sm font-semibold' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'cyan' : 'white' })} className='mx-1 px-2 text-sm font-semibold' to='/post'>Post</NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'cyan' : 'white' })} to="/profile" className='mx-1 px-2 text-sm font-semibold'>Profile</NavLink>
                    </li>
                    <li className='text-md'>
                        <ConnectButton />
                    </li>
                  
                </ul>
                <div class="md:hidden flex items-center" onClick={() => setIsOpen(!isOpen)}>
                    <button class="outline-none p-2   mobile-menu-button bg-slate-500/30 rounded-full border-1 border-gray-500 select-none focus:bg-slate-800">
                        {isOpen ? <HiOutlineX className='text-2xl text-gray-200' /> :
                            <HiMenuAlt4 className='text-2xl text-gray-200 p-0 m-0' />
                        }
                    </button>
                </div>

            </div>
            {/* Menu  Mobile*/}
            <Transition show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {
                    (ref) => (
                        <div className="md:hidden " id="mobile-menu">
                            <div
                                ref={ref}
                                className="dark:bg-transparent dark:text-white mx-4 pt-4 pb-4 space-y-1"
                            >

                                <Link
                                    to="/"
                                    activeClass="listens"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/post"
                                    activeClass="buyens"

                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Posts
                                </Link>
                                <Link
                                    to="/post"
                                    activeClass="buyens"

                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Profile
                                </Link>
                                <Link
                                    href="/contact"
                                    activeClass="contact"
                                    to="contact"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-900/30 text-black dark:text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                     <ConnectButton />
                                </Link>
                                
                            </div>
                        </div>
                    )
                }

            </Transition>
        </nav >
    )
}
