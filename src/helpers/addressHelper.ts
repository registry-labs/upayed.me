const defaultConfig = {
	leftSize: 5,
	rightSize: 3,
	separator: '...',
	replace: []
};

export function shortAddress(address: string, config = defaultConfig) {
	if (!address) return '';
	if (typeof address !== 'string') return '';

	let leftSize = config.leftSize || defaultConfig.leftSize;
	let rightSize = config.rightSize || defaultConfig.rightSize;

	if (address.length <= leftSize + rightSize) return address;

	const separator = config.separator || defaultConfig.separator;

	return `${address.slice(0, leftSize)}${separator}${address.slice(rightSize * -1)}`;
}
