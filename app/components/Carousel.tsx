"use client";

import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState, Children, isValidElement, type ReactNode } from "react";
import { PiCaretLeft } from "react-icons/pi";
import { PiCaretRight } from "react-icons/pi";

type Props = {
    children: ReactNode;
    loop?: boolean;
    slidePadding?: string;
    breakpointBasisClassName?: string;
}

export default function Carousel({
    children,
    loop = false,
    slidePadding = "px-3.5",
    breakpointBasisClassName = "min-[1000px]:basis-1/3",
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
            <div className="flex justify-center items-center gap-16 pt-8 pb-2 w-full xl:py-0 xl:gap-0">
                <button 
                    className="embla__prev xl:absolute -left-20 top-1/2 -translate-y-1/2 flex justify-center items-center 
                                p-1 border border-2 border-gray rounded-full hover:bg-off-white disabled:opacity-50" 
                    onClick={scrollPrev}
                    disabled={!canPrev}
                >
                    <PiCaretLeft className="w-10 h-auto text-navy-blue" />
                </button>
                <button 
                    className="embla__next xl:absolute -right-20 top-1/2 -translate-y-1/2 flex justify-center items-center 
                                p-1 border border-2 border-gray rounded-full hover:bg-off-white disabled:opacity-50" 
                    onClick={scrollNext}
                    disabled={!canNext}
                >
                    <PiCaretRight className="w-10 h-auto text-navy-blue" />
                </button>
            </div>
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                <div className={`embla__container flex -mx-2.15 my-2.5`}>
                    {Children.toArray(children).map((child, i) => {
                        const key = isValidElement(child) && child.key !== null ? child.key : i

                        return (
                            <div 
                                className={`embla__slide basis-full shrink-0 ${breakpointBasisClassName} ${slidePadding}`}
                                key={key}
                            >
                                {child}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}