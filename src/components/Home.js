import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useStateContext } from '../context';



const Home = () => {
  const {address} =useStateContext();
  return (
    <div className='bg-black h-screen text-white'>
        <ConnectButton/>
        <h1 className='text-lg font-bold'>Home</h1>
        {address != null ? (
            <span>Your are connected to: {address}</span>
        ) : (
            <span>Not connected</span>
        )

    }
      
    </div>
  )
}

export default Home