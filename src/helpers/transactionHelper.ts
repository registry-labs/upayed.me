import { requestTransfer } from '@nfid/wallet';
import { decimalsToE8s } from './validationHelper';
import { useSDK } from '@metamask/sdk-react';

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
	const accounts = await window.ethereum?.request({
		method: 'eth_requestAccounts',
	})
	console.log(accounts);
	if (accounts != null || accounts != undefined) {
		const userAcc = (accounts as any)[0];
		const value = '0x' + parseUnits(amount, 'ether').toString(16);
		console.log(value);
		// const feePerGas: bigint = parseUnits("4.5", "gwei");
		// console.log(feePerGas.toString());
		const params = [
			{
				from: userAcc,
				to: to,
				gas: '9', // 30400
				gasPrice: '0x9184e72a000', // 10000000000000
				value: value, // 2441406250
				data:
					'0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675',
			},
		];
		window.ethereum
			?.request({
				method: 'eth_sendTransaction',
				params: params,
			})
			.then((result) => {
				console.log(result);
				// The result varies by RPC method.
				// For example, this method returns a transaction hash hexadecimal string upon success.
			})
			.catch((error) => {
				console.log(error);
				// If the request fails, the Promise rejects with an error.
			});
	}
}


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


	// console.log('requesting..connect');
	// const eth = window.ethereum;
	// const accounts = await useSDK().sdk?.connect();
	// console.log(accounts);
	// if (accounts != null || accounts != undefined) {
	// 	let currentAccount: string = (accounts as any)[0];
	// 	mm.request({
	// 		method: 'eth_sendTransaction',
	// 		params: [
	// 			{
	// 				from: currentAccount,
	// 				to: to,
	// 				value: amount,
	// 				gasLimit: '0x5028',
	// 				maxPriorityFeePerGas: '0x3b9aca00',
	// 				maxFeePerGas: '0x2540be400',
	// 			},
	// 		],
	// 	})
	// 		.then((txHash: unknown) => console.log(txHash))
	// 		.catch((error: Error) => console.error(error));
	// }
	// }