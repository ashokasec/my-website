"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import { socialMedia } from '@/links'

const Navbar = () => {
    return (
        <motion.nav className='flex justify-between x-fix py-10'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <Link href="/">
                <span className='font-spaceGrotesk text-3xl font-bold text-primary'>@ashokasec</span>
            </Link>
            <div className='block md:hidden'>
                <Link href={socialMedia.linkedin} target="_blank" className="w-fit">
                    <div className='aspect-square bg-primary flex flex-center rounded-md p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </div>
                </Link>
            </div>
            <div className='hidden md:block'>
                <ul className='flex items-center font-spaceGrotesk font-medium leading-none space-x-4 text-[#6e6e6e]'>
                    <li className='cursor-pointer hover:text-[#131313] transition-all'><Link href="#work">Work</Link></li>
                    <li onClick={() => alert("I don't have this thing!!")} className='cursor-pointer hover:text-[#131313] transition-all'>Resume</li>
                    <li>
                        <Link href={socialMedia.linkedin} target="_blank" className="w-fit">
                            <div className='aspect-square bg-primary flex flex-center rounded-md p-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </motion.nav>
    )
}

export default Navbar