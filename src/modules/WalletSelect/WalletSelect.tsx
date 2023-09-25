import BalanceDetails from '@components/BalanceDetails/BalanceDetails';
import TokenOptionsList from '@components/TokenOptions/TokenOptionsList';
import PayWith from '@components/PayWith/PayWith';
import ReceiverDetails from '@components/ReceiverDetails/ReceiverDetails';
import WalletOptionsList from '@components/WalletOptions/WalletOptionsList';
import { Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { handleNfidTransaction, handlePlugTransaction } from '@helpers/transactionHelper';
import { useData } from 'src/context/DataProvider';
import { CryptoAddressDetails } from '@the-registry/tir';

export default function WalletSelect() {
	const { paymentInformation, selectedToken, getTokensFromFiat, selectedWallet, callbackUrl, memo } = useData();
	const [error, setError] = useState<string | null>(null);

	function getAddress() {
		const address = paymentInformation?.addresses.find(address => address.paymentNetwork === selectedToken);
		return (address?.addressDetails as CryptoAddressDetails).address ?? '';
	}

	async function handleTransaction() {
		try {
			setError(null);
			if (selectedToken && selectedWallet) {
				const result = await selectedWallet.handleTransaction(getAddress(), getTokensFromFiat(selectedToken));
				window.location.replace(`${callbackUrl}?blockheight=${result}&memo=${memo}`);
			}
		} catch (error) {
			setError('Transaction failed, please try again.');
			console.log(error);
		}
	}

	return (
		<Stack justifyContent='space-between' direction='column' height='100%'>
			<Stack spacing={2} pb={2} direction='column'>
				<ReceiverDetails />
				<BalanceDetails />
				<PayWith />
				<WalletOptionsList />
			</Stack>
			<Button variant='contained' onClick={handleTransaction}>
				Pay
			</Button>
			<Typography mt={1} textAlign='center' variant='caption' color='error'>
				{error}
			</Typography>
		</Stack>
	);
}
