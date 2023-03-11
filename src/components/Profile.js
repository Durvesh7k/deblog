import React, { useState } from 'react'
import contractAddress from '../contractsData/blog-address.json';
import abi from '../contractsData/blog.json';
import { ethers } from 'ethers';
import { useStateContext } from '../context';

const Profile = () => {

    const [blogsArray, setBlogsArray] = useState([]);
    const [name, setName] = useState("");
    const [imageURI, setImageURI] = useState("");
    const {address} = useStateContext();


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
        e.preventDefault();
        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const blogContract = new ethers.Contract(
                    contractAddress.address,
                    abi.abi,
                    signer
                )

                const newProfiletx = blogContract.setAccountName(
                    `${name}`,
                    `${imageURI}`
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
                const profileImage = await blogContract.getProfileImage(address);
                setName(profileName);
                setImageURI(profileImage);

            } else {
                console.log("eth object not found");
            }
        } catch (e) {
            console.log(e)
        }

    }






    return (
        <div className="conatiner mx-auto bg-gray-800 min-h-screen">
      <div className="flex">

        <div className="w-2/6">
          <div className="px-8">
          </div>
        </div>

        <div className="w-4/6">
          <div className="px-8">
          </div>
        </div>


      </div>
    </div>
    )
}

export default Profile