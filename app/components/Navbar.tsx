import Link from "next/link"
import Image from "next/image"
import AnsweringLegalLogo from "@/public/answering-legal-logo.png"
import SearchIcon from "@/public/search-icon.svg"
import LinkButton from "./LinkButton"

export default function Navbar() {
    return (
        <header className="w-full py-6 px-8 bg-off-white">
            <div className="flex flex-row justify-between items-center gap-2">
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
                        size="sm" 
                        className="shrink-0"
                    >
                            Try for free
                    </LinkButton>
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