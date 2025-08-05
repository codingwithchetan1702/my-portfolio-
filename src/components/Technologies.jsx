import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbBrandDjango } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

function Technologies() {
   return (
      <div className='pb-24'>
         <h2 className='my-12 text-center text-4xl'>Technologies</h2>
         <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="p-4">
               <TiHtml5 className="text-7xl text-red-600" />
            </div>
            <div className="p-4">
               <FaCss3Alt className="text-7xl text-blue-900" />
            </div>
            <div className="p-4">
               <FaJs className="text-7xl text-yellow-400" />
            </div>
            <div className="p-4">
               <FaReact className="text-7xl text-cyan-400" />
            </div>
            <div className="p-4">
               <SiRedux className="text-7xl text-purple-600" />
            </div>
            <div className="p-4">
               <FaNodeJs className="text-7xl text-green-500" />
            </div>
            <div className="p-4">
               <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  alt="Express"
                  className="h-14 w-auto bg-white"
               />
            </div>
            <div className="p-4">
               <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                  className="h-14 w-auto "
               />
            </div>
            <div className="p-4">
               <FaPython className="text-7xl text-sky-700" />
            </div>
            <div className="p-4">
               <TbBrandDjango className="text-7xl text-green-700" />
            </div>
            <div className="p-4">
               <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                  alt="PostgreSQL"
                  className="h-14 w-auto"
               />
            </div>
            <div className="p-4">
               <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                  className="h-14 w-auto"
               />
            </div>
            <div className="p-4">
               <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className="h-14 w-auto"
               />
            </div>
            <div className="p-4">
               <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
                  alt="Postman"
                  className="h-14 w-auto"
               />
            </div>
            <div className="p-4">
               <RiTailwindCssFill className="text-7xl text-cyan-400" />
            </div>
         </div>

      </div>
   )
}

export default Technologies