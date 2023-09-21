import React, { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PaymentInformation, getPayStringAsync, splitPayString } from '@the-registry/tir';
import { Wallet } from '@misc/wallets';

interface IDataProvider {
	name?: string | null;
	address?: string | null;
	amount?: string | null;
	currency?: string | null;
	currencySymbol?: string | null;
	logo?: string | null;
	paymentInformation?: PaymentInformation;
	selectedToken?: string;
	setSelectedToken: (chain: string) => void;
	selectedWallet?: Wallet;
	setSelectedWallet: (wallet: Wallet) => void;
	getTokensFromFiat: (chain: string) => string;
}

export const DataContext = createContext<IDataProvider>({
	setSelectedToken: () => {},
	setSelectedWallet: () => {},
	getTokensFromFiat: () => ''
});

export default function DataProvider({ children }: PropsWithChildren) {
	const [paymentInformation, setPaymentInformation] = useState<PaymentInformation | undefined>(undefined);
	const [name, setName] = useState<string | null>(null);
	const [address, setAddress] = useState<string | null>(null);
	const [amount, setAmount] = useState<string | null>(null);
	const [currency, setCurrency] = useState<string | null>(null);
	const [logo, setLogo] = useState<string | null>(null);
	const [selectedToken, setSelectedToken] = useState<string | undefined>(undefined);
	const [selectedWallet, setSelectedWallet] = useState<Wallet | undefined>(undefined);
	const { search: urlSearch } = useLocation();

	useEffect(() => {
		initialize();
	}, []);

	async function initialize() {
		try {
			const search = new URLSearchParams(urlSearch);
			setName(search.get('name'));
			const address = search.get('address') ?? undefined;
			setAddress(address ?? null);
			setAmount(search.get('amount'));
			setCurrency(search.get('currency'));
			setLogo(search.get('logo'));

			const data = await getPaymentInformation(address);
			setPaymentInformation(data);
		} catch (error) {
			console.log(error);
		}
	}

	function getCurrencySymbol(): string | null | undefined {
		switch (currency) {
			case 'USD':
				return '$';
			case 'EUR':
				return '€';
			case 'GBP':
				return '£';
			case 'YEN':
				return '¥';
			default:
				return undefined;
		}
	}

	async function getPaymentInformation(address?: string) {
		if (address) {
			const splitted = splitPayString(address);
			if (splitted) {
				const { prefix, domain } = splitted;
				return await getPayStringAsync(prefix, domain);
			}
		}
	}

	// MOCK METHOD!
	function getTokensFromFiat(chain: string) {
		const price = chain === 'icp' ? 3.01 : 27000.0;
		const tokens = parseFloat(amount ?? '0') / price;
		return tokens.toFixed(5);
	}

	return (
		<DataContext.Provider
			value={{
				name,
				address,
				amount,
				currency,
				currencySymbol: getCurrencySymbol(),
				logo,
				paymentInformation,
				setSelectedToken,
				selectedToken,
				selectedWallet,
				setSelectedWallet,
				getTokensFromFiat
			}}>
			{children}
		</DataContext.Provider>
	);
}

export function useData() {
	return useContext(DataContext);
}
