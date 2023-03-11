import React from 'react'

const HeroHome = () => {
  return (
    <div className='bg-gray-900 md:min-h-80 py-12'>
        <div className="flex flex-col items-center mt-16 justify-center w-4/6 mx-auto min-h-[70vh] ">
          <h2 className="text-4xl md:text-7xl font-extrabold text-center leading-relaxed text-white">Unleash your words, <span className="text-sky-500">De</span>centralized.</h2>
          <p className="text-md text-gray-400 text-center mt-8 md:w-3/6">
            Say goodbye to centralized censorship and hello to a platform that values your privacy, security, and freedom. Start sharing your voice on your terms, today.</p>
                      <button className='text-md mt-8 text-white py-2 px-6 bg-sky-600 font-bold rounded-full shadow-xl hover:bg-sky-700'>Explore Blogs </button>
        </div>
      </div>
  )
}

export default HeroHome