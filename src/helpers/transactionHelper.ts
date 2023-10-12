import { requestTransfer } from '@nfid/wallet';
import { decimalsToE8s } from './validationHelper';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains';


// ICP
export async function handlePlugTransaction(to: string, amount: string) {
	const plug = (window as any).ic.plug;
	await plug.requestConnect({ whitelist: ['ludvb-4aaaa-aaaal-ac2pa-cai'], host: 'https://icp0.io' });
	// TODO: hardcoded decimals
	const params = {
		to: to,
		amount: Number(decimalsToE8s(amount))
	};
	const result = await plug.requestTransfer(params);
	return result.height;
}

export async function handleNfidTransaction(to: string, amount: string) {
	const result = await requestTransfer({ amount: Number(amount), to });
	switch (result.status) {
		case 'SUCCESS':
			return result.height.toString();
		case 'REJECTED':
			throw new Error(result.message);
		case 'ERROR':
			throw new Error(result.message);
	}
}

// export async function handleStoicTransaction(to: string, amount: string) {
// 	await requestTransfer({ amount: Number(amount), to });
// }

interface ConnectInfo {
	chainId: string;
}

// ETH
function parseUnits(value: string, unit: string): bigint {
	const units: Record<string, bigint> = {
		wei: 1n,
		kwei: 10n ** 3n,
		mwei: 10n ** 6n,
		gwei: 10n ** 9n,
		szabo: 10n ** 12n,
		finney: 10n ** 15n,
		ether: 10n ** 18n
	};

	if (!units.hasOwnProperty(unit)) {
		throw new Error(`Invalid unit: ${unit}`);
	}

	return BigInt(Math.floor(parseFloat(value) * Number(units[unit])));
}

export async function handleMetamaskTransaction(to: string, amount: string) {
	const ethereum = (window as any).ethereum;
	const accounts = await ethereum?.request({
		method: 'eth_requestAccounts'
	});
	console.log(accounts);
	const value = '0x' + parseUnits(amount, 'ether').toString(16);
	const params = [
		{
			from: accounts[0],
			to,
			gas: '0x76c0', // 30400
			gasPrice: '0x9184e72a000', // 10000000000000
			value
		}
	];

	const result = await ethereum.request({
		method: 'eth_sendTransaction',
		params
	});

	return result.toString();
}

export async function handleWalletConnectTransaction(to: string, amount: string) {
	// show popup if on web.
	// connect with wallet if on mobile
	// initiate tx
	const { open } = useWeb3Modal();
	open();
}
