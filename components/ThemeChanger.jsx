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
		<div className="flex items-center justify-center bg-th-nav p-1 text-lg font-bold text-th-text-primary md:text-sm">
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
