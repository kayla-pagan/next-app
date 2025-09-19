import Link from "next/link"
import Image from "next/image"
import AnsweringLegalLogo from "@/public/answering-legal-logo.png"
import SearchIcon from "@/public/search-icon.svg"

export default function Navbar() {
    return (
        <header className="w-full py-6 px-8">
            <div className="flex flex-row justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <Image 
                        src={AnsweringLegalLogo} 
                        alt="Answering Legal Logo" 
                        className="w-sm h-auto"
                        priority
                    />
                </Link>
                {/* Primary nav */}
                <nav className="">
                    <ul className="flex-row items-center gap-8 hidden lg:flex">
                        <li>
                            <Link href="/products">Products</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/resources">Resources</Link>
                        </li>
                        <li>
                            <Link href="/pricing">Pricing</Link>
                        </li>
                    </ul>
                </nav>
                {/* User actions */}
                <div className="flex-row items-center gap-4 hidden lg:flex">
                    <button>
                        <Image 
                            src={SearchIcon} 
                            alt="Search" 
                            className="w-[42px] h-auto"
                        />
                    </button>
                    <Link href="/try-for-free">Try for free</Link>
                </div>
                {/* Hamburger Icon */}
                <button className="flex flex-col justify-center items-center lg:hidden">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}