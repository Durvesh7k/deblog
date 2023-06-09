import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context';
import Loading from './Loading';

import contractAddress from '../contractsData/blog-address.json';
import abi from '../contractsData/blog.json';
import { ethers } from 'ethers';
import HeroHome from './HeroHome';
import Card from './Card';



const Home = () => {

    const [postsArray, setPostsArray] = useState([]);
    const[isLoading,setisLoading] = useState(false);

    useEffect(()=>{
        getPosts();
    },[])

    const getPosts = async () => {
        try {
            if (window.ethereum) {
                setisLoading(true);
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
                setisLoading(false)
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
                {!isLoading ? (
                    postsArray.length !== 0 ? (
                        postsArray.map((blog)=>{
                            return(
                                <Card data={blog}/>
                            )
                        })
                    ):(
                        <span>No blogs</span>
                    )

                ) : (
                    <Loading text="wait for the blogs"/>
                )
            
            }
             
              </div>
          </div>
      </>
  )
}

export default Home