import { wallets } from '@misc/wallets';
import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';

import { useData } from 'src/context/DataProvider';
import WalletOption from './WalletOption';

export default function WalletOptionsList() {
	const { selectedToken: selectedChain, selectedWallet, setSelectedWallet } = useData();

	return (
		<Stack spacing={1.5} direction='column'>
			<Typography variant='body1'>Select Wallet</Typography>
			<Divider />
			<Typography variant='subtitle1' color='text.secondary'>
				Supported
			</Typography>
			{wallets
				.find(a => a.chain === selectedChain)
				?.wallets.map(w => (
					<WalletOption key={w.name} wallet={w} checked={selectedWallet?.name === w.name} onClick={() => setSelectedWallet(w)} />
				))}
		</Stack>
	);
}
