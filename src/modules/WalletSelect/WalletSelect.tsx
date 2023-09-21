import BalanceDetails from '@components/BalanceDetails/BalanceDetails';
import TokenOptionsList from '@components/TokenOptions/TokenOptionsList';
import PayWith from '@components/PayWith/PayWith';
import ReceiverDetails from '@components/ReceiverDetails/ReceiverDetails';
import WalletOptionsList from '@components/WalletOptions/WalletOptionsList';
import { Button, Stack } from '@mui/material';
import React from 'react';
import { handleNfidTransaction, handlePlugTransaction } from '@helpers/transactionHelper';
import { useData } from 'src/context/DataProvider';
import { CryptoAddressDetails } from '@the-registry/tir';
import { getAddress } from '@helpers/payStringHelper';

export default function WalletSelect() {
	const { paymentInformation, selectedToken, getTokensFromFiat, selectedWallet } = useData();

	function getAddress() {
		const address = paymentInformation?.addresses.find(address => address.paymentNetwork === selectedToken);
		return (address?.addressDetails as CryptoAddressDetails).address ?? '';
	}
	return (
		<Stack justifyContent='space-between' direction='column' height='100%'>
			<Stack spacing={2} pb={2} direction='column'>
				<ReceiverDetails />
				<BalanceDetails />
				<PayWith />
				<WalletOptionsList />
			</Stack>
			<Button variant='contained' onClick={() => selectedToken && selectedWallet?.handleTransaction(getAddress(), getTokensFromFiat(selectedToken))}>
				Pay
			</Button>
		</Stack>
	);
}
