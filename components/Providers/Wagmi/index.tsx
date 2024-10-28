"use client"
import config from '@/libs/wagmiconfig'
import React, { PropsWithChildren } from 'react'
import { WagmiProvider } from 'wagmi'

const Wagmi = ({ children }: PropsWithChildren) => {
  return (
    <WagmiProvider config={config}>{children}</WagmiProvider>
  )
}

export default Wagmi