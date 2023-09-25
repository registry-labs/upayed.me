import { Typography } from '@mui/material';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDevice } from 'src/hooks/useDevice';

const TokenSelect = React.lazy(() => import('@modules/TokenSelect/TokenSelect'));
const WalletSelect = React.lazy(() => import('@modules/WalletSelect/WalletSelect'));
const Web = React.lazy(() => import('@modules/Web/Web'));

export default function Router() {
	return (
		<Suspense
			fallback={
				<Typography variant='body1' color='primary'>
					Loading
				</Typography>
			}>
			<Routes>
				<Route path='/' element={<TokenSelect />} />
				<Route path='/transfer' element={<WalletSelect />} />
				<Route path='/web' element={<Web />} />
			</Routes>
		</Suspense>
	);
}
