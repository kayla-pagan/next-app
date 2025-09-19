import { link } from "fs"
import Link, { LinkProps } from "next/link"
import type { ReactNode } from "react"

type Variant = "primary" | "secondary" | "tertiary"
type Size = "sm" | "md" | "lg"
type Props = LinkProps & {
    children: ReactNode;
    className?: string;
    variant?: Variant;
    size?: Size;
    fullWidth?: boolean;
    external?: boolean;
}

function joinClasses(...all: Array<string | false | undefined>) {
    return all.filter(Boolean).join(" ")
}

function getVariantStyle(variant: Variant) {
    switch(variant) {
        case "primary" : 
            return "bg-blue text-white hover:bg-navy-blue"
        case "secondary" :
            return "bg-white text-blue border-[3px] border-blue hover:bg-navy-blue hover:border-navy-blue hover:text-white"
        case "tertiary" :
            return "bg-blue text-white hover:bg-white hover:text-blue"
    }
}

function getSizeStyle(size:Size) {
    switch(size) {
        case "sm" : 
            return "p-4 subtitle-2 capitalize"
        case "md" :
            return "py-[14px] px-4 subtitle-1"
        case "lg" :
            return "py-4 px-6 subtitle-1 capitalize"
    }
}

export default function LinkButton({
    children,
    className,
    variant = "primary",
    size = "sm",
    fullWidth,
    external,
    ...linkProps
}: Props) {
    const baseStyle = "inline-flex item-center justify-center rounded-[12px]"
    const cls = joinClasses(baseStyle, getVariantStyle(variant), getSizeStyle(size), fullWidth && "w-full", className)

    return (
        <Link
            {...linkProps}
            className={cls}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
        >
            {children}
        </Link>
    )
}