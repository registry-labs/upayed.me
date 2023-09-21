import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

interface IProps extends SvgIconProps {
	disabled?: boolean;
	dark?: boolean;
}

export function ArrowLeft({ disabled, ...props }: IProps) {
	return (
		<SvgIcon {...props} sx={{ width: props.width ?? 16, height: props.height ?? 16, justifyContent: 'center', display: 'flex' }}>
			<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path d='M11 14L6 9L11 4' stroke='black' strokeWidth='2' />
			</svg>
		</SvgIcon>
	);
}
