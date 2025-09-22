import Image from "next/image"
import Link from "next/link"
import { Article } from "../data/articles"

type Props = Pick<Article, "id" | "title" | "description" | "image" | "category" | "dateAdded">

export default function ArticleCard({id, title, description, image, category, dateAdded}: Props) {
    const excerpt = description.length > 143 ? description.slice(0, 143) + "…" : description

    return (
        <div className="bg-white px-4 pt-4 pb-6 rounded-3xl shadow-[2px_2px_7px_rgba(0,0,0,0.25)] rounded">
            <div className="w-full h-[193px]">
                <Image 
                    src={image} 
                    alt=""
                    width={640}
                    height={386}
                    className="rounded-3xl w-full h-full object-cover object-top" 
                />
            </div>
            <p className="subtitle-2 text-blue uppercase py-4">{category}</p>
            <div className="flex flex-col">
                <div className="border-l-2 border-teal pl-4">
                    <p className="subtitle-2 text-gray">{dateAdded}</p>
                    <h3 className="subtitle-1 text-black">{title}</h3>
                </div>
                <p className="py-4">{excerpt}</p>
                <Link href={`/blogs/${id}`} className="subtitle-2 text-blue">[Read More&gt;]</Link>
            </div>
        </div>
    )
}