import React ,{useState} from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useStateContext } from '../context';
import contractAddress from '../contractsData/blog-address.json';
import abi from '../contractsData/blog.json';
import { ethers } from 'ethers';



const Home = () => {

    const[postsArray, setPostsArray] = useState([]);

    const {address} =useStateContext();

    const getPosts = async() => {
        try{
            if(window.ethereum){
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const blogContract = new ethers.Contract(
                    contractAddress.address,
                    abi.abi,
                    signer
                )

                const blogArray = await blogContract.getPosts();
                
                let blogsCleaned = []
                blogArray.forEach((blog)=>(
                    blogsCleaned.push({
                        id: blog.id,
                        title: blog.title,
                        content: blog.content,
                        image : blog.imageURI,
                        timestamp: new Date(blog.timestamp * 1000).toString(),
                        owner: blog.owner
                    })
                ))
                setPostsArray(blogsCleaned);
            }else{
                console.log("eth object not found");
            }
        }catch(e){
            console.log(e)
        }
    }

  






  return (
    <div className='bg-black h-screen text-white'>
        <ConnectButton/>
        <h1 className='text-lg font-bold'>Home</h1>
        {address != null ? (
            <span>Your are connected to: {address}</span>
        ) : (
            <span>Not connected</span>
        )
    }
      
    </div>
  )
}

export default Home