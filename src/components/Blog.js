import React from 'react'
import { useLocation } from 'react-router-dom';

const Blog = () => {
    const location = useLocation();
    const data = location.state?.data;
    return (
        <div className="conatiner bg-gray-900 min-h-[70vh] mx-auto">
            <div className="flex pt-20 items-center justify-center mx-20">
                <div className="w-3/6">
                    <img
                        src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="tailwind logo"
                        className="rounded-xl"
                    />
                </div>
                <div className="w-3/6">
                    <h2 className="text-xl text-white font-bold">{data.title}</h2>
                    <p className='text-md text-gray-200 text-justify'>{data.description}</p>
                </div>

            </div>

        </div>
    )
}

export default Blog