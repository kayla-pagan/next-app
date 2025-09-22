"use client";

import Link from "next/link"
import Form from "next/form"
import Image from "next/image"
import AnsweringLegalLogo from "@/public/answering-legal-logo.png"
import SearchIcon from "@/public/search-icon.svg"
import LinkButton from "./LinkButton"
import { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setIsActive] = useState<string | null>(null)
    const [showSearch, setShowSearch] = useState(false)

    function toggleActive(href: string) {
        setIsActive(prev => (prev === href ? null : href))
    }

    return (
        <header className="w-full pt-10 pb-8 px-9 bg-off-white">
            <div className="hidden justify-end items-center gap-8 xl:flex">
                <Link href="/support" className="body-2 font-normal text-gray underline decoration-1 underline-offset-2">Support</Link>
                <Link href="tel:6316869700" className="body-2 font-semibold text-blue">(631) 686-9700</Link>
            </div>
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
                <nav className="hidden xl:block">
                    <ul className="flex flex-row items-center gap-8">
                        <li>
                            <Link 
                                href="/products" 
                                className={`flex items-end gap-2 relative body-2 font-semibold text-navy-blue text-xl font-semibold hover:text-blue pb-2 
                                            after:absolute after:left-0 after:right-0 after:bottom-0 
                                            after:h-[4px] after:bg-teal after:rounded-lg after:origin-center 
                                            after:scale-x-0 after:transition-transform after:duration-200 
                                            data-[active=true]:after:scale-x-100`}
                                data-active={isActive === "/products"}
                                onClick={(e) => {e.preventDefault(); toggleActive("/products");}}
                                aria-expanded={isActive === "/products"}
                            >
                                    Products {isActive === "/products" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/about" 
                                className={`flex items-end gap-2 relative body-2 font-semibold text-navy-blue text-xl font-semibold hover:text-blue pb-2 
                                            after:absolute after:left-0 after:right-0 after:bottom-0 
                                            after:h-[4px] after:bg-teal after:rounded-lg after:origin-center 
                                            after:scale-x-0 after:transition-transform after:duration-200 
                                            data-[active=true]:after:scale-x-100`}
                                data-active={isActive === "/about"}
                                onClick={(e) => {e.preventDefault(); toggleActive("/about");}}
                                aria-expanded={isActive === "/about"}
                            >
                                About {isActive === "/about" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/resources" 
                                className={`flex items-end gap-2 relative body-2 font-semibold text-navy-blue text-xl font-semibold hover:text-blue pb-2 
                                            after:absolute after:left-0 after:right-0 after:bottom-0 
                                            after:h-[4px] after:bg-teal after:rounded-lg after:origin-center 
                                            after:scale-x-0 after:transition-transform after:duration-200 
                                            data-[active=true]:after:scale-x-100`}
                                data-active={isActive === "/resources"}
                                onClick={(e) => {e.preventDefault(); toggleActive("/resources");}}
                                aria-expanded={isActive === "/resources"}
                            >
                                Resources {isActive === "/resources" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/pricing" 
                                className={`flex items-end gap-2 relative body-2 font-semibold text-navy-blue text-xl font-semibold hover:text-blue pb-2 
                                            after:absolute after:left-0 after:right-0 after:bottom-0 
                                            after:h-[4px] after:bg-teal after:rounded-lg after:origin-center 
                                            after:scale-x-0 after:transition-transform after:duration-200 
                                            data-[active=true]:after:scale-x-100`}
                                data-active={isActive === "/pricing"}
                                onClick={(e) => {e.preventDefault(); toggleActive("/pricing");}}
                            >
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* User actions */}
                <div className="flex flex-col items-end gap-4">
                    <div className="flex-row items-center gap-4 hidden xl:flex">
                        <div className="flex items-center">
                            <button>
                                <Image 
                                    src={SearchIcon} 
                                    alt="Search" 
                                    className="w-[60px] h-auto shrink-0"
                                    onClick={() => setShowSearch(prevSearch => !prevSearch)}
                                />
                            </button>
                            {showSearch && 
                                <Form action="/">
                                    <label htmlFor="search-input" className="sr-only">Search</label>
                                    <input 
                                        id="search-input" 
                                        name="search"
                                        type="text" 
                                        placeholder="Search" 
                                        className="text-xl py-0.25 border-b border-gray max-w-[150px]" 
                                        autoComplete="off"
                                    />
                                </Form>
                            }
                        </div>
                        <LinkButton 
                            href="/try-for-free" 
                            variant="primary" 
                            size="md" 
                            className="shrink-0"
                            external={false}
                        >
                                Try for free
                        </LinkButton>
                    </div>
                </div>
                {/* Hamburger Icon */}
                <button 
                    className="flex flex-col justify-center items-center xl:hidden" 
                    onClick={() => setIsOpen(prevOpen => !prevOpen)}
                    aria-label="Toggle mobile navigation mene"
                    aria-expanded={isOpen}
                >
                    <span 
                        className={
                            `bg-navy-blue block transition-all duration-300 ease-out h-[7px] w-[44px] rounded-[12px] 
                            ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5 rotate-0"}`
                        }
                    ></span>
                    <span
                        className={
                            `bg-navy-blue block transition-all duration-300 ease-out h-[7px] w-[44px] rounded-[12px] my-0.5 
                            ${isOpen ? "hidden" : "block"}`
                        }
                    ></span>
                    <span
                        className={
                            `bg-navy-blue block transition-all duration-300 ease-out h-[7px] w-[44px] rounded-[12px] 
                            ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5 rotate-0"}`
                        }
                    ></span>
                </button>
            </div>
        </header>
    )
}