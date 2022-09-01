import type { NextPage } from 'next'
import Container from '../components/Container'

const Projects: NextPage = () => {
  return (
    <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
          </h1> 
      </div>

    </Container>
  )
}

export default Projects

