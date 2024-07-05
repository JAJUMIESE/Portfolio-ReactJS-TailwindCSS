import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import ts from '../assets/ts.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import nextjs from '../assets/nextjs.png'

const Skills = () => {
  return (
		<div className=' text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center pr-2'>

			<div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px]'>
				<img src={html} alt='html'/>
				<p className='mt-2'>HTML</p>
			</div>

			<div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px]'>
				<img src={css} alt='css'/>
				<p className='mt-2'>CSS</p>
			</div>

			<div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px]'>
				<img src={ts} alt='js' className='rounded-lg'/>
				<p className='mt-2'>TypeScript</p>
			</div>

			<div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px]'>
				<img src={nextjs} alt='js' className='rounded-full'/>
				<p className='mt-2'>NextJS</p>
			</div>

			<div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px]'>
				<img src={react} alt='react'/>
				<p className='mt-2'>React</p>
			</div>

			<div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[80px]'>
				<img src={tailwind} alt='Tailwind'/>
				<p className='mt-2'>Tailwind</p>
			</div>
		</div>
	)
}

export default Skills