import { getTokenImage } from '@helpers/imageHelper';
import { ButtonBase, ButtonProps, Radio, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface IProps extends ButtonProps {
	chain: string;
	amount: string;
	checked?: boolean;
}

export default function TokenOption({ chain, amount, checked, ...rest }: IProps) {
	return (
		<Stack component={ButtonBase} {...rest} borderRadius={1} px={2} py={1.5} sx={{ border: theme => `1px solid ${theme.palette.divider}` }}>
			<Stack spacing={2} direction='row' justifyContent='left' width='100%'>
				<Radio checked={checked} />
				<img width={40} style={{ borderRadius: '50%' }} height={40} src={getTokenImage(chain)} alt='currency' />
				<Stack direction='column' textAlign='left'>
					<Typography variant='body2' fontWeight='500'>
						{chain.toUpperCase()}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{amount}
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
}
