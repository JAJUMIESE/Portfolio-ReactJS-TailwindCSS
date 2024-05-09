import React from 'react'

const About = () => {
  return (
		<div
			className='text-white max-w-[1200px] mx-auto md:flex px-4 my-12 md:my-20 gap-8'
			id='about'
		>
			<div className='flex flex-col md:w-1/2 gap-4 mb-4'>
				<div className='flex flex-col '>
					<div className='text-[#905dff] text-4xl md:text-5xl  font-extrabold'>
						Education
					</div>
					<div className='mt-4'>
						<h2 className='text-2xl font-medium'>Mining Engineer</h2>
						<p className='text-gray-400'>NEFU</p>
						<p className=''>2016-2022</p>
					</div>
				</div>
				<div className='flex flex-col md:w-1/2 mt-4 '>
					<div className='text-[#905dff] text-4xl md:text-5xl font-extrabold'>
						Skills
					</div>
					<div className='grid grid-cols-3 text-nowrap font-semibold mt-2 md:mt-4 '>
						<p>GITHUB</p>
						<p>DOCKER</p>
						<p>REACT ROUTER</p>
						<p>SACC</p>
						<p>FIGMA</p>
						<p>PHOTOSHOP</p>
					</div>
				</div>
				<div className='flex flex-col md:w-1/2 mt-2 md:mt-4 '>
					<div className='text-[#905dff] text-4xl md:text-5xl font-extrabold'>
						Language
					</div>
					<p className='mt-2 md:mt-4  font-semibold'>ENGLISH - INTERMEDIETE</p>
				</div>
			</div>
			<div className='flex flex-col'>
				<span className='text-[#905dff] text-4xl md:text-5xl font-extrabold'>
					Experience
				</span>
				<div className='mt-4'>
					<h2 className='text-2xl font-medium'>Assistant Engineer</h2>
					<p className='text-gray-400'>StroyTech</p>
					<p className=''>2019-2021</p>
				</div>
				<div className='mt-4'>
					<h2 className='text-2xl font-medium'>Graphic Designer</h2>
					<p className='text-gray-400'>VISION</p>
					<p className=''>2022</p>
				</div>
				<div className='mt-4'>
					<h2 className='text-2xl font-medium'>Graphic Designer</h2>
					<p className='text-gray-400'>MOST</p>
					<p className=''>2023</p>
				</div>
			</div>
		</div>
	)
}

export default About