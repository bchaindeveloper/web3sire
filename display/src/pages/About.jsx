import React, { useState, useEffect } from 'react'
import { useStateContext } from '../context'

const About = () => {
  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div className='text-white'>
        <h1 className='font-bold'>About Web3sire :</h1>
        <br />
        <p className='pl-3 sm:w-10/12'>Web3sire is a decentralized crowdfunding platform. This platform allows you to create your own campaign and fund other campaigns that you believe in. Simply connect your MetaMask wallet to login to your account. </p>
        <br />
        <img src='./src/assets/Crowd.jpg' alt='Piggy Bank' className='sm:w-10/12'/>
        <a href="https://bchaindev.com/" alt="BChainDev" target="_blank">
        <div className='pt-6 pb-3 text-center w-10/12' href="https://bchaindev.com/">
            <h2 className='font-extrabold'>BChainDev Production</h2>
            <h3 className='font-thin'>Web3 Architect and Brick Layer</h3>
        </div>
        </a>
        <a href="https://github.com/bchaindeveloper/web3sire" alt="GitHub Repo" target="_blank">
        <div className='place-content center w-10/12 pb-6 pt-3'>
            <img src='./src/assets/icons8-github-94.png' className='object-none object-center m-auto' />
        </div>
        </a>
        <div className='text-center font-thin w-10/12'>
        <a className='' target="_blank" href="https://icons8.com/icon/BfmLaUCOh7CM/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
    </div>
  )
}

export default About