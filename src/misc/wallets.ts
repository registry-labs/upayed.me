// wallets
import plug from 'src/assets/images/wallets/plug.png';
import stoic from 'src/assets/images/wallets/stoic.png';
import nfid from 'src/assets/images/wallets/nfid.png';
import metamask from 'src/assets/images/wallets/metamask.png';
import coinbase from 'src/assets/images/wallets/coinbase.png';
import ledger from 'src/assets/images/wallets/ledger.png';
import trezor from 'src/assets/images/wallets/trezor.png';
import trust from 'src/assets/images/wallets/trust.png';
import { handleNfidTransaction, handlePlugTransaction, handleStoicTransaction } from '@helpers/transactionHelper';

export interface Wallet {
	name: string;
	logo: string;
	handleTransaction: (to: string, amount: string) => Promise<void>;
}

interface ChainWallets {
	chain: string;
	wallets: Wallet[];
}

export const wallets: ChainWallets[] = [
	{
		chain: 'ethereum',
		wallets: [
			{
				name: 'MetaMask',
				logo: metamask,
				handleTransaction: async (to: string, amount: string) => console.log('metamask')
			},
			{
				name: 'Trust Wallet',
				logo: trust,
				handleTransaction: async (to: string, amount: string) => console.log('trust')
			},
			{
				name: 'Coinbase Wallet',
				logo: coinbase,
				handleTransaction: async (to: string, amount: string) => console.log('coinbase')
			}
		]
	},
	{
		chain: 'btc',
		wallets: [
			{
				name: 'Ledger',
				logo: ledger,
				handleTransaction: async (to: string, amount: string) => console.log('ledger')
			},
			{
				name: 'Trezor',
				logo: trezor,
				handleTransaction: async (to: string, amount: string) => console.log('trezor')
			},
			{
				name: 'Coinbase Wallet',
				logo: coinbase,
				handleTransaction: async (to: string, amount: string) => console.log('coinbase')
			}
		]
	},
	{
		chain: 'icp',
		wallets: [
			{
				name: 'Plug Wallet',
				logo: plug,
				handleTransaction: handlePlugTransaction
			},
			// {
			// 	name: 'Stoic Wallet',
			// 	logo: stoic,
			// 	handleTransaction: handleStoicTransaction
			// },
			{
				name: 'NFID',
				logo: nfid,
				handleTransaction: handleNfidTransaction
			}
		]
	}
];
