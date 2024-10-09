"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignedIn } from '@clerk/nextjs'
import { useRouter } from 'next/router'
import { navLinks } from '@/app/(root)/constants'

const Sidebar = () => {
    const {pathname} = useRouter()
  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link href = "/" className = "sidebar-logo">
            <Image src ="/assets/images/logo-text.svg" alt = "logo" width ={180} height = {28} />
            </Link>
            <nav className='sidebar-nav'>
                <SignedIn>
                    <ul className='sidebar-nav_elements'>
                        {navLinks.map((link) => {
                            const isActive = link.route === pathname

                            return (
                                <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                                </li>
                              );
                           {link.label}   
                        })}
                    </ul>
                </SignedIn>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar