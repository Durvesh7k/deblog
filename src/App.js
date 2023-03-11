import React from 'react'
import Home from './components/Home';
import Post from './components/Post';
import Profile from './components/Profile';
import { Routes, Route } from 'react-router-dom';
import { StateContextProvider } from './context'
import { ThirdwebProvider } from "@thirdweb-dev/react";



const App = () => {
  return (
    <div>
      <StateContextProvider>
        <ThirdwebProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/post' element={<Post />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </ThirdwebProvider>
      </StateContextProvider>
    </div>
  )
}

export default App