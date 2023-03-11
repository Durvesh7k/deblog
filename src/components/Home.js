import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useStateContext } from '../context';
import { Navbar } from './Navbar';
import HeroHome from './HeroHome';
import Card from './Card';
import Footer from './Footer';



const Home = () => {
  const { address } = useStateContext();
  const data = {
    "id": 1,
    "title": "Hello World",
    "description": "Decentralized applications, or DApps, are a type of software that runs on a blockchain network. Unlike traditional applications, DApps are decentralized, meaning they are not controlled by a single entity or authority. Instead, they are built on top of blockchain technology, which allows for transparent, secure, and trustless interactions between users. DApps are being built on various blockchain platforms, including Ethereum, EOS, and TRON.These applications have the potential to disrupt industries by creating more efficient and secure systems for things like supply chain management, financial transactions, and data storage. One key advantage of DApps is that they can be completely open- source, allowing for a community of developers to collaborate and build upon each other's work. This can lead to faster innovation and more robust applications. However, there are also challenges associated with building DApps, such as the need for users to have some level of technical knowledge and the issue of scalability on some blockchain networks.Overall, DApps are an exciting development in the world of blockchain technology, offering a new paradigm for building decentralized systems that can potentially transform various industries."

}
return (
  <>
    <HeroHome />
    <div className="conatiner bg-gray-900 mx-auto">
      <div className="flex flex-col items-center justify-center w-4/6 mx-auto min-h-80 ">

        <Card data={data} />
        <Card data={data} />
        <Card data={data} />
        <Card data={data} />
        <Card data={data} />
        <Card data={data} />
      </div>
    </div>



  </>
)
}

export default Home