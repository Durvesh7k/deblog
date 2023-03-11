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
  const data = {
    "id": 1,
    "title": "Hello World",
    "description": "Decentralized applications, or DApps, are a type of software that runs on a blockchain network. Unlike traditional applications, DApps are decentralized, meaning they are not controlled by a single entity or authority. Instead, they are built on top of blockchain technology, which allows for transparent, secure, and trustless interactions between users. DApps are being built on various blockchain platforms, including Ethereum, EOS, and TRON.These applications have the potential to disrupt industries by creating more efficient and secure systems for things like supply chain management, financial transactions, and data storage. One key advantage of DApps is that they can be completely open- source, allowing for a community of developers to collaborate and build upon each other's work. This can lead to faster innovation and more robust applications. However, there are also challenges associated with building DApps, such as the need for users to have some level of technical knowledge and the issue of scalability on some blockchain networks.Overall, DApps are an exciting development in the world of blockchain technology, offering a new paradigm for building decentralized systems that can potentially transform various industries."

}

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
                <Card data={data}  />
                <Card data={data}  />
                <Card data={data}  />
                <Card data={data}  />
                <Card data={data}  />
                <Card data={data}  />
              </div>
          </div>
      </>
  )
}

export default Home