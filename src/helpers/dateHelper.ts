import { DateTime } from 'luxon';

export function bigintFromNumber(value: number) {
	return BigInt(value);
}

export function bigIntToNumber(value: bigint) {
	return Number(value);
}

export function dateToNano(date: DateTime) {
	const value = parseInt(date.toSeconds().toString());
	return BigInt(value) * BigInt(1e9);
}

export function dateFromNano(nano: bigint) {
	const value = nano / BigInt(1e9);
	const date = DateTime.fromSeconds(Number(value));
	return date;
}

export function getLocaleFromNano(nano: bigint) {
	return dateFromNano(nano).toJSDate().toLocaleDateString() + ' ' + dateFromNano(nano).toJSDate().toLocaleTimeString();
}
