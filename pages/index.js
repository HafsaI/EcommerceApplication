import React from 'react'
import {Product, } from '../components'
import HeroSection from '../components/HeroSection'
import { client } from '../lib/client'

const Home = ({products}) => {
  return (
    <>
    <HeroSection/>
    <div className="products-heading">
      <h2>Best Selling Products</h2>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    </>
    
  )
}


// fetches data from server/api/cms at request time
export const getServerSideProps = async () => {

  // queries in sanity
  // grab all products
  const query = '*[_type == "product"]'; 
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}

export default Home
