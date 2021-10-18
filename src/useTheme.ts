import { colors, createTheme, Theme, ThemeOptions, useMediaQuery } from '@mui/material';
import { merge } from 'lodash';

const commonTheme: ThemeOptions = {
	components: {
		MuiUseMediaQuery: {
			defaultProps: { noSsr: true }
		},
		MuiList: {
			styleOverrides: {
				root: {
					padding: 0
				}
			}
		},
		MuiListItem: {
			styleOverrides: {
				root: {
					paddingLeft : 0,
					paddingRight: 0
				}
			}
		},
	}
};

const lightTheme = createTheme( merge( commonTheme, {
	palette: {
		mode      : 'light',
		primary   : { main: colors.blue[ 500 ] },
		background: { paper: colors.grey[ '100' ] }
	}
} ) );

const darkTheme = createTheme( merge( commonTheme, {
	palette: {
		mode      : 'dark',
		primary   : { main: colors.blue[ 500 ] },
		background: { paper: colors.grey[ '900' ] }
	}
} ) );

export default function useTheme() {
	const dark = useMediaQuery( '(prefers-color-scheme: light)' );

	return dark ? darkTheme : lightTheme;
}

declare module '@mui/material/styles' {
	// noinspection JSUnusedGlobalSymbols
	type DefaultTheme = Theme
}
