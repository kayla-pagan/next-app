

import Link from "next/link"
import LinkButton from "./components/LinkButton"
import Image from "next/image"
import AnsweringServiceIcon from "@/public/answering-service-icon.svg"
import ChatbotIcon from "@/public/chatbot-icon.svg"
import LiveTranslationIcon from "@/public/live-translation-icon.svg"
import CrmGraphic from "@/public/crm-graphic.png"
import ReceptionistImg from "@/public/receptionist-img.png"

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <section className="flex flex-col justify-center items-center md:justify-start max-w-6xl mx-auto md:items-start">
        <div className="text-center md:text-left">
          <h1 className="header-2 md:header-1">We're more than an answering service</h1>
          <p className="subtitle-2 md:subtitle-1">Answering Legal has everything you need to make sure your firm never misses another opportunity.</p>
        </div>
        <div className="flex items-center order-first md:order-none">
          <p className="header-3 md:header-2">Excellent 4.84</p>
          <div>
            {/* stars */}
            <p>based on 230 reviews</p>
          </div>
        </div>
        {/* mobile button */}
        <LinkButton href="/pricing" className="md:hidden" variant="primary" size="sm" fullWidth>See our pricing</LinkButton>
        {/* desktop button */}
        <LinkButton href="/pricing" className="hidden md:inline-flex" variant="primary" size="lg">See our pricing</LinkButton>
      </section>

      {/* services section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="header-3 md:header-2">Here’s what we can do for your law firm</h2>
        <div className="flex flex-col justify-center items-center md:flex-row">
          <div>
            <Image src={AnsweringServiceIcon} alt="Answering Service Icon" />
            <h3 className="heading-2">Legal answering service</h3>
            <p className="subtitle-2">With 24/7 legal intake, you’ll never miss a potential client’s call.</p>
          </div>
          <div>
            <Image src={ChatbotIcon} alt="Answering Service Icon" />
            <h3 className="heading-2">AI intake chatbot</h3>
            <p className="subtitle-2">Turn web leads into clients with a chatbot powered by the latest in AI technology.</p>
          </div>
          <div>
            <Image src={LiveTranslationIcon} alt="Answering Service Icon" />
            <h3 className="heading-2">Live translation services</h3>
            <p className="subtitle-2">Break through the language barrier and schedule video conferences with live interpreters.</p>
          </div>
        </div>
      </section>

      {/* data section */}
      <section className="flex flex-col justify-center items-center max-w-6xl mx-auto md:flex-row">
        <div>
          <Image src={CrmGraphic} alt="" />
        </div>
        <div>
          <h2 className="header-2">Your data’s in good hands</h2>
          <p className="body-2">Our partnership with your CRM enables a seamless flow of information.</p>
          <ul>
            <li className="body-1">
              Answering Legal’s receptionists take down exactly the information you need.
            </li>
            <li className="body-1">
              Through native API integrations with our proprietary software, we make sure it’s immediately where you need it to be.
            </li>
            <li>
              All you’ll have to do is open your CRM and follow up to secure your new client’s business.
            </li>
          </ul>
          <LinkButton href="/pricing" variant="primary" size="lg">See our pricing</LinkButton>
        </div>
      </section>

      {/* intake process section */}
      <section className="flex flex-col justify-center items-center max-w-6xl mx-auto md:flex-row">
        <div>
          <h2 className="header-2">Design your perfect legal intake process</h2>
          <p className="body-2">
            Get everything you need out of every new client call. The virtual receptionists at our legal intake call center will use 
            your unique specifications to perform a legal intake for every new client caller.
          </p>
          <ul>
            <li className="body-1">
              Answering Legal’s receptionists take down exactly the information you need.
            </li>
            <li className="body-1">
              Through native API integrations with our proprietary software, we make sure it’s immediately where you need it to be.
            </li>
            <li>
              All you’ll have to do is open your CRM and follow up to secure your new client’s business.
            </li>
          </ul>
          <LinkButton href="/pricing" variant="primary" size="lg">See our pricing</LinkButton>
        </div>
        <div>
          <Image src={ReceptionistImg} alt="" />
        </div>
      </section>

      {/* blog section */}
      <section className="flex flex-col justify-center items-center max-w-6xl mx-auto">
        <h2 className="header-2">Want to learn more? Read our articles on legal intake.</h2>
        {/* carousel */}
        <LinkButton href="/blog" variant="primary" size="lg">Go to blog</LinkButton>
      </section>

      {/* form section */}
      <section className="flex flex-col justify-center items-center max-w-6xl mx-auto md:flex-row">
        <div className="flex-1">
          <h2 className="header-2 md:header-1">24/7 coverage at a fraction of the cost of in-house receptionists.</h2>
          <p className="subtitle-1">
            Don’t believe us? Fill out the form on the right, and we’ll take you to our pricing page, where you can find 
            out just how little 24/7 legal intake will cost you.
          </p>
        </div>
        <form action="" className="flex flex-col justify-center align-center flex-1 p-8 w-full">
          <h3 className="subtitle-1">Tell us about yourself. We’ll show you all of our pricing information on the next page.</h3>

          <label htmlFor="firstName">First Name*</label>
          <input type="text" name="firstName" id="firstName" placeholder="First Name*" />

          <label htmlFor="lastName">Last Name*</label>
          <input type="text" name="lastName" id="lastName" placeholder="Last Name*" />

          <label htmlFor="companytName">Company Name*</label>
          <input type="text" name="companyName" id="companyName" placeholder="Company Name*" />

          <label htmlFor="email">Email*</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="cellPhone">Cell Phone*</label>
          <input type="tel" name="cellPhone" id="cellPhone" placeholder="Cell Phone*" />
        </form>
      </section>
    </main>
  )
}
