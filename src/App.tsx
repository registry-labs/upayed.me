import Frame from '@components/Frame/Frame';
import { theme } from '@misc/theme';
import { ThemeProvider } from '@mui/material';
import React from 'react';
import { ReactQueryProvider } from './context/ReactQueryProvider';
import { BrowserRouter } from 'react-router-dom';
import Router from '@components/Router/Router';
import DataProvider from './context/DataProvider';
import { WagmiConfig } from 'wagmi'
import config from './helpers/walletConnectHelper';

export default function App() {
	return (

		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<DataProvider>
					<ReactQueryProvider>
						<WagmiConfig config={config}>
							<Frame>
								<Router />
							</Frame>
						</WagmiConfig >
					</ReactQueryProvider>
				</DataProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
}
