import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/navbar';
import { Q3WrapperContent } from '../components/wrapper';

export default function Question3() {
	return <Container sx={{ pt: 2 }}>
		<Navbar
			prevTitle='Question 2'
			nextTitle='Question 4'
			prevRoute='/question2'
			nextRoute='/question4'
			title='Question 3'>
			<Q3WrapperContent />
		</Navbar>

	</Container>;
}
