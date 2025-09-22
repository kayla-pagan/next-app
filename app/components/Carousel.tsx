"use client";

import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { PiCaretLeft } from "react-icons/pi";
import { PiCaretRight } from "react-icons/pi";

type Props = {
    children: ReactNode;
    loop?: boolean;
    gapClassName?: string;
    mdBasisClassName?: string;
}

export default function Carousel({
    children,
    loop = false,
    gapClassName = "gap-6",
    mdBasisClassName = "md:basis-1/3",
}: Props) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop,
        align: "start",
        containScroll: "trimSnaps",
        slidesToScroll: "auto"
    })

    const [canPrev, setCanPrev] = useState(false)
    const [canNext, setCanNext] = useState(false)

    const onSelect = useCallback(() => {
        if(!emblaApi) {
            return
        }
        setCanPrev(emblaApi.canScrollPrev())
        setCanNext(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if(!emblaApi) {
            return
        }
        onSelect()
        emblaApi.on("select", onSelect)
        emblaApi.on("init", onSelect)
        return () => {
            emblaApi.off("select", onSelect)
            emblaApi.off("reInit", onSelect)
        }
    }, [emblaApi, onSelect])

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    return (
        <div className="embla w-full relative">
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                    <div className="embla__slide basis-full shrink-0 md:basis-1/3">Slide 1</div>
                    <div className="embla__slide basis-full shrink-0 md:basis-1/3">Slide 2</div>
                    <div className="embla__slide basis-full shrink-0 md:basis-1/3">Sldie 3</div>
                    <div className="embla__slide basis-full shrink-0 md:basis-1/3">Slide 1</div>
                    <div className="embla__slide basis-full shrink-0 md:basis-1/3">Slide 2</div>
                    <div className="embla__slide basis-full shrink-0 md:basis-1/3">Sldie 3</div>
                </div>
                <button 
                    className="embla__prev absolute -left-20 top-1/2 -translate-y-1/2 flex justify-center items-center 
                                p-1 border border-2 border-gray rounded-full disabled:opacity-50" 
                    onClick={scrollPrev}
                    disabled={!canPrev}
                >
                    <PiCaretLeft className="w-10 h-auto text-navy-blue" />
                </button>
                <button 
                    className="embla__next absolute -right-20 top-1/2 -translate-y-1/2 flex justify-center items-center 
                                p-1 border border-2 border-gray rounded-full disabled:opacity-50" 
                    onClick={scrollNext}
                    disabled={!canNext}
                >
                    <PiCaretRight className="w-10 h-auto text-navy-blue" />
                </button>
            </div>
        </div>
    )
}