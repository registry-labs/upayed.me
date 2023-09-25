import WalletSelect from '@modules/WalletSelect/WalletSelect';
import Result from '@modules/res/result';
import { Typography } from '@mui/material';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDevice } from 'src/hooks/useDevice';

const TokenSelect = React.lazy(() => import('@modules/TokenSelect/TokenSelect'));

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
				<Route path='/res' element={< Result />} />
			</Routes>
		</Suspense>
	);
}
