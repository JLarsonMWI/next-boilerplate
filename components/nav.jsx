import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
	return (
		<>
			<Head>
				<title>Boilerplate Demo</title>
				<meta name="description" content="Boilerplate Demo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="h-24 w-full bg-theme-green">
				<div className="flex h-full w-full flex-row items-center justify-between px-8">
					<div className="text-3xl font-bold uppercase text-theme-light">
						<Image src="/logo.svg" width={50} height={50} fill="white" />
					</div>
					<div className="text-base lowercase text-theme-light">
						<ul className="flex flex-row items-center justify-center">
							<li className="mx-2 cursor-pointer hover:italic hover:underline">
								<Link href="/">Home</Link>
							</li>
							<li className="mx-2 cursor-pointer hover:italic hover:underline">
								<Link href="/plans">Plans</Link>
							</li>
							<li className="mx-2 cursor-pointer hover:italic hover:underline">
								<Link href="/about">About</Link>
							</li>
							<li className="mx-2 cursor-pointer hover:italic hover:underline">
								<Link href="/contact">Contact</Link>
							</li>
							<li className="mx-2 cursor-pointer hover:italic hover:underline">
								<Link href="/dashboard">Dashboard</Link>
							</li>
						</ul>
					</div>
				</div>
			</header>
		</>
	);
}
