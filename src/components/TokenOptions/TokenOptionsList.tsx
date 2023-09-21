import TokenOption from '@components/TokenOptions/TokenOption';
import { Divider, RadioGroup, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import { useData } from 'src/context/DataProvider';

export default function TokenOptionsList() {
	const { paymentInformation, selectedToken: selectedChain, setSelectedToken: setSelectedChain, getTokensFromFiat } = useData();

	return (
		<Stack spacing={1.5} direction='column'>
			<Typography variant='body1' fontWeight='700'>
				Pay with
			</Typography>
			<Divider />
			<Typography variant='subtitle1'>Select the currency you would like to use to complete your transaction.</Typography>
			<Typography variant='subtitle1' color='text.secondary'>
				Supported
			</Typography>
			{paymentInformation?.addresses.map(a => (
				<TokenOption
					key={a.paymentNetwork}
					chain={a.paymentNetwork}
					amount={getTokensFromFiat(a.paymentNetwork)}
					checked={selectedChain === a.paymentNetwork}
					onClick={() => setSelectedChain(a.paymentNetwork)}
				/>
			))}
		</Stack>
	);
}
