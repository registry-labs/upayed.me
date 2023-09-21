import BalanceDetails from '@components/BalanceDetails/BalanceDetails';
import TokenOptionsList from '@components/TokenOptions/TokenOptionsList';
import ReceiverDetails from '@components/ReceiverDetails/ReceiverDetails';
import { Button, Stack } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChainSelect() {
	const navigate = useNavigate();
	return (
		<Stack justifyContent='space-between' direction='column' height='100%'>
			<Stack spacing={2} pb={2} direction='column'>
				<ReceiverDetails />
				<BalanceDetails />
				<TokenOptionsList />
			</Stack>
			<Button onClick={() => navigate('/transfer')} variant='contained'>
				Proceed
			</Button>
		</Stack>
	);
}
