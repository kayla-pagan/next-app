

import Link from "next/link"

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <section className="flex flex-col justify-center items-center md:justify-start md:items-start">
        <div>
          <h1>We're more than an answering service</h1>
          <p>Answering Legal has everything you need to make sure your firm never misses another opportunity.</p>
        </div>
        <div className="flex items-center order-1 md:order-none">
          <p>Excellent 4.84</p>
          <div>
            {/* stars */}
            <p>based on 230 reviews</p>
          </div>
        </div>
        <Link href="/pricing">See our pricing</Link>
      </section>
    </main>
  )
}
