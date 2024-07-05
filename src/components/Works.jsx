import React from 'react'
import hoobank from '../assets/hoobank.png'
import redcur from '../assets/redcurrant.png'
import design from '../assets/graph.png'
import vision from '../assets/vision.png'
import delivery from '../assets/delivery.png'
import market from '../assets/market.png'
import dating from '../assets/dating.png'
import estate from '../assets/estate.png'
import naletu from '../assets/naletu.png'

const Works = () => {
  return (
		<div className='max-w-[1200px] mx-auto p-5' id='works'>
			<div className='pb-4'>
				<p className='text-4xl md:text-5xl mb-2 font-extrabold text-[#905dff]'>
					Работы
				</p>
				<p className='text-white'>Портфолио в виде проектов на GitHub и Behance</p>
			</div>
			<div className='grid sm:grid-cols-2 gap-4'>
				<div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center bg-cover relative'>
					<img src={hoobank} alt='work1' />
					<div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
						<span className='text-base md:text-xl font-bold text-white tracking-wider'>
							Responsive Modern Bank
						</span>
						<div className=''>
							<a href='https://github.com/JAJUMIESE/Modern-Bank-App-ReactJS-TailwindCSS'>
								<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
									GitHub
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center bg-cover relative'>
					<img src={redcur} alt='work2' />
					<div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
						<span className='text-base md:text-xl font-bold text-white tracking-wider'>
							Parallax Landing
						</span>
						<div className=''>
							<a href='https://github.com/JAJUMIESE/Modern-Bank-App-ReactJS-TailwindCSS'>
								<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
									GitHub
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center bg-cover relative'>
					<img src={naletu} alt='work2' />
					<div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
						<span className='text-base md:text-xl font-bold text-white tracking-wider'>
							Naletu food delivery
						</span>
						<div className=''>
							<a href='https://github.com/JAJUMIESE/naletu-food-delivery'>
								<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
									GitHub
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center bg-cover relative'>
					<img src={vision} alt='work3' />
					<div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
						<span className='text-base md:text-xl font-bold text-white tracking-wider'>
							Vision Creo
						</span>
						<div className=''>
							<a href='https://www.behance.net/gallery/198161795/VISION-CREO'>
								<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
									Behance
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center bg-cover relative'>
					<img src={design} alt='work4' />
					<div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
						<span className='text-base md:text-xl font-bold text-white tracking-wider'>
							Graph & UI/UX Design
						</span>
						<div className=''>
							<a href='https://www.behance.net/gallery/185122745/Portfolio-Graphic-Designer'>
								<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
									Behance
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center bg-cover relative'>
					<img src={market} alt='work5' />
					<div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
						<span className='text-base md:text-xl font-bold text-white tracking-wider'>
							Online shopping app UI/UX design
						</span>
						<div className=''>
							<a href='https://www.behance.net/gallery/199133103/Online-shopping-app-UIUX-design'>
								<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
									Behance
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center bg-cover relative'>
					<img src={delivery} alt='work6' />
					<div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
						<span className='text-base md:text-xl font-bold text-white tracking-wider'>
							Delivery food app UI/UX design
						</span>
						<div className=''>
							<a href='https://www.behance.net/gallery/199182087/Delivery-food-app-UIUX-design'>
								<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
									Behance
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center bg-cover relative'>
					<img src={dating} alt='work7' />
					<div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
						<span className='text-base md:text-xl font-bold text-white tracking-wider'>
							Dating app UI/UX design
						</span>
						<div className=''>
							<a href='https://www.behance.net/gallery/199182087/Delivery-food-app-UIUX-design'>
								<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
									Behance
								</button>
							</a>
						</div>
					</div>
				</div>
				<div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center bg-cover relative'>
					<img src={estate} alt='work8' />
					<div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
						<span className='text-base md:text-xl font-bold text-white tracking-wider'>
							Real Estate app UI/UX design
						</span>
						<div className=''>
							<a href='https://www.behance.net/gallery/199182087/Delivery-food-app-UIUX-design'>
								<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
									Behance
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Works