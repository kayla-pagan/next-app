import Image from "next/image"
import Link from "next/link"
import { Article } from "../data/articles"

type Props = Pick<Article, "id" | "title" | "description" | "image" | "category" | "dateAdded">

export default function ArticleCard({id, title, description, image, category, dateAdded}: Props) {
    return (
        <div className="bg-white">
            <Image 
                src={image} 
                alt=""
                width={640}
                height={386}
                className="" 
            />
            <p>{category}</p>
            <div className="flex flex-col">
                <p>{dateAdded}</p>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href={`/blogs/${id}`}>[Read More&gt;]</Link>
            </div>
        </div>
    )
}