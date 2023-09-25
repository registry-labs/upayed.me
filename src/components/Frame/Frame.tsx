import Topbar from '@components/Topbar/Topbar';
import { Box, Stack } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export default function Frame({ children }: PropsWithChildren) {
	const isWeb = window.location.pathname.includes('web');
	return (
		<Stack height='100%'>
			<Stack height='100%' margin='0 auto' direction='column' width='100%' maxWidth={theme => (isWeb ? '100%' : theme.breakpoints.values.sm)}>
				{!isWeb && <Topbar />}
				<Box height='100%' mb={2} sx={{ p: isWeb ? 0 : 4 }}>
					{children}
				</Box>
			</Stack>
		</Stack>
	);
}
