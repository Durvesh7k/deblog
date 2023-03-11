import React from 'react'
import Home from './components/Home';
import Post from './components/Post';
import Profile from './components/Profile';
import { Routes, Route, NavLink } from 'react-router-dom';
import { StateContextProvider } from './context'
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Loading from './components/Loading';


const App = () => {
  return (
    <div>

      <StateContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post' element={<Post />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/loading' element={<Loading/>}/>
        </Routes>
        <Footer/>
      </StateContextProvider>
    </div>
  )
}

export default App