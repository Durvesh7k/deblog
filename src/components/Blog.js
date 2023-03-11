import React from 'react'
import { useLocation } from 'react-router-dom';

const Blog = () => {
    const location = useLocation();
    const data = location.state?.data;
    return (
        <div className="conatiner bg-gray-900 min-h-[70vh] mx-auto">
            <div className="flex pt-20 items-center justify-center mx-20">
                <div className="w-3/6 px-8 md:px-12">
                    <img
                        src={data.image}
                        alt="tailwind logo"
                        className="rounded-xl"
                    />
                </div>
                <div className="w-3/6">
                    <h2 className="text-xl text-white font-bold">{data.title}</h2>
                    <p className='text-md text-gray-200 text-justify'>{data.content}</p>
                </div>

            </div>

        </div>
    )
}

export default Blog