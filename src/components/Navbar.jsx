import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 item-center'>
            <a href='/' aria-label='Home'>
               Chetan
            </a>
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/prajapati-chetan/" target='_blank'rel='noopener noreferrer'
             aria-label='LinkedIn'>
                <FaLinkedin/>
            </a> 
            <a href="https://github.com/codingwithchetan1702/" target='_blank'rel='noopener noreferrer'
             aria-label='Github'>
                <FaGithub />
            </a>
            <a href="" target='_blank'rel='noopener noreferrer'
             aria-label='Twitter'>
                <FaTwitter />
            </a>
        </div>

    </nav>
  )
}

export default Navbar