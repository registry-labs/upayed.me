import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { useData } from 'src/context/DataProvider';
import { useQueryParams } from 'src/hooks/useQueryParams';

export default function BalanceDetails() {
	const { currencySymbol, amount } = useData();

	return (
		<Stack direction='column'>
			<Divider sx={{ my: 2 }} />
			<Stack direction='row' justifyContent='space-between'>
				<Typography variant='body2'>Total balance:</Typography>
				<Typography variant='h3' fontWeight='bold'>
					{currencySymbol}
					{amount}
				</Typography>
			</Stack>
			<Divider sx={{ my: 2 }} />
		</Stack>
	);
}
