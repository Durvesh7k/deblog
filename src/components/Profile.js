
import React, { useState, useEffect } from 'react'
import contractAddress from '../contractsData/blog-address.json';
import abi from '../contractsData/blog.json';
import { ethers } from 'ethers';
import { useStateContext } from '../context';
import pimg from '../assets/profile.png'
import Card from './Card';


const Profile = () => {
    const [blogsArray, setBlogsArray] = useState([]);
    const [name, setName] = useState("");
    const[newName, setNewName] = useState("");
    const { address } = useStateContext();


    useEffect(() => {
        getOwnersPost();
        console.log(blogsArray);
    }, [])


    const getOwnersPost = async () => {
        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const blogContract = new ethers.Contract(
                    contractAddress.address,
                    abi.abi,
                    signer
                )

                const blogArray = await blogContract.getOwnBlogs();

                let blogsCleaned = []
                blogArray.forEach((blog) => (
                    blogsCleaned.push({
                        id: blog.id,
                        title: blog.title,
                        content: blog.content,
                        image: blog.imageURI,
                        timestamp: new Date(blog.timestamp * 1000).toString(),
                        owner: blog.owner
                    })
                ))
                setBlogsArray(blogsCleaned);
            } else {
                console.log("eth object not found");
            }
        } catch (e) {
            console.log(e)
        }
    }

    const setnewName = async (e) => {
        try {
            e.preventDefault();
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const blogContract = new ethers.Contract(
                    contractAddress.address,
                    abi.abi,
                    signer
                )

                const newProfiletx = blogContract.setAccountName(
                    `${name}`
                )

                newProfiletx.wait();
                console.log("Successfully set the new profile and new image");

            } else {
                console.log("eth object not found");
            }
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(()=>{
        getDetails();
    })


    const getDetails = async () => {
        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const blogContract = new ethers.Contract(
                    contractAddress.address,
                    abi.abi,
                    signer
                )

                const profileName = await blogContract.getAccountName(address);
                setNewName(profileName);

            } else {
                console.log("eth object not found");
            }
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div className="conatiner bg-gray-900 min-h-[70vh] mx-auto">
            <div className="flex md:w-5/6 pt-20 items-center ">
                <div className="w-3/6 pl-16 flex items-center justify-center flex-col md:flex-row p-12">
                    <img
                        src={pimg}
                        alt="tailwind logo"
                        className=""
                    />
                </div>
                <div className="w-3/6 md:mt-12 flex flex-col justify-around">
                    <div className="flex-col">

                        <h2 className="text-xl mt-3 text-white font-normal"><span className="font-bold">Account Id : </span> {address}</h2>
                        <h2 className="text-xl mt-3 text-white font-normal"><span className="font-bold">Name : {newName}</span> s54556a4s545s44s4</h2>
                    </div>
                    <div className="mt-5">
                        <div className="w-full p-3 bg-gray-800 rounded-md">
                            <label
                                className="block  text-gray-100 text-md l mb-2"
                                htmlFor="grid-password"
                            >
                                Chnage Name
                            </label>
                            <input
                                className="text-gray-300 appearance-none block w-full border-2 outline-1 outline-gray-900 bg-gray-800  border-gray-600  py-1.5 px-4 mb-3 leading-tight rounded-xl focus:outline-none focus:bg-gray-800 focus:border-sky-500"
                                id="nick"
                                type="text"
                                onChange={e=>setName(e.target.value)}
                            />
                            <button className="py-1.5 px-4 mt-3 border-2 w-1/5 bg-sky-400 text-white rounded-xl font-medium ml-auto items-end hover:bg-sky-600">
                                Submit
                            </button>

                        </div>
                    </div>

                </div>


            </div>
            <h2 className="text-2xl font-bold text-center text-white">Your Blogs</h2>

            {blogsArray.length !== 0 ? (
                blogsArray.map((blog) => {
                    return (
                        <Card data={blog} />
                    )
                })
            ) : (
                <span className='text-lg text-white'>No blogs</span>
            )}

        </div>
    )
}

export default Profile