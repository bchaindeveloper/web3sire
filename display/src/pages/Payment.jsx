import React, { useState, useEffect } from 'react'
import { useStateContext } from '../context'

const Payment = () => {
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
    <div>
        <h1 className='text-white'>Payment Page: Coming Soon...</h1>
    </div>
  )
}

export default Payment