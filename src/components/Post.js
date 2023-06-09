import React, { useState } from 'react'
import contractAddress from '../contractsData/blog-address.json';
import abi from '../contractsData/blog.json';
import { ethers } from 'ethers';
import { useStorageUpload } from "@thirdweb-dev/react";
import Loading from './Loading';


const Post = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [filePath, setFilePath] = useState();
    const { mutateAsync: upload } = useStorageUpload();
    const [isLoading, setisLoading] = useState(false);



    const uploadToIpfs = async (e) => {
        const uploadUrl = await upload({
            data: [filePath],
            options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: true },
        });
        return uploadUrl[0]
    };

    const postBlog = async (e) => {
        try {
            e.preventDefault()
            if (window.ethereum) {
                setisLoading(true);
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const blogContract = new ethers.Contract(
                    contractAddress.address,
                    abi.abi,
                    signer
                )

                const imageURI = await uploadToIpfs();
                const postTx = await blogContract.post(
                    `${title}`,
                    `${content}`,
                    `${imageURI}`
                )

                postTx.wait();
                setisLoading(false);
                alert("The blog is successfully uploaded to deblog");

            } else {
                console.log("eth object not found");
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className="conatiner bg-gray-900 min-h-[70vh] mx-auto">
                <div className="flex flex-col pt-18 items-center justify-center md:w-4/6 mx-auto min-h-70 ">
                    <h2 className='text-xl text-bold text-center font-semibold text-gray-100 mt-28'>Add Your Post✒️</h2>
                    {!isLoading ? (
                        <form className="w-5/6" onSubmit={postBlog}>

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
                                    onChange={e => setTitle(e.target.value)}
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
                                    rows={5}
                                    onChange={e => setContent(e.target.value)}
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
                                    onChange={e => setFilePath(e.target.files[0])}
                                />
                            </div>

                            <div className="w-full p-3">
                                <button type='submit' className="py-2 px-4 mt-5 border-2 w-1/5 outline-gray-900 outline-1 border-slate-900  bg-sky-400 text-white rounded-xl font-medium ml-auto items-end hover:bg-sky-600">
                                    Post
                                </button>

                            </div>

                        </form>


                    ) : (
                        <Loading text="wait for the transaction" />
                    )

                    }

                </div>
            </div >


        </>
    )
}

export default Post
