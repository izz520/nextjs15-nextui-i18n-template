"use client"
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import React, { PropsWithChildren } from 'react'

const Rainbowkit = ({ children }: PropsWithChildren) => {
  return (
    <RainbowKitProvider modalSize="compact" >{children}</RainbowKitProvider>
  )
}

export default Rainbowkit