import React from 'react';
import Nav from '../components/NavBar/NavBar';

export default function Home() {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center overflow-x-hidden">
			<Nav />
			<main className="flex h-full w-full items-center justify-center bg-th-background-primary p-2 md:p-10">
				<div className="flex h-full w-full max-w-5xl flex-col items-center justify-start rounded-3xl bg-th-background-secondary p-4 text-center text-th-text-primary">
					<div className="py-2 text-2xl font-bold">
						<p>This is a title! Page: Plans</p>
					</div>
					<div className="py-2 text-lg">
						<p className="mb-2">This is some normal text</p>
						<p className="cursor-pointer text-th-text-link hover:underline">
							This is what a link looks like
						</p>
					</div>
					<div className="py-2 text-sm">
						<p>This is some subtext!</p>
					</div>
					<div className="py-2 text-xs">
						<p>This is some smaller subtext</p>
					</div>
				</div>
			</main>

			<footer className="" />
		</div>
	);
}
