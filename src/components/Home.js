import React from 'react'
import { FaGithubSquare as Github, FaTwitterSquare as Twitter, FaLinkedin as Linkedin, FaDownload as Download } from 'react-icons/fa'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div 
    className="overflow-hidden App flex flex-col justify-center items-start md:items-center mt-32 md:mt-48 p-10 pt-12"
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}>
        <section 
        className='grid grid-cols-1 items-start md:grid-cols-2 md:items-center md:w-[60%]'>
            <picture>
                <img src="/images/dp.jpg" alt='my profile' className='mb-4 w-32 h-32 rounded-full object-cover md:h-48 md:w-48 md:mb-0'></img>
            </picture>

            <article>

                <h1 className='mb-2 text-xl font-bold font-sans md:text-4xl'>asish raju</h1>
                <h3 className='font-normal  md:text-xl'>
                  full stack developer
                </h3>
                <p className='italic'>(x- <a href='https://leap.club/' target='_blank.' className='underline decoration-sky-500 decoration-2 hover:decoration-sky-600'>leap.club</a>, <a href='https://www.meetshepherd.com/' target='_blank.' className='underline decoration-sky-500 decoration-2 hover:decoration-sky-600'>shepherd</a>)</p>
                <br></br>
                <button class="px-2 py-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-sm font-medium rounded-lg">
                <a href='mailto:vashish888@gmail.com'  target='_blank.'>lets work together 🤝🏼</a>
  </button>
              
            
            </article>
        </section>
        <section className='w-3/5 md:w-2/5 flex flex-row items-start justify-between md:justify-evenly mt-12 md:mt-24'>
            <a href='https://github.com/AsishRaju' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-[#333] rounded'>
                <Github/>
            </a>
            <a href='https://twitter.com/asisssh' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-[#1DA1F2] rounded'>
                <Twitter/>
            </a>
            <a href='https://www.linkedin.com/in/asishraju/' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-[#0A66C2] rounded'>
                <Linkedin className='object-cover'/>
            </a>
        </section>
    </motion.div>
  )
}

export default Home
