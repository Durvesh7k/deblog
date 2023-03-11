import React from 'react'
import { useLocation } from 'react-router-dom';

const Blog = () => {
    const location = useLocation();
    const data = location.state?.data;
    return (
        <div className="conatiner bg-gray-900 min-h-[70vh] md:mx-auto">
            <div className="flex mx-8 md:flex-row flex-col pt-20 items-center justify-center md:mx-20">
                <div className="md:w-3/6 px-8 md:px-12">
                    <img
                        src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="tailwind logo"
                        className="rounded-xl"
                    />
                </div>
                <div className="md:w-3/6">
                    <h2 className="text-xl text-white font-bold mt-4 md:mt-0">{data.title}</h2>
                    <p className="text-sm cursor-pointer font-medium my-1.5 text-sky-300">
                        Author : <span>{data.authorname}</span>
                    </p>
                    <p className='text-md text-gray-200 text-justify'>{data.description}</p>
                    <p className='text-md text-gray-200 text-italic text-justify mt-2'>Date{data.time}</p>
                </div>

            </div>

        </div>
    )
}

export default Blog