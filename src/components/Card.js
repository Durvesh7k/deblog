import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
    return (
        <>
            {/* component */}
            <Link to='/blog' state={{ data: data }} className="relative mt-6 z-40 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-slate-900 bg-slate-800">
                <div className="w-full md:w-1/3 bg-gray-700 grid place-items-center">
                    <img
                        src={data.image}
                        alt="tailwind logo"
                        className="rounded-xl"
                    />
                </div>
                <div className="w-full md:w-2/3 bg-slate-800 flex flex-col space-y-2 p-3">
                    
                    <h3 className="font-black text-gray-100 md:text-3xl text-xl">
                       {data.title}
                    </h3>
                    <p className="md:text-lg text-gray-300 text-base">
                        {data.content}
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