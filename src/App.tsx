import Frame from '@components/Frame/Frame';
import { theme } from '@misc/theme';
import { ThemeProvider } from '@mui/material';
import React from 'react';
import { ReactQueryProvider } from './context/ReactQueryProvider';
import { BrowserRouter } from 'react-router-dom';
import Router from '@components/Router/Router';
import DataProvider from './context/DataProvider';

export default function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<DataProvider>
					<ReactQueryProvider>
						<Frame>
							<Router />
						</Frame>
					</ReactQueryProvider>
				</DataProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
}
