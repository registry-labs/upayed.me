import { Slide } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import React from 'react';
import { TransitionProps } from 'react-transition-group/Transition';

declare module '@mui/material/styles' {
	interface TypographyVariants {
		text: React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		text?: React.CSSProperties;
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		text: true;
	}
}

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export const theme = createTheme({
	palette: {
		primary: {
			main: '#ffffff',
			contrastText: '#000000'
		},
		secondary: {
			main: '#8C8C8C',
			contrastText: '#000000'
		},
		background: {
			default: '#ffffff',
			paper: '#ffffff'
		},
		divider: '#E8E8E8',
		text: {
			primary: '#ffffff',
			secondary: '#A3A3A3'
		},
		success: {
			main: '#4AE97A'
		},
		warning: {
			main: '#FDBF1E'
		},
		error: {
			main: '#FD4B1E'
		}
	},
	shape: {
		borderRadius: 4
	},
	typography: {
		allVariants: {
			fontFamily: 'Inter, sans-serif'
		},
		h1: {
			fontWeight: 900,
			fontSize: 100,
			lineHeight: '100px'
		},
		h2: {
			fontWeight: 700,
			fontSize: 40
		},
		h3: {
			fontWeight: 700,
			fontSize: 18
		},
		body1: {
			fontWeight: 400,
			fontSize: 16,
			lineHeight: '20px'
		},
		body2: {
			fontWeight: 400,
			fontSize: 14,
			lineHeight: '20px'
		},
		subtitle1: {
			fontWeight: 400,
			fontSize: 12,
			lineHeight: '16px'
		}
	},
	components: {
		MuiBackdrop: {
			styleOverrides: {
				root: ({ theme }) => ({
					background: 'rgba(25, 25, 25, 0.50)',
					backdropFilter: 'blur(8px)'
				})
			}
		},
		MuiRadio: {
			styleOverrides: {
				root: ({ theme }) => ({
					padding: 0,
					'& .MuiSvgIcon-root': {
						fontSize: 24,
						fill: theme.palette.secondary.main
					},
					'&.Mui-checked': {
						'& .MuiSvgIcon-root': {
							fill: theme.palette.primary.main,
							backgroundColor: theme.palette.primary.contrastText,
							borderRadius: '50%'
						}
					}
				})
			}
		},
		MuiDialog: {
			defaultProps: {
				TransitionComponent: Transition,
				fullWidth: true
			},
			styleOverrides: {
				root: ({ theme }) => ({
					'& .MuiPaper-root': {
						background: `rgba(25, 25, 25, 0.8)`,
						borderRadius: '8px',
						boxShadow: theme.shadows[24],
						border: `1px solid ${theme.palette.divider}`,
						paddingTop: 2
					}
				})
			}
		},
		MuiTypography: {
			styleOverrides: {
				root: ({ theme }) => ({
					'&.MuiTypography-gutterBottom': {
						marginBottom: 24
					},
					span: {
						color: theme.palette.primary.main
					}
				})
			}
		},
		MuiDivider: {
			styleOverrides: {
				root: ({ theme }) => ({
					border: `1px solid ${theme.palette.divider}`
				})
			}
		},
		MuiList: {
			styleOverrides: {
				root: ({ theme }) => ({
					backgroundColor: '#000000',
					border: `1px solid ${theme.palette.divider}`,
					borderRadius: 4,
					color: theme.palette.text.secondary
				})
			}
		},
		MuiMenuItem: {
			styleOverrides: {
				root: ({ theme }) => ({
					'&.Mui-selected': {
						color: theme.palette.primary.contrastText,
						backgroundColor: '#000000 !important'
					},
					'&:hover': {
						color: theme.palette.primary.contrastText,
						backgroundColor: '#000000 !important'
					}
				})
			}
		},
		MuiTooltip: {
			styleOverrides: {
				tooltip: ({ theme }) => ({
					backgroundColor: theme.palette.background.default,
					color: theme.palette.text.primary,
					fontSize: 12,
					border: `1px solid ${theme.palette.divider}`
				}),
				arrow: ({ theme }) => ({
					color: theme.palette.background.default,
					'&:before': {
						border: `1px solid ${theme.palette.divider}`
					}
				})
			}
		},
		MuiTabs: {
			styleOverrides: {
				indicator: ({ theme }) => ({
					height: 4
				})
			}
		},
		MuiTab: {
			defaultProps: {
				disableRipple: true,
				disableFocusRipple: true,
				disableTouchRipple: true
			},
			styleOverrides: {
				root: ({ theme }) => ({
					padding: 0,
					margin: theme.spacing(1.5, 2.5),
					minWidth: `0px !important`,
					'&:last-child': {
						marginRight: 0
					}
				})
			}
		},
		MuiPagination: {
			styleOverrides: {
				root: ({ theme }) => ({
					'& .MuiPaginationItem-root': {
						borderRadius: 4,
						'&.Mui-selected': {
							backgroundColor: theme.palette.primary.main,
							color: theme.palette.primary.contrastText,
							'&:hover': {
								backgroundColor: theme.palette.primary.main
							}
						},
						'&:hover': {
							backgroundColor: theme.palette.primary.main
						}
					}
				})
			}
		},
		MuiPaginationItem: {
			styleOverrides: {
				root: ({ theme }) => ({
					minWidth: 0,
					width: 24,
					height: 24,
					borderRadius: 4,
					'&.Mui-selected': {
						backgroundColor: theme.palette.primary.main,
						color: theme.palette.primary.contrastText,
						'&:hover': {
							backgroundColor: theme.palette.primary.main
						}
					},
					'&:hover': {
						backgroundColor: theme.palette.primary.main
					},
					'&.MuiPaginationItem-previousNext': {
						backgroundColor: theme.palette.background.paper,
						width: 24,
						height: 24
					}
				})
			}
		},
		MuiTextField: {
			defaultProps: {
				autoComplete: 'off',
				name: 'password'
			},
			styleOverrides: {
				root: ({ theme }) => ({
					background: '#000000',
					border: `1px solid ${theme.palette.divider}`,
					borderRadius: theme.shape.borderRadius,
					input: {
						'&::placeholder': {
							fontStyle: 'italic'
						},
						'&.Mui-disabled': {
							WebkitTextFillColor: theme.palette.text.secondary,
							opacity: 0.3
						}
					},
					'& .Mui-error': {
						background: theme.palette.error.dark
					}
				})
			}
		},
		MuiSelect: {
			styleOverrides: {
				disabled: ({ theme }) => ({
					WebkitTextFillColor: theme.palette.text.secondary,
					opacity: 0.3
				}),

				icon: ({ theme }) => ({
					color: theme.palette.text.secondary
				}),

				select: ({ theme }) => ({
					background: '#000000',
					border: `1px solid ${theme.palette.divider}`,
					borderRadius: theme.shape.borderRadius,
					input: {
						'&::placeholder': {
							// ...theme.typography.menu2,
							fontStyle: 'italic'
						},
						'&.Mui-disabled': {
							WebkitTextFillColor: theme.palette.text.secondary,
							opacity: 0.3
						}
					},
					'& .Mui-error': {
						background: theme.palette.error.dark
					}
				})
			}
		},
		MuiDrawer: {
			styleOverrides: {
				paper: ({ theme }) => ({
					background: `rgba(25, 25, 25, 0.8)`,
					boxShadow: theme.shadows[24],
					color: '#fff'
				})
			}
		},
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					color: '#fff'
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					fontSize: 16,
					height: 42,
					fontWeight: 500,
					color: theme.palette.primary.contrastText,
					textTransform: 'none',
					'&.Mui-disabled': {
						color: theme.palette.text.secondary,
						backgroundColor: theme.palette.divider
					}
				}),

				containedPrimary: ({ theme }) => ({
					backgroundColor: theme.palette.primary.contrastText,
					color: theme.palette.primary.main
				})
			}
		},
		MuiChip: {
			styleOverrides: {
				root: ({ theme }) => ({
					borderRadius: 4,
					textTransform: 'uppercase',
					fontWeight: 600
				})
			}
		},
		MuiAccordion: {
			styleOverrides: {
				root: ({ theme }) => ({
					backgroundColor: theme.palette.background.default,
					borderBottom: `1px dashed ${theme.palette.divider}`,
					'&:before': {
						display: 'none'
					},
					'&.Mui-expanded': {
						margin: 0
					}
				})
			}
		},
		MuiAccordionSummary: {
			styleOverrides: {
				root: ({ theme }) => ({
					padding: theme.spacing(2.5, 0)
				})
			}
		},
		MuiAccordionDetails: {
			styleOverrides: {
				root: ({ theme }) => ({
					padding: theme.spacing(0, 0, 5, 0)
				})
			}
		}
	}
});
