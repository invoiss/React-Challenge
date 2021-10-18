import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/navbar';
import { Q1WrapperContent } from '../components/wrapper';

export default function Question1() {
	return <Container sx={{ pt: 2, }}>
		<Navbar
			prevTitle='Back to Home'
			nextTitle='Question 2'
			prevRoute='/'
			nextRoute='/question2'
			title='Question 1'>
			<Q1WrapperContent />
		</Navbar>
		{/* Write your code here */}
	</Container>;
}
