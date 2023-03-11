import React from 'react'

const Post = () => {
  return (
    <>
      <div className="conatiner bg-gray-900 min-h-[70vh] mx-auto">
        <div className="flex flex-col pt-18 items-center justify-center md:w-4/6 mx-auto min-h-70 ">
          <h2 className='text-xl text-bold text-center font-semibold text-gray-100 mt-28'>Add Your Post✒️</h2>

          <form className="w-5/6">

            {/* component */}

            <div className="w-full p-3">
              <label
                className="block  text-gray-100 text-md l mb-2"
                htmlFor="grid-password"
              >
                Title
              </label>
              <input
                className="text-gray-300 appearance-none block w-full border-2 outline-1 outline-gray-900 bg-gray-800  border-gray-600  py-3 px-4 mb-3 leading-tight rounded-xl focus:outline-none focus:bg-gray-800 focus:border-sky-500"
                id="nick"
                type="text"
              />
            </div>
            <div className="w-full p-3">
              <label
                className="block  text-gray-100 text-md l mb-2"
                htmlFor="grid-password"
              >
                Description
              </label>
              <textarea
                className="text-gray-300 appearance-none block w-full border-2 outline-1 outline-gray-900 bg-gray-800   border-gray-600  py-3 px-4 mb-3 leading-tight rounded-xl focus:outline-none focus:bg-gray-800 focus:border-sky-500"
                id="nick"
                type="text"
              ></textarea>
            </div>
            <div className="w-full p-3">
              <label
                className="block  text-gray-100 text-md l mb-2"
                htmlFor="grid-password"
              >
                Upload Image
              </label>
              <input
                className="cursor-pointer text-gray-300 appearance-none block w-full border-2 outline-1 outline-gray-900 bg-gray-800   border-gray-600  py-3 px-4 mb-3 leading-tight rounded-xl focus:outline-none focus:bg-gray-800 focus:border-sky-500"
                id="nick"
                type="file"
              />
            </div>

            <div className="w-full p-3">
              <button className="py-2 px-4 mt-5 border-2 w-1/5 outline-gray-900 outline-1 border-slate-900  bg-sky-400 text-white rounded-xl font-medium ml-auto items-end hover:bg-sky-600">
               Post
              </button>
             
        </div>

      </form>

    </div>
          </div >
      

    </>
  )
}

export default Post
