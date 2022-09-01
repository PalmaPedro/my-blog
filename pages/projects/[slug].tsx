import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Container from '../../components/Container'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
//import marked from 'marked'
//import Link from 'next/link'

const ProjectPage: NextPage = ({
  frontmatter: { title, date, cover_image },
  slug,
  content 
}: any) => {
  return (
    <Container>
      <div> { title } </div>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('data/projects'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string
  console.log(slug)

  const markdownWithMeta = fs.readFileSync(
    path.join('data/projects', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    }
  }
}

export default ProjectPage