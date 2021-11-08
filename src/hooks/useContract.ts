import { useMemo } from 'react'
import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'
import { useActiveWeb3React } from './useWeb3'
import { getContract } from '../utils'

// ABI
import VESTING_ABI from '../constants/abi/DTOVesting.abi.json'

const useContract = (address?: string, abi?: any) => {
  const { library, account } = useActiveWeb3React()

  return useMemo(() => {
    if (!address || !abi) return null

    try {
      const web3 = new Web3(library)
      return getContract(address, abi, web3)
    } catch (error: any) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, abi, library, account]) // eslint-disable-line react-hooks/exhaustive-deps
}

export const useVestingContract = (address?: string): Contract | null => {
  return useContract(address, VESTING_ABI)
}
