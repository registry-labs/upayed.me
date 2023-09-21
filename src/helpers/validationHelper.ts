import { Principal } from '@dfinity/principal';
import bigDecimal from 'js-big-decimal';

export function sanitizeDecimalInput(amount: string, callback: (value: string) => void) {
	if (!amount || amount.match(/^\d{1,}(\.\d{0,5})?$/)) {
		callback(amount);
	}
}

export function decimalsToE8s(amount: string) {
	const result = Number(amount) * decimals;
	return BigInt(result.toFixed(0));
}

export function disableDecimals(amount: string, callback: (value: string) => void) {
	if (!amount || (amount.match(/^\d{1,}?$/) && Number(amount) > 0)) {
		callback(amount);
	}
}

export function getPrettyDecimals(amount: bigint | number, decimalsCount: number = 5) {
	const value = new bigDecimal(Number(Number(amount) / decimals).toFixed(decimalsCount)).getPrettyValue(3, ',');
	return value;
}

export const decimals = 100000000;

export function validatePrincipal(principal: string, callback: (principal: string, isValid: boolean) => void) {
	try {
		Principal.fromText(principal);
		callback(principal, true);
	} catch (error) {
		callback(principal, false);
	}
}
