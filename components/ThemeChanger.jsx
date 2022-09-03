import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const themes = [
	{ name: 'Violet' },
	{ name: 'Green' },
	{ name: 'Rose' },
	{ name: 'Orange' },
	{ name: 'Blue' },
];

function ThemeChanger() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div className="-mr-6 flex items-center justify-center bg-th-nav p-1 text-sm font-bold text-th-text-primary">
			<div>
				<select
					name="theme"
					id="theme-select"
					className="border border-th-text-secondary bg-th-nav  text-th-text-secondary"
					onChange={(e) => setTheme(e.currentTarget.value)}
					value={theme}
				>
					{themes.map((t) => (
						<option key={t.name} value={t.name}>
							{t.name}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default ThemeChanger;
