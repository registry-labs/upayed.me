import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { useData } from 'src/context/DataProvider';

export default function ReceiverDetails() {
	const { name, address, logo } = useData();

	return (
		<Stack direction='row'>
			<Paper elevation={0} sx={{ width: 100, height: 100, border: theme => `1px solid ${theme.palette.divider}`, borderRadius: 1 }}>
				<img width={100} height={100} src={logo ?? 'https://via.placeholder.com/100'} style={{ borderRadius: 4 }} />
			</Paper>
			<Stack direction='column' px={4} justifyContent='space-between'>
				<Typography variant='body1' fontWeight='bold'>
					{name}
				</Typography>
				<Stack direction='column'>
					<Typography variant='body2'>Address</Typography>
					<Typography variant='body2' color='text.secondary'>
						{address}
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
}
