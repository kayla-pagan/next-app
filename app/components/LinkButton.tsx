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
            return "px-4 subtitle-2 capitalize"
        case "md" :
            return "h-[44px] px-4 gap-2.5 subtitle-1"
        case "lg" :
            return "h-[52px] px-6 gap-2.5 subtitle-1 capitalize"
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
    const baseStyle = "inline-flex items-center justify-center rounded-[12px] whitespace-nowrap leading-none"
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