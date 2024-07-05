import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
	const [nav, setNav] = useState(false)

	const handleNav = () => {
		setNav(!nav)
	}

	return (
		<div className='bg-black text-white  h-[100px] max-w-[1200px] mx-auto flex justify-between items-center sticky top-0 z-[1000]'>
			<h1 className='text-3xl font-bold text-[#905dff] ml-4'>INSIDE CEO</h1>
			<ul className='hidden md:flex '>
				<li className='p-5 hover:text-gray-300'>
					<a href='#about'>О себе</a>
				</li>
				<li className='p-5 hover:text-gray-300'>
					<a href='#works'>Работы</a>
				</li>
				<li className='p-5 hover:text-gray-300'>
					<a href='#contact'>Контакты</a>
				</li>
			</ul>

			<div onClick={handleNav} className='block md:hidden mr-5 cursor-pointer'>
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>

			<div
				className={
					nav
						? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] easy-in-out duration-500'
						: 'fixed left-[-100%]'
				}
			>
				<h1 className='text-3xl text-[#905dff] m-4'>Responsive</h1>
				<ul className='p-8 text-2xl'>
					<li className='p-2'>
						<a href='#about'>О себе</a>
					</li>
					<li className='p-2'>
						<a href='#works'>Работы</a>
					</li>
					<li className='p-2'>
						<a href='#contact'>Контакты</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
