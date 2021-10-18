import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/navbar';
import { Q2WrapperContent } from '../components/wrapper';

export default function Question2() {
	return <Container sx={{ pt: 2 }}>
		<Navbar
			prevTitle='Question 1'
			nextTitle='Question 3'
			prevRoute='/question1'
			nextRoute='/question3'
			title='Question 2'>
			<Q2WrapperContent />
		</Navbar>
		{/* Write your code here */}
	</Container>;
}
