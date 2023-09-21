import Topbar from '@components/Topbar/Topbar';
import { Box, Stack } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export default function Frame({ children }: PropsWithChildren) {
	return (
		<Stack height='100%'>
			<Stack height='100%' margin='0 auto' direction='column' width='100%' maxWidth={theme => theme.breakpoints.values.sm}>
				<Topbar />
				<Box height='100%' mb={2} sx={{ p: 4 }}>
					{children}
				</Box>
			</Stack>
		</Stack>
	);
}
