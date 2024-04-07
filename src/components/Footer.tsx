import Link from 'next/link'
import React from 'react'
import { socialMedia } from "@/links"

const Footer = () => {
    return (
        <footer className='x-fix py-14 bg-primary text-white'>
            <div className='border-0 border-b border-soul font-spaceGrotesk text-4xl font-semibold pb-8'>Thank You</div>
            <div className='flex flex-col lg:flex-row mt-8 justify-between'>
                <div className='font-spaceGrotesk text-xl'>I&apos;m open to new opportunities and would love to connect with you.</div>
                <ul className='flex space-x-4 mt-8 lg:m-0'>
                    <li>
                        <Link href={socialMedia.twitter} target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href={socialMedia.linkedin} target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href={socialMedia.instagram} target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer