import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/navbar';
import { Q4WrapperContent } from '../components/wrapper';

export default function Question4() {
	return <Container sx={{ pt: 2 }}>
		<Navbar
			prevTitle='Question 3'
			nextTitle='Question 5'
			prevRoute='/question3'
			nextRoute='/question5'
			title='Question 4'>
			<Q4WrapperContent />
		</Navbar>
	</Container>;
}
