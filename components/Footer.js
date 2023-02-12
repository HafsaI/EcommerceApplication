import React from 'react'
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';


export default function Footer(){

  return (
    <footer className='footer-style'>
      <div className = 'float--left col'>
        <h3>Denim Wear For You.</h3>
        <p>Stylish Outfits for Casual and Formal Wear. </p>
        <br></br>
        <h2>December</h2>
      </div>

      <div className = 'float--mid col'>
        <h3>HELP & FAQ</h3>
        <p>Faqs</p>
        <p>Contact Us</p>
      </div>

      <div className="float--right col2">
        <a href="https://github.com/digitalocean"><AiFillInstagram size={35} /></a>
        <a href="https://www.twitter.com/DigitalOcean"><AiOutlineTwitter size={35} /></a>
      </div>
    
    </footer>


  )
}