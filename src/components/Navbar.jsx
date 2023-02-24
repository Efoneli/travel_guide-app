import {useState, useEffect} from 'react'
import {FaBars, FaFacebook} from 'react-icons/fa';
import { BsChatSquareDots } from 'react-icons/bs';
import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram,
} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="#gallery">Gallery</a>
            </li>
            <li>
                <a href="deals">Deals</a>
            </li>           
            <li>
                <a href="conatct">Contact</a>
            </li>
        </ul>
        <div>
            <FaFacebookF className='mx-4'/>
            <FaTwitter className='mx-4'/>
            <FaGooglePlusG className='mx-4'/>
            <FaInstagram className='mx-4'/>

        </div>
    </div>
  )
}

export default Navbar