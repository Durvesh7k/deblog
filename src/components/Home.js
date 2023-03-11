import React, { useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useStateContext } from '../context';

import contractAddress from '../contractsData/blog-address.json';
import abi from '../contractsData/blog.json';
import { ethers } from 'ethers';
import HeroHome from './HeroHome';
import Card from './Card';



const Home = () => {

    const [postsArray, setPostsArray] = useState([]);

    const { address } = useStateContext();

    const getPosts = async () => {
        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const blogContract = new ethers.Contract(
                    contractAddress.address,
                    abi.abi,
                    signer
                )

                const blogArray = await blogContract.getPosts();

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
                setPostsArray(blogsCleaned);
            } else {
                console.log("eth object not found");
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <HeroHome />
            <div className="conatiner bg-gray-900 mx-auto">
                <div className="flex flex-col items-center justify-center w-4/6 mx-auto min-h-80 ">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}

export default Home