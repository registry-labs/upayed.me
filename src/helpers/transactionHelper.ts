import { requestTransfer } from '@nfid/wallet';
import { decimalsToE8s } from './validationHelper';

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
	await requestTransfer({ amount: Number(amount), to });
}
