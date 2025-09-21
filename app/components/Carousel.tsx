"use client";

import useEmblaCarousel from "embla-carousel-react"

export default function Carousel() {
    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="embla w-full" ref={emblaRef}>
            <div className="embla__container flex">
                <div className="embla__slide basis-1/3">Slide 1</div>
                <div className="embla__slide basis-1/3">Slide 2</div>
                <div className="embla__slide basis-1/3">Sldie 3</div>
            </div>
        </div>
    )
}