import { getTokenImage } from '@helpers/imageHelper';
import { ButtonBase, ButtonProps, Radio, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface IProps extends ButtonProps {
	wallet: string;
	logo: string;
	checked?: boolean;
}

export default function WalletButton({ wallet, logo, checked, ...rest }: IProps) {
	return (
		<Stack component={ButtonBase} {...rest} borderRadius={1} px={2} py={1.5} sx={{ border: theme => `1px solid ${theme.palette.divider}` }}>
			<Stack spacing={2} direction='row' justifyContent='left' width='100%'>
				<Radio checked={checked} />
				<img width={40} style={{ borderRadius: '50%' }} height={40} src={logo} alt='logo' />
				<Typography variant='body2' fontWeight='500'>
					{wallet}
				</Typography>
			</Stack>
		</Stack>
	);
}
