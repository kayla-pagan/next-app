

import Link from "next/link"
import LinkButton from "./components/LinkButton"

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <section className="flex flex-col justify-center items-center md:justify-start md:items-start">
        <div className="text-center md:text-left">
          <h1>We're more than an answering service</h1>
          <p>Answering Legal has everything you need to make sure your firm never misses another opportunity.</p>
        </div>
        <div className="flex items-center order-first md:order-none">
          <p>Excellent 4.84</p>
          <div>
            {/* stars */}
            <p>based on 230 reviews</p>
          </div>
        </div>
        <LinkButton href="/pricing" variant="primary" size="lg">See our pricing</LinkButton>
      </section>
    </main>
  )
}
