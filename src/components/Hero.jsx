import React from 'react'
import heroimage from '../assets/ava.png'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
		<div className='grid grid-col-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
			<div className='my-auto mx-auto w-[300px] h-auto lg:w-[400px] ml-4'>
				<img src={heroimage} alt='hero image' />
			</div>

			<div className='col-span-2 px-5 my-auto'>
				<h1 className='text-white text-4xl sm:text-5xl lg:text-[85px] font-extrabold'>
					<span className='text-[#905dff]'>I'm a</span> <br />
					<TypeAnimation
						sequence={[
							'Frontend Dev',
							1000,
							'UI/UX Designer',
							1000,
							'Graph Designer',
							1000,
						]}
						wrapper='span'
						speed={50}
						repeat={Infinity}
					/>
				</h1>

				<p className='text-white sm:text-lg my-6 lg:text-xl'>
					I am a beginner frontend developer with immense motivation and
					initiative. I have the necessary skills and competencies, as well as a
					readiness for constant self-improvement and learning new technologies.
				</p>

				<div className='my-8'>
					<a
						href='#contact'
						className='px-6 py-3 w-full rounded-xl mr-4 bg-[#905dff] text-white'
					>
						Salam
					</a>
				</div>
			</div>
		</div>
	)
}

export default Hero