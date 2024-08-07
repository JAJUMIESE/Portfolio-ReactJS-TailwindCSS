import React from 'react'

const Contact = () => {
  return (
		<div className='max-w-[1200px] mx-auto sm:py-20 p-5' id='contact'>
			<div className='text-center'>
				<h2 className='text-4xl md:text-5xl leading-tight font-extrabold text-[#905dff]'>
					Связаться со мной
				</h2>
			</div>

			<div className='max-w-[800px] mx-auto'>
				<div className='mt-6 bg-[#161616] rounded-xl'>
					<div className='p-10'>
						<form action='https://getform.io/f/lbjkpyra' method='POST'>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
								<div>
									<div className='mt-2.5'>
										<input
											type='text'
											name='name'
											placeholder='Введите имя'
											className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'
										/>
									</div>
								</div>

								<div>
									<div className='mt-2.5'>
										<input
											type='text'
											name='email'
											placeholder='Введите почту'
											className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-[#905dff]'
										/>
									</div>
								</div>

								<div className='sm:col-span-2'>
									<div className='mt-2.5'>
										<textarea
											type='text'
											placeholder='Сообщение'
											name='message'
											className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-[#905dff]'
											rows='4'
										></textarea>
									</div>
								</div>

								<div className='sm:col-span-2'>
									<button
										type='submit'
										className='text-xl w-full p-4 mt-2 font-semibold text-white bg-[#905dff] rounded-md'
									>
										Отправить
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact