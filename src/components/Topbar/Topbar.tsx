import { AppBar, IconButton, Stack } from '@mui/material';
import React from 'react';
import logo from '@assets/images/logo.svg';
import { ArrowLeft } from '@assets/icons/Icons';
import { useNavigate } from 'react-router-dom';

export default function Topbar() {
	const navigate = useNavigate();
	return (
		<Stack minHeight={64} px={4} direction='row' alignItems='center' justifyContent='space-between'>
			<IconButton onClick={() => navigate(-1)}>
				<ArrowLeft />
			</IconButton>
			<img height={22} src={logo} />
		</Stack>
	);
}
