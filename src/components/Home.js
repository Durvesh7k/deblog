import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useStateContext } from '../context';
import { Navbar } from './Navbar';
import HeroHome from './HeroHome';
import Card from './Card';
import Footer from './Footer';



const Home = () => {
  const { address } = useStateContext();
  return (
    <>
      <HeroHome />
      <div className="conatiner bg-gray-900 mx-auto">
        <div className="flex flex-col items-center justify-center w-4/6 mx-auto min-h-80 ">

            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
      </div>



    </>
  )
}

export default Home