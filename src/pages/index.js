import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

const IndexPage = () => {
	return (
		<>
			<main className='bg-gray-light sm:px-10 md:px-20 lg:px-40'>
				<section className='min-h-screen'>
					<nav className='py-10 flex justify-between'>
						<h1 className='text-xl'>dcHarvs</h1>
						<ul className='flex items-center'>
							<li>
								<a className='bg-gradient-to-r bg-purple text-gray-light px-4 py-2 border-none rounded-md ml-8' href='#'>Resume</a>
							</li>
						</ul>
					</nav>
					<div className='text-center p-10 pt-5'>
						<div className='mx-auto rounded-full w-60 h-60 relative overflow-hidden mb-10 md:h-60 md:w-60'>
							<StaticImage src='../images/my-image.jpg' alt='my-image.jpg' />
						</div>
						<h2 className="text-5xl mb-3 text-purple font-medium md:text-6xl">
							Harvey Dela Cruz
						</h2>
						<h3 className="text-2xl mb-3 md:text-3xl">
							Full-stack Web Developer.
						</h3>
						<p className="text-md leading-8 text-gray-dark max-w-xl mx-auto md:text-lg">
							Three years experience in building modules that aid businesses with their day-to-day transactions.
						</p>
					</div>
				</section>
			</main>
			<main className='bg-gray-light sm:px-10 md:px-20 lg:px-40'>
				<section className='min-h-screen flex flex-col'>
					<div className='py-10'>
						<h3 className='text-2xl'>Projects</h3>
						<p className='text-lg'>
							Sample projects that showcase my expertise on ERP systems.
						</p>
					</div>
					<div className='flex-1 pb-10 grid grid-cols-3 gap-4'>
						<div className='bg-purple'>
							<p className='text-sm'>Accounting System</p>
						</div>
						<div className='bg-purple'>
							<p className='text-sm'>Loan Management System</p>
						</div>
						<div className='bg-purple'>
							<p className='text-sm'>Timelogs System</p>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export const Head = () => <title>Harvey Dela Cruz | Portfolio</title>

export default IndexPage