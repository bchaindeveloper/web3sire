import React, { useContrext, createContext, useContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract('0x7A7f02aA996F68c3531AA25d0f98C19BAF09E57A');
    const { mutateAsync: createCampaign } =
    useContractWrite(contract, 'createCampaign');

    const address = useAddress();
    const connect = useMetamask();
    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign([
                address, // owner
                form.title, // title
                form.description, // description
                form.target,
                new Date(form.deadline).getTime(), // deadline
                from.image
            ])

            console.log("contract call success", data)
        } catch (error) {
            console.log("contract call failure", error)
        }
    }
    return (
        <StateContext.Provider
        value={{ 
          address,
          contract,
          createCampaign: publishCampaign,
        }}
      >
        {children}
      </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);