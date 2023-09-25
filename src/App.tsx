import Frame from '@components/Frame/Frame';
import { theme } from '@misc/theme';
import { ThemeProvider } from '@mui/material';
import React from 'react';
import { ReactQueryProvider } from './context/ReactQueryProvider';
import { BrowserRouter } from 'react-router-dom';
import Router from '@components/Router/Router';
import DataProvider from './context/DataProvider';
import { MetaMaskProvider } from '@metamask/sdk-react';

export default function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<DataProvider>
					<MetaMaskProvider debug={false} sdkOptions={{
						logging: {
							developerMode: true,
						},
						communicationServerUrl: process.env.REACT_APP_COMM_SERVER_URL,
						dappMetadata: {
							name: "Upayed.me",
							url: window.location.host,
						}
					}}>
						<ReactQueryProvider>
							<Frame>
								<Router />
							</Frame>
						</ReactQueryProvider>
					</MetaMaskProvider>
				</DataProvider>
			</ThemeProvider>
		</BrowserRouter>

	);
}
