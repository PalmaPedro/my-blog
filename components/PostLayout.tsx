import Link from 'next/link'
import Image from 'next/image'
import { marked } from 'marked'

type Post = {
  title: string;
  slug: string;
  date: Date;
  cover_image: string;
  content: any
}

const PostLayout = ({ title, slug, date, cover_image, content}: Post) => {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">{title}</h1>
      <article className="prose lg:prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: marked(content) }}>
      </article>
    </div> 
  )
}

export default PostLayout