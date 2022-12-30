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
        <p className='pl-3 pt-2 pb-3 sm:w-10/12'>Web3sire is a portfolio project that showcases the use of Solidity to make a crowdfunding contract, as well as building a user interface that allows others to utilize the application. This application is only intended for use with Goerli testnet tokens and not actual funds.</p>
        <br />
        <a href='https://github.com/bchaindeveloper/web3sire' target="_blank">
        <button className='pl-3 pt-2 pb-3 sm:w-10/12 text-center border'>BChainDev Production</button>
        </a>
    </div>
  )
}

export default About