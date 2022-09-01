import type { InferGetStaticPropsType, NextPage } from 'next'
import { GetStaticProps } from 'next'
import Container from '../components/Container'

type Blog = {
  _id: string;
  title: string;
  slug: string;
  author: string;
  mainImage: string;
  categories: string[];
  publishedAt: string;
  body: string;
}

const Blog: NextPage = ({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) => {
  //blogs.map((blog: any) => console.log(blog.title))
  
  return (
    <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Blog
          </h1> 
      </div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  //const blogs: Blog[] = await client.fetch(`*[_type == "post"]`)

  return {
    props: {
      
    }
  }

}


export default Blog

