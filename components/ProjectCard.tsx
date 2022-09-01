import Link from 'next/link'

type ProjectCard = {
  title: string;
  slug: string;
  description: string;
}

const ProjectCard = ({ title, slug, description }: ProjectCard) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
            <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">NextJS</a>
        </div> 
        <div className="mt-2">
          <a href="https://stackdiary.com/" className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{title}</a> 
            <p className="mt-2 text-gray-600 dark:text-gray-300">Dui urna vehicula tincidunt pretium consequat luctus mi, platea fermentum conubia tempus ac orci. Pellentesque dictum malesuada cubilia faucibus dignissim mi nascetur senectus, augue ad libero efficitur dolor duis lobortis, non etiam sociosqu.</p>
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