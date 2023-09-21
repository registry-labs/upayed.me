export function truncate(value: string, maxlength: number) {
	return value.length > maxlength ? value.slice(0, maxlength - 1) + '…' : value;
}

export function stringToByteArray(value: string) {
	return [...Uint8Array.from(Buffer.from(value))];
}

export function byteArrayToString(value: Uint8Array) {
	return String.fromCharCode.apply(null, [...value]);
}
