"use client";

import Form from "next/form"
import { useState } from "react"
import LinkButton from "./components/LinkButton"
import ArticleCard from "./components/ArticleCard"
import Image from "next/image"
import AnsweringServiceIcon from "@/public/answering-service-icon.svg"
import ChatbotIcon from "@/public/chatbot-icon.svg"
import LiveTranslationIcon from "@/public/live-translation-icon.svg"
import CrmGraphic from "@/public/crm-graphic.png"
import ReceptionistImg from "@/public/receptionist-img.png"
import LandingHeroMobbile from "@/public/landing-hero-mobile.jpg"
import { IoMdStar } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Carousel from "./components/Carousel"
import { Article, articles } from "@/app/data/articles"
import { delay, validateForm, ValidationRules } from "./lib/api"

export default function Home() {
  const [status, setStatus] = useState<"idle" | "saving" | "done">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const articleElements = articles.map((article: Article) => (
    <ArticleCard 
      key={article.id} 
      article={article}
      
    />
  ))

  const validationRules: ValidationRules = {
    firstName: {
      required: true,
      pattern: /^[a-zA-Z]{2,30}$/,
      label: "First Name",
      message: "First name must be 2-30 letters"
    },
    lastName: {
      required: true,
      pattern: /^[a-zA-Z]{2,30}$/,
      label: "Last Name",
      message: "First name must be 2-30 letters"
    },
    companyName: {
      required: true,
      pattern: /^[a-zA-Z\s]{2,50}$/,
      label: "Company Name",
      message: "First name must be 2-50 letters"
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      label: "Email",
      message: "Please enter a valid email address"
    },
    cellPhone: {
      required: true,
      pattern: /^\+?[\d\s\-\(\)]{10,15}$/,
      label: "Cell Phone",
      message: "Please enter a valid phone number"
    }
  }

  const invalidLabels = Object.keys(errors).map(field => validationRules[field]?.label ?? field).join(", ")

  async function handleSubmit(formData: FormData) {
    setStatus("saving")
    setErrors({})

    const { errors: fieldErrors, isValid } = await validateForm(formData, validationRules)

    if(!isValid) {
      setStatus("idle")
      setErrors(fieldErrors)
      return
    }

    await delay(600)
    setStatus("done")
  }

  return (
    <main>
      {/* hero section mobile */}
      <section className="flex flex-col text-white md:hidden">
        <div className="relative h-[350px] w-full">
          <Image 
            src={LandingHeroMobbile} 
            alt="Answering Legal - Receptionist wearing a headset"
            width={856}
            height={706}
            priority
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
        <div className="flex flex-col gap-2 px-4 py-8 justify-center items-center bg-navy-blue">
          <div className="flex justify-center items-center flex-wrap gap-6">
            <p className="header-3">Excellent 4.84</p>
            <div>
              <div className="flex justify-center items-center">
                <IoMdStar className="text-yellow size-[32px]" aria-hidden="true" focusable="false" />
                <IoMdStar className="text-yellow size-[32px]" aria-hidden="true" focusable="false" />
                <IoMdStar className="text-yellow size-[32px]" aria-hidden="true" focusable="false" />
                <IoMdStar className="text-yellow size-[32px]" aria-hidden="true" focusable="false" />
                <IoMdStar className="text-yellow size-[32px]" aria-hidden="true" focusable="false" />
              </div>
              <p className="subtitle-2 text-center">based on 230 reviews</p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="header-2 text-balance">We&apos;re more than an answering service</h1>
            <p className="subtitle-2 text-pretty py-3">Answering Legal has everything you need to make sure your firm never misses another opportunity.</p>
          </div>
          <LinkButton href="/pricing" variant="primary" size="sm" fullWidth external={false}>See our pricing</LinkButton>
        </div>
      </section>

      {/* hero section desktop */}
      <section 
        className="hidden md:flex flex-col justify-start items-start px-4 pt-14 
        bg-[url(/landing-hero.jpg)] bg-center bg-no-repeat bg-cover text-white"
      >
        <div className=" w-full max-w-6xl mx-auto pb-[307px]">
          <div className="text-left max-w-2xl">
            <h1 className="header-1 leading-[1.2]">We&apos;re more than an answering service</h1>
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
          <LinkButton 
            href="/pricing" 
            className="shadow-[2px_2px_4px_rgba(0,0,0,0.25)]" 
            variant="primary" 
            size="lg"
            external={false}
            >
              See our pricing
            </LinkButton>
        </div>
      </section>

      {/* services section */}
      <section className="py-12 px-4 md:py-16 md:-mt-[250px] md:relative z-10">
        <h2 className="header-3 text-dark-grey text-pretty pb-3 border-b-2 border-teal text-center max-w-7xl mx-auto md:header-2 md:text-white">
          Here’s what we can do for your law firm
        </h2>
        <div className="flex flex-col justify-between gap-8 max-w-6xl mx-auto pt-8 md:flex-row md:gap-0">
          <div className="bg-white p-8 basis-[31.5%] text-center rounded-2xl shadow-[2px_2px_7px_rgba(0,0,0,0.6)]">
            <Image 
              src={AnsweringServiceIcon} 
              alt=""  
              className="size-[100px] mx-auto"  
            />
            <h3 className="header-2 py-6 text-balance pb-4 border-b-2 border-teal">Legal answering service</h3>
            <p className="subtitle-2 pt-8">With 24/7 legal intake, you’ll never miss a potential client’s call.</p>
          </div>
          <div className="bg-white p-8 basis-[31.5%] text-center rounded-2xl shadow-[2px_2px_7px_rgba(0,0,0,0.6)]">
            <Image 
              src={ChatbotIcon} 
              alt="" 
              className="size-[100px] mx-auto"
            />
            <h3 className="header-2 py-6 text-balance pb-4 border-b-2 border-teal">AI intake <span className="block">chatbot</span></h3>
            <p className="subtitle-2 pt-8">Turn web leads into clients with a chatbot powered by the latest in AI technology.</p>
          </div>
          <div className="bg-white p-8 basis-[31.5%] text-center rounded-2xl shadow-[2px_2px_7px_rgba(0,0,0,0.6)]">
            <Image 
              src={LiveTranslationIcon} 
              alt="" 
              className="size-[100px] mx-auto"
            />
            <h3 className="header-2 py-6 text-balance pb-4 border-b-2 border-teal">Live translation services</h3>
            <p className="subtitle-2 pt-8">Break through the language barrier and schedule video conferences with live interpreters.</p>
          </div>
        </div>
      </section>

      {/* data section */}
      <section className="flex flex-col justify-between items-center max-w-6xl mx-auto px-4 py-12 md:py-16 md:flex-row md:px-0">
        <div className="w-full h-[450px] basis-[50%]">
          <Image 
            src={CrmGraphic} 
            alt="A graphic showing call data being securely integrated with a CRM dashboard." 
            width={1040}
            height={900}
            className="w-full h-full object-contain px-6 pb-12 md:pb-0"
          />
        </div>
        <div className="basis-[50%] md:px-3">
          <h2 className="header-2 pb-4 border-b-2 border-teal">Your data’s in good hands</h2>
          <p className="body-2 pt-4">Our partnership with your CRM enables a seamless flow of information.</p>
          <ul className="pt-4 pb-6">
            <li className="body-1 flex items-center gap-2 pb-4">
              <IoIosCheckmarkCircle 
                aria-hidden="true" focusable="false" className="text-blue size-[40px] flex-none" /> 
              Answering Legal’s receptionists take down exactly the information you need.
            </li>
            <li className="body-1 flex items-center gap-2 pb-4">
              <IoIosCheckmarkCircle aria-hidden="true" focusable="false" className="text-blue size-[40px] flex-none" />
              Through native API integrations with our proprietary software, we make sure it’s immediately where you need it to be.
            </li>
            <li className="body-1 flex items-center gap-2">
              <IoIosCheckmarkCircle aria-hidden="true" focusable="false" className="text-blue size-[40px] flex-none" />
              All you’ll have to do is open your CRM and follow up to secure your new client’s business.
            </li>
          </ul>
          <LinkButton href="/pricing" variant="primary" size="lg" external={false}>See our pricing</LinkButton>
        </div>
      </section>

      {/* intake process section */}
      <section className="flex flex-col justify-between items-center max-w-6xl mx-auto px-4 py-12 md:py-16 md:flex-row">
        <div className="basis-[50%] md:px-3">
          <h2 className="header-2 pb-4 border-b-2 border-teal text-pretty">Design your perfect legal intake process</h2>
          <p className="body-2 pt-4 pb-6">
            Get everything you need out of every new client call. The virtual receptionists at our legal intake call center will use 
            your unique specifications to perform a legal intake for every new client caller.
          </p>
          <LinkButton href="/pricing" variant="primary" size="lg" external={false}>See our pricing</LinkButton>
        </div>
        <div className="w-full h-[450px] basis-[50%] order-first md:order-none">
          <Image 
            src={ReceptionistImg} 
            alt="A professional Answering Legal receptionist taking new client calls." 
            width={800}
            height={728}
            className="w-full h-full object-contain px-6 pb-12 md:pb-0"
          />
        </div>
      </section>

      {/* blog section */}
      <section className="flex flex-col justify-center items-center gap-6 max-w-6xl mx-auto py-12 md:py-16">
        <h2 className="header-2 text-center">Want to learn more? Read our articles on legal intake.</h2>
        <Carousel loop={false} slidePadding="px-3.5" breakpointBasisClassName="min-[850px]:basis-1/3">
          {articleElements}
        </Carousel>
        <LinkButton href="/blog" variant="primary" size="lg" external={false}>Go to blog</LinkButton>
      </section>

      {/* form section */}
      <section className="bg-navy-blue">
        <div className="w-full flex flex-col justify-center items-center max-w-6xl mx-auto px-4 py-12 md:py-16 md:flex-row">
          <div className="flex-1 text-white">
            <h2 className="header-2 md:header-1 pb-8">24/7 coverage at a fraction of the cost of in-house receptionists.</h2>
            <p className="subtitle-1">
              Don’t believe us? Fill out the form on the right, and we’ll take you to our pricing page, where you can find 
              out just how little 24/7 legal intake will cost you.
            </p>
          </div>
          <Form 
            action={handleSubmit} 
            id="home-lead-form"
            className="bg-white rounded-xl flex flex-col justify-center align-center flex-1 p-8 w-full"
            noValidate
          >
            <div role="status" aria-live="polite" className="sr-only">
              {status === "saving" && "Submitting your form..."}
              {status === "done" && "Thank you for your submission. You will now be redirected to the pricing page"}
            </div>
            <h3 className="subtitle-1 text-navy-blue">
              Tell us about yourself. We’ll show you all of our pricing information on the next page.
            </h3>

            {invalidLabels && Object.keys(errors).length > 0 && (
              <p className="subtitle-2 font-normal text-red pt-4">
                Please fill in a valid value for all required fields <br />
                Fields: <span className="font-semibold">{invalidLabels}</span>
              </p>
            )}

            {status === "done" && (
              <p className="subtitle-2 font-normal text-green-600 pt-4">
                Thank you for your submission. You will now be redirected to the pricing page.
              </p>
            )}

            <div className="flex flex-col gap-6 py-8">
              <div>
                <label htmlFor="firstName" className="subtitle-2 text-navy-blue">First Name*</label>
                <input 
                  type="text" 
                  name="firstName" 
                  id="firstName" 
                  placeholder="First Name*" 
                  className={`block w-full bg-off-white border rounded-lg px-4 py-0.5 focus:outline-none
                            ${errors.firstName ? "border-red focus:border-red" : "border-dark-gray rfocus:border-blue"}`}
                  required
                />
                {errors.firstName && (
                  <p id="err-firstName" role="alert" className="mt-1 text-sm text-red">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="subtitle-2 text-navy-blue">Last Name*</label>
                <input 
                  type="text" 
                  name="lastName" 
                  id="lastName" 
                  placeholder="Last Name*" 
                  className={`block w-full bg-off-white border rounded-lg px-4 py-0.5 focus:outline-none
                            ${errors.lastName ? "border-red focus:border-red" : "border-dark-gray rfocus:border-blue"}`} 
                  required
                />
                {errors.lastName && (
                  <p id="err-lastName" role="alert" className="mt-1 text-sm text-red">
                    {errors.lastName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="companytName" className="subtitle-2 text-navy-blue">Company Name*</label>
                <input 
                  type="text" 
                  name="companyName" 
                  id="companyName" 
                  placeholder="Company Name*" 
                  className={`block w-full bg-off-white border rounded-lg px-4 py-0.5 focus:outline-none
                            ${errors.companyName ? "border-red focus:border-red" : "border-dark-gray rfocus:border-blue"}`} 
                  required
                />
                {errors.companyName && (
                  <p id="err-companyName" role="alert" className="mt-1 text-sm text-red">
                    {errors.companyName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="subtitle-2 text-navy-blue">Email*</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Email*"
                  className={`block w-full bg-off-white border rounded-lg px-4 py-0.5 focus:outline-none
                            ${errors.email ? "border-red focus:border-red" : "border-dark-gray rfocus:border-blue"}`} 
                  required
                />
                {errors.email && (
                  <p id="err-email" role="alert" className="mt-1 text-sm text-red">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="cellPhone" className="subtitle-2 text-navy-blue">Cell Phone*</label>
                <input 
                  type="tel" 
                  name="cellPhone" 
                  id="cellPhone" 
                  placeholder="Cell Phone*" 
                  className={`block w-full bg-off-white border rounded-lg px-4 py-0.5 focus:outline-none
                            ${errors.cellPhone ? "border-red focus:border-red" : "border-dark-gray rfocus:border-blue"}`}
                />
                {errors.cellPhone && (
                  <p id="err-cellPhone" role="alert" className="mt-1 text-sm text-red">
                    {errors.cellPhone}
                  </p>
                )}
              </div>
            </div>

            <LinkButton type="submit" variant="primary" size="lg" disabled={status === "saving"}>See plans &amp; pricing</LinkButton>
          </Form>
        </div>
      </section>
    </main>
  )
}
