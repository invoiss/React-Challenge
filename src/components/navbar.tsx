import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

export default function Navbar( {
	title,
	prevTitle,
	nextTitle,
	prevRoute,
	nextRoute,
	children
}: {
	title?: string,
	prevTitle?: string,
	nextTitle?: string,
	prevRoute?: string,
	nextRoute?: string,
	children?: React.ReactNode

} ) {
	const router = useRouter();
	return <React.Fragment>
		<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
			{prevRoute ? <Button
				onClick={() => prevRoute ? router.push( prevRoute ) : null}
				variant='outlined'>
				{prevTitle}
			</Button> : <Box />}
			<Typography variant='h5'>{title}</Typography>
			<Button
				onClick={() => nextRoute ? router.push( nextRoute ) : null}
				variant='outlined'>
				{nextTitle}
			</Button>
		</Box>
		{children}
	</React.Fragment>

}
