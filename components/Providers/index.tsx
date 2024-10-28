"use client"
import React, { PropsWithChildren } from 'react'
import Wagmi from './Wagmi'
import ReactQuery from './ReactQuery'
import Rainbowkit from './Rainbowkit'
import { NextUIProvider } from "@nextui-org/react";
const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Wagmi>
      <ReactQuery>
        <Rainbowkit>
          <NextUIProvider>
            {children}
          </NextUIProvider>
        </Rainbowkit>
      </ReactQuery>
    </Wagmi>
  )
}

export default Providers