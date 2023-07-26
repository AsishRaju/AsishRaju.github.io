import React from 'react'
import { FaStar as Star, FaUser as User, FaDownload as Download } from 'react-icons/fa'

const Project = ({ image, title, description, site, github, showUsers, userCount, showStars, starCount, showDownloads,downloadCounts }) => {


    return (
        <div>
            <article className='border-2 shadow-md shadow-slate-800 border-sky-600 rounded-md p-4 h-92 flex flex-col justify-between'>
                <div>
                    <div className='border-2 border-gray-400 mb-4 rounded-md h-36 object-fill'>
                        <img src={image} alt='project thumbnail' className='object-cover h-full w-full'></img>
                    </div>
                    <h3 className='font-bold underline decoration-sky-500 decoration-4 mb-2 hover:decoration-sky-600'><a href={site} target='_blank.'>{title}</a></h3>
                    <p className='text-sm mb-4'>{description}</p>
                </div>
                <div className='flex gap-5 justify-between'>
                    <div className='flex gap-3 items-center'>
                    {showStars &&
                        <div className='flex gap-2 items-center'>
                            <Star color='#e3b341'/><span className='text-sm font-bold'>{starCount}</span>
                        </div>
                    }
                    {
                        showUsers &&
                        <div className='flex gap-2 items-center'>
                            <User color='grey'/><span className='text-sm font-bold'>{userCount}</span>
                        </div>
                    }
                    {
                        showDownloads &&
                        <div className='flex gap-2 items-center'>
                            <Download color='grey'/><span className='text-sm font-bold'>{downloadCounts}</span>
                        </div>
                    }
                    </div>
                    <div className='flex gap-2'>
                        <a href={github} target='_blank.' className='underline decoration-sky-500 hover:decoration-sky-600'>{'</code>'}</a>
                    </div>
                </div>

            </article>
        </div>
    )
}

export default Project