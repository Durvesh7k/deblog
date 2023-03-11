import React from 'react'

const Loading = ({text}) => {
    return (
        <div className="flex flex-col h-screen bg-slate-900 items-center justify-center space-x-2">
           <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-sky-400"></div>
           <p className='pt-3 text-white'>{text}</p>
        </div>
    )
}

export default Loading