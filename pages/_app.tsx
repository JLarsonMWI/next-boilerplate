/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import '../styles/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	// eslint-disable-next-line react/jsx-filename-extension
	return <Component {...pageProps} />;
}

export default MyApp;
