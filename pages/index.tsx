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
                title="Web application to manage IOT devices"
                slug="iot-application"
                excerpt="This project is an attempt to start exploring the world of IOT. This is a fullstack application. I will have a device streaming data to a server. This data will be then stored and sent to the frontend part of the application for visualization. The device could be a RaspberyPi, which streams data collected by multiple sensors (temperature, humidity, etc"
                imgSrc=''
                href=''
                frontmatter=''
              />
            <ProjectCard
                title="World news aggregator application"
                slug="news-aggregator"
                excerpt="This single page application (SPA), pulls in RSS feeds from multiple sources and aggregates them based on date. This application does not require a backend. From the frontend the user can make API calls to fetch the selected news feeds"
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
