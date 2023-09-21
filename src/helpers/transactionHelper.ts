import { requestTransfer } from '@nfid/wallet';
import { decimalsToE8s } from './validationHelper';
import { useSDK } from '@metamask/sdk-react';
import { Address } from '@the-registry/tir';

const { sdk, connected, connecting, provider, chainId } = useSDK();


// ICP
export async function handlePlugTransaction(to: string, amount: string) {
	const plug = (window as any).ic.plug;
	await plug.requestConnect({ whitelist: ['ludvb-4aaaa-aaaal-ac2pa-cai'], host: 'https://icp0.io' });
	// TODO: hardcoded decimals
	const params = {
		to: to,
		amount: Number(decimalsToE8s(amount)),
		opts: {
			fee: [],
			memo: [],
			from_subaccount: [],
			created_at_time: {
				timestamp_nanos: 0
			}
		}
	};
	const result = await plug.requestTransfer(params);
	console.log(result);
}

export async function handleNfidTransaction(to: string, amount: string) {
	await requestTransfer({ amount: Number(amount), to });
}

export async function handleStoicTransaction(to: string, amount: string) {
	await requestTransfer({ amount: Number(amount), to });
}

// ETH
export async function handleMetamaskTransaction(to: string, amount: string) {
	if (window.ethereum) {
		const eth = window.ethereum;
		const accounts = await sdk?.connect();
		if (accounts != null || accounts != undefined) {
			let currentAccount: string = (accounts as any)[0];
			eth.request({
				method: 'eth_sendTransaction',
				params: [
					{
						from: currentAccount,
						to: to,
						value: amount,
						gasLimit: '0x5028',
						maxPriorityFeePerGas: '0x3b9aca00',
						maxFeePerGas: '0x2540be400',
					},
				],
			})
				.then((txHash: unknown) => console.log(txHash))
				.catch((error: Error) => console.error(error));
		}
	}
}
