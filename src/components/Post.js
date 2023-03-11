import React, { useState } from 'react'
import contractAddress from '../contractsData/blog-address.json';
import abi from '../contractsData/blog.json';
import { ethers } from 'ethers';
import { useStorageUpload } from "@thirdweb-dev/react";


const Post = () => {
    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");
    const[image, setImage] = useState("");
    const[filePath, setFilePath] = useState();
    const[blogsArray, setblogsArray] = useState([]);
    const { mutateAsync: upload } = useStorageUpload();


    const uploadToIpfs = async (e) => {
        const uploadUrl = await upload({
          data: [filePath],
          options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: true },
        });
        return uploadUrl[0]
      };

    const postBlog = async(e) => {
        e.prevntDefault()
        try{
            if(window.ethereum){
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
                    `${content}`
                    `${imageURI}`
                )

                postTx.wait();
                alert("The blog is successfully uploaded to deblog");

            }else{
                console.log("eth object not found");
            }
        }catch(e){
            console.log(e)
        }
    }









  return (
    <div>Post</div>
  )
}

export default Post