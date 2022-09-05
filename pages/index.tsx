import type { NextPage } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import BlogCard from '../components/BlogCard'
import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'

const Home: NextPage = () => {
  return (
    <Suspense fallback={null}>
      <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-black dark:text-white">
                Welcome 
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-10">
                Feel free to browse around. This is my personal website, where I share some of 
                my side projects, built with technologies that interest me, that either I work with
                or simple want to learn and test them out. Sometimes, I also write some guides, tutorials,
                as a way to help me better structure and undersand a particular topic. 
              </p>
            </div>
          </div>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured projects
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ProjectCard
                title="Project#1"
                slug="first-project"
                excerpt="Django is a very powerful, high level Python framework for building web applications"
                imgSrc=''
                href=''
                frontmatter=''
              />
            <ProjectCard
                title="Project#2"
                slug="second-project"
                excerpt="Both Tailwind and Bootstrap are very popular CSS frameworks. In this article, we will compare them"
                imgSrc=''
                href=''
                frontmatter=''
              />
           
               <Link href="/projects">
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline mt-2 ml-2">
                View all ⟶
              </a>
            </Link>
          </div>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mt-10 mb-6 text-black dark:text-white">
            Latest blogs
          </h3>
          <div className="grid grid-cols-1 gap-6 md:flex-row">
            <BlogCard
              title="First Blog"
              slug="first-blog"
              description=""
            />
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:flex-row">
            <BlogCard
              title="Second Blog"
              slug="second-blog"
              description=""
            />
          </div>
            <Link href="/blog">
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline mt-8 ml-2">
                Read all ⟶
              </a>
            </Link>
        </div>
      </Container>
    </Suspense>
  )
}

export default Home
