

import Link from "next/link"
import LinkButton from "./components/LinkButton"
import Image from "next/image"
import AnsweringServiceIcon from "@/public/answering-service-icon.svg"
import ChatbotIcon from "@/public/chatbot-icon.svg"
import LiveTranslationIcon from "@/public/live-translation-icon.svg"
import CrmGraphic from "@/public/crm-graphic.png"
import ReceptionistImg from "@/public/receptionist-img.png"
import LandingHeroMobbile from "@/public/landing-hero-mobile.jpg"
import { IoMdStar } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Home() {
  return (
    <main>
      {/* hero section mobile */}
      <section className="flex flex-col text-white md:hidden">
        <div className="flex-none ">
          <Image src={LandingHeroMobbile} alt="Answering Legal Receptionist" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2 px-4 py-8 justify-center items-center bg-navy-blue">
          <div className="flex justify-center items-center flex-wrap gap-6">
            <p className="header-3">Excellent 4.84</p>
            <div>
              <div className="flex justify-center items-center">
                <IoMdStar className="text-yellow size-[32px]" />
                <IoMdStar className="text-yellow size-[32px]" />
                <IoMdStar className="text-yellow size-[32px]" />
                <IoMdStar className="text-yellow size-[32px]" />
                <IoMdStar className="text-yellow size-[32px]" />
              </div>
              <p className="subtitle-2 text-center">based on 230 reviews</p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="header-2 text-balance">We're more than an answering service</h1>
            <p className="subtitle-2 text-pretty py-3">Answering Legal has everything you need to make sure your firm never misses another opportunity.</p>
          </div>
          <LinkButton href="/pricing" variant="primary" size="sm" fullWidth>See our pricing</LinkButton>
        </div>
      </section>

      {/* hero section desktop */}
      <section 
        className="hidden md:flex flex-col justify-start items-start px-4 pt-14 
        bg-[url(/landing-hero.jpg)] bg-center bg-no-repeat bg-cover text-white"
      >
        <div className=" w-full max-w-6xl mx-auto pb-[307px]">
          <div className="text-left max-w-2xl">
            <h1 className="header-1 leading-[1.2]">We're more than an answering service</h1>
            <p className="subtitle-1 pt-4">Answering Legal has everything you need to make sure your firm never misses another opportunity.</p>
          </div>
          <div className="flex flex-col justify-center pt-6 pb-8">
            <p className="header-2 leading-none">Excellent 4.84</p>
            <div>
              <div className="flex justify-start items-center">
                <IoMdStar className="text-yellow size-[48px]" />
                <IoMdStar className="text-yellow size-[48px]" />
                <IoMdStar className="text-yellow size-[48px]" />
                <IoMdStar className="text-yellow size-[48px]" />
                <IoMdStar className="text-yellow size-[48px]" />
              </div>
              <p className="body-2 font-medium">based on 230 reviews</p>
            </div>
          </div>
          <LinkButton href="/pricing" className="shadow-[2px_2px_4px_rgba(0,0,0,0.25)]" variant="primary" size="lg">See our pricing</LinkButton>
        </div>
      </section>

      {/* services section */}
      <section className="py-16 px-4 md:-mt-[250px] md:relative z-10">
        <h2 className="header-3 text-dark-grey text-pretty pb-3 border-b-2 border-teal text-center max-w-7xl mx-auto md:header-2 md:text-white">
          Here’s what we can do for your law firm
        </h2>
        <div className="flex flex-col justify-between gap-8 max-w-6xl mx-auto pt-8 md:flex-row">
          <div className="bg-white p-8 basis-[31.5%] text-center rounded-2xl shadow-[2px_2px_7px_rgba(0,0,0,0.6)]">
            <Image 
              src={AnsweringServiceIcon} 
              alt="Answering Service Icon" 
              className="size-[100px] mx-auto"  
            />
            <h3 className="header-2 py-6 text-balance pb-4 border-b-2 border-teal">Legal answering service</h3>
            <p className="subtitle-2 pt-8">With 24/7 legal intake, you’ll never miss a potential client’s call.</p>
          </div>
          <div className="bg-white p-8 basis-[31.5%] text-center rounded-2xl shadow-[2px_2px_7px_rgba(0,0,0,0.6)]">
            <Image 
              src={ChatbotIcon} 
              alt="Answering Service Icon" 
              className="size-[100px] mx-auto"
            />
            <h3 className="header-2 py-6 text-balance pb-4 border-b-2 border-teal">AI intake <span className="block">chatbot</span></h3>
            <p className="subtitle-2 pt-8">Turn web leads into clients with a chatbot powered by the latest in AI technology.</p>
          </div>
          <div className="bg-white p-8 basis-[31.5%] text-center rounded-2xl shadow-[2px_2px_7px_rgba(0,0,0,0.6)]">
            <Image 
              src={LiveTranslationIcon} 
              alt="Answering Service Icon" 
              className="size-[100px] mx-auto"
            />
            <h3 className="header-2 py-6 text-balance pb-4 border-b-2 border-teal">Live translation services</h3>
            <p className="subtitle-2 pt-8">Break through the language barrier and schedule video conferences with live interpreters.</p>
          </div>
        </div>
      </section>

      {/* data section */}
      <section className="flex flex-col justify-between max-w-6xl mx-auto py-16 md:flex-row">
        <div className="basis-[48%]">
          <Image 
            src={CrmGraphic} 
            alt="" 
            className="w-xl h-[453px] min-w-sm max-w-lg"
          />
        </div>
        <div className="basis-[48%] pt-6">
          <h2 className="header-2 pb-4 border-b-2 border-teal">Your data’s in good hands</h2>
          <p className="body-2 pt-4">Our partnership with your CRM enables a seamless flow of information.</p>
          <ul className="pt-4 pb-6">
            <li className="body-1 flex items-center gap-2 pb-4">
              <IoIosCheckmarkCircle className="text-blue size-[40px] flex-none" /> 
              Answering Legal’s receptionists take down exactly the information you need.
            </li>
            <li className="body-1 flex items-center gap-2 pb-4">
              <IoIosCheckmarkCircle className="text-blue size-[40px] flex-none" />
              Through native API integrations with our proprietary software, we make sure it’s immediately where you need it to be.
            </li>
            <li className="body-1 flex items-center gap-2">
              <IoIosCheckmarkCircle className="text-blue size-[40px] flex-none" />
              All you’ll have to do is open your CRM and follow up to secure your new client’s business.
            </li>
          </ul>
          <LinkButton href="/pricing" variant="primary" size="lg">See our pricing</LinkButton>
        </div>
      </section>

      {/* intake process section */}
      <section className="flex flex-col justify-between items-center max-w-6xl mx-auto py-16 md:flex-row">
        <div className="basis-[48%]">
          <h2 className="header-2 pb-4 border-b-2 border-teal text-pretty">Design your perfect legal intake process</h2>
          <p className="body-2 pt-4 pb-6">
            Get everything you need out of every new client call. The virtual receptionists at our legal intake call center will use 
            your unique specifications to perform a legal intake for every new client caller.
          </p>
          <LinkButton href="/pricing" variant="primary" size="lg">See our pricing</LinkButton>
        </div>
        <div className="basis-[48%]">
          <Image 
            src={ReceptionistImg} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* blog section */}
      <section className="flex flex-col justify-center items-center max-w-6xl mx-auto py-16">
        <h2 className="header-2">Want to learn more? Read our articles on legal intake.</h2>
        {/* carousel */}
        <LinkButton href="/blog" variant="primary" size="lg">Go to blog</LinkButton>
      </section>

      {/* form section */}
      <section className="flex flex-col justify-center items-center max-w-6xl mx-auto py-16 md:flex-row">
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
