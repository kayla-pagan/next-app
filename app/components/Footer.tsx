import Link from "next/link"

export default function Footer(){
    return (
        <footer className="bg-navy-blue">
            <div className="w-full flex flex-col justify-center items-center max-w-6xl mx-auto px-4 py-18 md:py-40">
                <div className="text-center">
                    <p className="header-3 text-white max-w-md pb-3">Have questions? Our team is here to help. Call 631-400-8888</p>
                    <p className="small-1 uppercase text-teal text-semibold">Monday to Friday from 9 am to 7 pm EST.</p>
                </div>
                <nav 
                    className="flex justify-center items-start flex-wrap gap-10 py-11 my-11 border-y-2 border-dark-blue text-white 
                                min-[850px]:justify-start"
                >
                    <div className="flex flex-col text-left">
                        <h2><Link href="/service" className="subtitle-1 pb-1 hover:text-teal">Our Service</Link></h2>
                        <ul className="hidden md:block">
                            <li>
                                <Link href="/frequently-asked-questions" className="text-sm leading-[2.4] hover:text-teal">FAQs</Link>
                            </li>
                            <li>
                                <Link href="/tutorials" className="text-sm leading-[2.4] hover:text-teal">Tutorials</Link>
                            </li>
                            <li>
                                <Link href="/answering-service-for-businesses" className="text-sm leading-[2.4] hover:text-teal">What Is An Answering Service?</Link>
                            </li>
                            <li>
                                <Link href="/legal-intake-receptionist-near-me" className="text-sm leading-[2.4] hover:text-teal">What Is A Legal Intake Receptionist?</Link>
                            </li>
                            <li>
                                <Link href="/virtual-receptionist-service" className="text-sm leading-[2.4] hover:text-teal">What Is A Virtual Receptionist?</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col text-left">
                        <h2><Link href="/company" className="subtitle-1 pb-1 hover:text-teal">Company</Link></h2>
                        <ul className="hidden md:block">
                            <li>
                                <Link href="/meet-the-team" className="text-sm leading-[2.4] hover:text-teal">Meet The Team</Link>
                            </li>
                            <li>
                                <Link href="/authors" className="text-sm leading-[2.4] hover:text-teal">Our Authors</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col text-left">
                        <h2><Link href="/partnerships" className="subtitle-1 pb-1 hover:text-teal">Partnerships</Link></h2>
                        <ul className="hidden md:block">
                            <li>
                                <Link href="/virtual-service-intergration" className="text-sm leading-[2.4] hover:text-teal">Integrations</Link>
                            </li>
                            <li>
                                <Link href="/affiliate-program" className="text-sm leading-[2.4] hover:text-teal">Affiliate Program</Link>
                            </li>
                            <li>
                                <Link href="/law-firm-marketing-near-me" className="text-sm leading-[2.4] hover:text-teal">Law Firm Marketing</Link>
                            </li>
                        </ul>
                    </div >
                    <div className="flex flex-col text-left">
                        <h2><Link href="/resources" className="subtitle-1 pb-1 hover:text-teal">Resources</Link></h2>
                        <ul className="hidden md:block">
                            <li>
                                <Link href="/blog" className="text-sm leading-[2.4] hover:text-teal">Blog</Link>
                            </li>
                            <li>
                                <Link href="/podcast" className="text-sm leading-[2.4] hover:text-teal">Podcast</Link>
                            </li>
                            <li>
                                <Link href="/videos" className="text-sm leading-[2.4] hover:text-teal">Videos</Link>
                            </li>
                            <li>
                                <Link href="/lets-talk-legal" className="text-sm leading-[2.4] hover:text-teal">Let's Talk Legal</Link>
                            </li>
                            <li>
                                <Link href="/marketing" className="text-sm leading-[2.4] hover:text-teal">Marketing</Link>
                            </li>
                            <li>
                                <Link href="/the-answering-legal" className="text-sm leading-[2.4] hover:text-teal">The Answering Legal</Link>
                            </li>
                            <li>
                                <Link href="/book-club" className="text-sm leading-[2.4] hover:text-teal">Book Club</Link>
                            </li>
                            <li>
                                <Link href="/top-legal-softwares" className="text-sm leading-[2.4] hover:text-teal">Top Legal Softwares</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col text-left">
                        <h2><Link href="/support" className="subtitle-1 pb-1 hover:text-teal">Support</Link></h2>
                        <ul className="hidden md:block">
                            <li>
                                <Link href="/contact" className="text-sm leading-[2.4] hover:text-teal">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/submit-ticket" className="text-sm leading-[2.4] hover:text-teal">Submit A Ticket</Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-sm leading-[2.4] hover:text-teal">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="text-sm leading-[2.4] hover:text-teal">Terms Of Service</Link>
                            </li>
                            <li>
                                <Link href="/employment" className="text-sm leading-[2.4] hover:text-teal">Employment</Link>
                            </li>
                            <li>
                                <Link href="/opportunities" className="text-sm leading-[2.4] hover:text-teal">Opportunities</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col text-left">
                        <h2><Link href="/follow-us" className="subtitle-1 pb-1 hover:text-teal">Follow Us</Link></h2>
                        <ul className="hidden md:block">
                            <li>
                                <Link href="https://x.com/" target="_blank" className="text-sm leading-[2.4] hover:text-teal">Twitter</Link>
                            </li>
                            <li>
                                <Link href="https://www.facebook.com/" target="_blank" className="text-sm leading-[2.4] hover:text-teal">Facebook</Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/" target="_blank" className="text-sm leading-[2.4] hover:text-teal">Instagram</Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/" target="_blank" className="text-sm leading-[2.4] hover:text-teal">LinkedIn</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    <p className="small-1 text-white text-center font-black">© 2024 Answering Legal · All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}