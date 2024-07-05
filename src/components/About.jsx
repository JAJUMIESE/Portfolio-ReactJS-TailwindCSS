import React from 'react'

const About = () => {
  return (
		<div
			className='text-white max-w-[1200px] mx-auto md:flex px-4 mt-8 md:my-16 gap-8'
			id='about'
		>
			<div className='flex flex-col md:w-1/2 gap-3 md:gap-7 mb-5'>
				<div className='flex flex-col '>
					<div className='text-[#905dff] text-4xl md:text-5xl  font-extrabold'>
						Образование
					</div>
					<div className='mt-4'>
						<h2 className='text-2xl font-medium'>Горный инженер</h2>
						<p className='text-gray-400'>СВФУ</p>
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
						<p>REDUX</p>
						<p>SACC</p>
						<p>FIGMA</p>
						<p>REACT NATIVE</p>
					</div>
				</div>
				<div className='flex flex-col md:w-1/2 mt-2 md:mt-4 '>
					<div className='text-[#905dff] text-4xl md:text-5xl font-extrabold'>
						Языки
					</div>
					<p className='mt-2 md:mt-4  font-semibold'>ENGLISH - INTERMEDIETE</p>
				</div>
			</div>
			<div className='flex flex-col'>
				<span className='text-[#905dff] text-4xl md:text-5xl font-extrabold'>
					Опыт работы
				</span>
				<div className='mt-4'>
					<h2 className='text-2xl font-medium'>Помощник инженера ПТО</h2>
					<p className='text-gray-400'>СтройТех</p>
					<p className=''>2019-2021</p>
				</div>
				<div className='mt-4'>
					<h2 className='text-2xl font-medium'>
						Руководитель отдела
					</h2>
					<p className='text-gray-400'>VISION</p>
					<p className=''>2022</p>
				</div>
				<div className='mt-4'>
					<h2 className='text-2xl font-medium'>Графический дизайнер</h2>
					<p className='text-gray-400'>MOST</p>
					<p className=''>2023</p>
				</div>
				<div className='mt-4'>
					<h2 className='text-2xl font-medium'>Frontend разработчик/руководитель проекта</h2>
					<p className='text-gray-400'>SITIM</p>
					<p className=''>2024-п.н.в</p>
				</div>
			</div>
		</div>
	)
}

export default About