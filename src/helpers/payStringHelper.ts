import { Address, AddressDetailsType, FiatAddressDetails } from '@the-registry/tir';

export function getAddressType(address: Address) {
	if (address.addressDetailsType === AddressDetailsType.FiatAddress) {
		return 'Fiat';
	} else {
		return 'Crypto';
	}
}

function isFiatAddressDetails(details: any): details is FiatAddressDetails {
	return (details as FiatAddressDetails).accountNumber !== undefined;
}

export function getAddress(address: Address) {
	let _address = '';
	if (isFiatAddressDetails(address.addressDetails)) {
		_address = address.addressDetails.accountNumber;
	} else {
		_address = address.addressDetails.address;
	}

	return _address;
}
