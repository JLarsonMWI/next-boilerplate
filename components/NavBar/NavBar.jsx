import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ThemeChanger from '../ThemeChanger/ThemeChanger';

export default function Nav() {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	const router = useRouter();

	const links = [
		{ name: 'Home', href: '/' },
		{ name: 'Plans', href: '/plans' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'Members', href: '/members' },
	];
	return (
		<>
			<Head>
				<title>Boilerplate Demo</title>
				<meta name="description" content="Boilerplate Demo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<nav className="w-full h-20 bg-th-nav">
				<div className="flex flex-row items-center justify-between w-screen h-full px-8">
					<div className="flex items-center justify-start w-1/2 h-full text-3xl font-bold uppercase text-theme-light">
						<Image src="/logo.svg" width={50} height={50} />
					</div>

					<div className="flex flex-col items-end justify-center w-1/2 h-full">
						<button
							data-collapse-toggle="navbar-default"
							type="button"
							className="inline-flex items-center p-1 my-4 text-sm rounded-lg text-th-text-secondary hover:ring-2 hover:ring-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
							onClick={handleClick}
						>
							<svg
								className="w-8 h-8"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
						<div className={`${active ? '' : 'hidden md:flex'} bg-th-nav`}>
							<div className="absolute left-0 z-20 items-center justify-center w-full pb-1 text-base bg-th-nav text-th-text-secondary md:relative md:flex md:w-full">
								<ul className="absolute flex-col items-center justify-end w-screen py-5 bg-th-nav md:flex md:w-full md:flex-row">
									{links.map((link) => (
										<li
											className={`${
												router.pathname === link.href
													? 'bg-th-text-secondary text-th-nav md:bg-th-nav md:font-bold md:text-th-text-secondary'
													: ''
											} ${
												active ? '' : 'hidden'
											} w-auto cursor-pointer py-1 text-center text-lg normal-case hover:border-2 hover:border-th-text-secondary focus:bg-th-background-secondary focus:text-th-nav md:mx-2 md:flex md:py-0 md:text-base md:hover:border-none md:hover:underline`}
										>
											<Link href={link.href}>{link.name}</Link>
										</li>
									))}
									<li className="md:ml-4">
										<ThemeChanger />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
