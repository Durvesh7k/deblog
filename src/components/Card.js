import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
    return (
        <>
            {/* component */}
            <Link to='/blog' state={{ data: data }} className="relative mt-6 z-40 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-slate-900 bg-slate-800">
                <div className="w-full md:w-1/3 bg-gray-700 grid place-items-center">
                    <img
                        src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="tailwind logo"
                        className="rounded-xl"
                    />
                </div>
                <div className="w-full md:w-2/3 bg-slate-800 flex flex-col space-y-2 p-3">
                    
                    <h3 className="font-black text-gray-100 md:text-3xl text-xl">
                        The Majestic and Wonderful Bahamas
                    </h3>
                    <p className="md:text-lg text-gray-300 text-base">
                        The best kept secret of The Bahamas is the country’s sheer size and
                        diversity. With 16 major islands, The Bahamas is an unmatched
                        destination
                    </p>
                    <p className="text-md cursor-pointer font-medium text-sky-400">
                        Read 
                    </p>
                </div>
            </Link>
        </>


    )
}

export default Card