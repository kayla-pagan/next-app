"use client";

import Link from "next/link"
import Image from "next/image"
import AnsweringLegalLogo from "@/public/answering-legal-logo.png"
import SearchIcon from "@/public/search-icon.svg"
import LinkButton from "./LinkButton"
import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full py-6 px-8 bg-off-white">
            <div className="flex flex-row justify-between items-center gap-2">
                {/* Logo */}
                <Link href="/">
                    <Image 
                        src={AnsweringLegalLogo} 
                        alt="Answering Legal Logo" 
                        className="w-2xs h-auto"
                        priority
                    />
                </Link>
                {/* Primary nav */}
                <nav className="">
                    <ul className="flex-row items-center gap-8 hidden lg:flex">
                        <li>
                            <Link href="/products" className="text-navy-blue text-xl font-semibold">Products</Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-navy-blue text-xl font-semibold">About</Link>
                        </li>
                        <li>
                            <Link href="/resources" className="text-navy-blue text-xl font-semibold">Resources</Link>
                        </li>
                        <li>
                            <Link href="/pricing" className="text-navy-blue text-xl font-semibold">Pricing</Link>
                        </li>
                    </ul>
                </nav>
                {/* User actions */}
                <div className="flex-row items-center gap-4 hidden lg:flex">
                    <button>
                        <Image 
                            src={SearchIcon} 
                            alt="Search" 
                            className="w-[42px] h-auto shrink-0"
                        />
                    </button>
                    <LinkButton 
                        href="/try-for-free" 
                        variant="primary" 
                        size="md" 
                        className="shrink-0"
                    >
                            Try for free
                    </LinkButton>
                </div>
                {/* Hamburger Icon */}
                <button 
                    className="flex flex-col justify-center items-center lg:hidden" 
                    onClick={() => setIsOpen(prevOpen => !prevOpen)}
                >
                    <span 
                        className={
                            `bg-navy-blue block transition-all duration-300 ease-out h-[7px] w-[44px] rounded-[12px] 
                            ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5 rotate-0'}`
                        }
                    ></span>
                    <span
                        className={
                            `bg-navy-blue block transition-all duration-300 ease-out h-[7px] w-[44px] rounded-[12px] my-0.5 
                            ${isOpen ? 'hidden' : 'block'}`
                        }
                    ></span>
                    <span
                        className={
                            `bg-navy-blue block transition-all duration-300 ease-out h-[7px] w-[44px] rounded-[12px] 
                            ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5 rotate-0'}`
                        }
                    ></span>
                </button>
            </div>
        </header>
    )
}