import Link from 'next/link'

type ProjectCard = {
  title: string;
  slug: string;
  excerpt: string;
  imgSrc: string;
  href: string;
  frontmatter: any;
}

const ProjectCard = ({ title, slug, excerpt }: ProjectCard) => {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
            <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">NextJS</a>
        </div> 
        <div className="mt-2">
          <a href="https://stackdiary.com/" className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{title}</a> 
            <p className="mt-2 text-gray-600 dark:text-gray-300">{excerpt}</p>
        </div> 
        <div className="flex space-x-4 items-center mt-4">
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Live demo</a> 
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>   
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard;