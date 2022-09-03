import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'

const Projects: NextPage = ({ projects }: any) => {
  //console.log(projects)

  return (
    <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
          </h1> 
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 mb-8">
            Browse through my side projects
          </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.map((project: ProjectCard, index: any) => (
                  <ProjectCard key={index}
                    title={project.frontmatter.title}
                    slug={project.slug}
                    excerpt={project.frontmatter.excerpt}
                    imgSrc={project.frontmatter.imgSrc}
                    href={project.frontmatter.href}
                    frontmatter=''
                  />
              ))}
            </div>
        </div>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('data/projects'))

  // Get slug and frontmatter from posts
  const projects = files.map(filename => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('data/projects', filename), 'utf-8')

    const { data: frontmatter } = matter(markdownWithMeta)

    return { 
      slug,
      frontmatter
    }
  })

  console.log(projects[0].slug)

  return {
    props: {
      projects: projects,
    },
  }

}

export default Projects

