/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
