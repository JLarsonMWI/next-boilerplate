import React from 'react';

// components

import AdminNavbar from '../components/Navbars/AdminNavbar';
import Sidebar from '../components/Sidebar/Sidebar';
import HeaderStats from '../components/Headers/HeaderStats';
import FooterAdmin from '../components/Footers/FooterAdmin';

export default function Admin({ children }) {
	return (
		<>
			<Sidebar />
			<div className="bg-blueGray-100 relative md:ml-64">
				<AdminNavbar />
				{/* Header */}
				<HeaderStats />
				<div className="-m-24 mx-auto w-full px-4 md:px-10">
					{children}
					<FooterAdmin />
				</div>
			</div>
		</>
	);
}
