"use client"
import { ChakraProvider } from "@chakra-ui/react"

import WithSubnavigation from "@/components/Navbar"
import SmallWithSocial from "@/components/Footer"
// import Router from "@/components/Router"
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './Store/store'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <div>
            <BrowserRouter>
              <Provider store={store}>
                <WithSubnavigation />
                {/* <Navbar /> */}
                {/* <Router /> */}
                {children}
                <SmallWithSocial/>
              </Provider>
            </BrowserRouter>
          </div>
        </ChakraProvider>
      </body>
    </html>
  )
}