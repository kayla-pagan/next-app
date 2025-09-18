import Link from "next/link"
import Image from "next/image"
import AnsweringLegalLogo from "@/public/answering-legal-logo.png"
import SearchIcon from "@/public/search-icon.svg"

export default function Navbar() {
    return (
        <header className="w-full">
            <nav className="flex flex-row justify-between items-center">
                <Link href="/">
                    <Image 
                        src={AnsweringLegalLogo} 
                        alt="Answering Legal Logo" 
                        className="w-sm h-auto"
                        priority
                    />
                </Link>

                <ul className="flex flex-row items-center gap-8">
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

                <div className="flex flex-row items-center gap-4">
                    <Image 
                        src={SearchIcon} 
                        alt="Search" 
                        className="w-[42px] h-auto"
                    />
                    <Link href="/try-for-free">Try for free</Link>
                </div>
            </nav>
        </header>
    )
}