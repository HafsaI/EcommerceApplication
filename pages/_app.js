import '../styles/globals.css'
import React from 'react'
import { Layout } from '../components'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'

// Wrapping components with Context: We want to pass data from state context to every single component
// Toaster to make small notification pop up
function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
    <Layout>
      <Toaster/>
      <Component {...pageProps} />
    </Layout>
    </ StateContext>
  )
}

export default MyApp
