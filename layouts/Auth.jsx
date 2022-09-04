import React from 'react';

// components

import Navbar from '../components/Navbars/AuthNavbar';
import FooterSmall from '../components/Footers/FooterSmall';

export default function Auth({ children }) {
	return (
		<>
			<Navbar transparent />
			<main>
				<section className="relative h-full min-h-screen w-full py-40">
					<div
						className="bg-blueGray-800 bg-full absolute top-0 h-full w-full bg-no-repeat"
						style={{
							backgroundImage: "url('/img/register_bg_2.png')",
						}}
					/>
					{children}
					<FooterSmall absolute />
				</section>
			</main>
		</>
	);
}
