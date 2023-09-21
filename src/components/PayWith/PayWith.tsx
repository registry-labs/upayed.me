import { getTokenImage } from '@helpers/imageHelper';
import { ButtonBase, ButtonProps, Divider, Radio, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useData } from 'src/context/DataProvider';

export default function PayWith() {
	const { selectedToken: selectedChain, getTokensFromFiat } = useData();

	if (!selectedChain) return null;
	return (
		<Stack spacing={1.5} direction='column'>
			<Typography variant='body1' fontWeight='700'>
				Pay with
			</Typography>
			<Divider />
			<Stack spacing={2} pb={2} direction='row' justifyContent='left' width='100%'>
				<img width={40} style={{ borderRadius: '50%' }} height={40} src={getTokenImage(selectedChain)} alt='currency' />
				<Stack width='100%' direction='row' justifyContent='space-between' alignItems='center'>
					<Typography variant='body2' fontWeight='500'>
						{selectedChain.toUpperCase()}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{getTokensFromFiat(selectedChain)}
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
}
