import { Wallet } from '@misc/wallets';
import { ButtonBase, ButtonProps, Radio, Stack, Typography } from '@mui/material';
import React from 'react';

interface IProps extends ButtonProps {
	wallet: Wallet;
	checked?: boolean;
}

export default function WalletOption({ wallet, checked, ...rest }: IProps) {
	return (
		<Stack component={ButtonBase} {...rest} borderRadius={1} px={2} py={1.5} sx={{ border: theme => `1px solid ${theme.palette.divider}` }}>
			<Stack spacing={2} direction='row' justifyContent='left' width='100%'>
				<Radio checked={checked} />
				<img width={40} style={{ borderRadius: '50%' }} height={40} src={wallet.logo} alt='currency' />
				<Stack direction='column' textAlign='left' justifyContent='center'>
					<Typography variant='body2' fontWeight='500'>
						{wallet.name}
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
}
