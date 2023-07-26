import React from 'react'
import Project from './Project'
import {motion} from 'framer-motion'
import projects from '../data/projects.json';
import { FaGithubSquare as Github,} from 'react-icons/fa'


const Projects = () => {
  
  return (
    <motion.div className='mt-32 p-12 h-auto flex flex-col justify-evenly items-start md:items-center'
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}>
        <h1 className='italic font-medium text-base mb-8'>nothing much, just some side work</h1>
        <main className='w-full grid grid-cols-1 gap-10 items-start md:grid-cols-2 lg:grid-cols-4'>
            {projects ? (projects.map(project => (
                <Project 
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    site={project.site}
                    github={project.github}
                    showDownloads={project?.showDownloads ?? false}
                    downloadCounts={project?.downloadCounts ??`0` }
                    showStars={project?.showStars ?? false}
                    starCount={project?.starCount ??`0` }
                    showUsers={project?.showUsers ?? false}
                    userCount={project?.userCount ?? `0`}
                />
            ))):(<h1>Loading...</h1>)}
        </main>
        <p className='mt-12 md:mt-16'>
        <a href='https://github.com/AsishRaju' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-[#333] rounded'>
                <Github/>
            </a>
        </p>
    </motion.div>
  )
}

export default Projects
