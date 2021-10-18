import { Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/navbar';
import { Q5WrapperContent } from '../components/wrapper';

const exampleOptionsArray = [
	{ label: 'The Shawshank Redemption', year: 1994 },
	{ label: 'The Godfather', year: 1972 },
	{ label: 'The Godfather: Part II', year: 1974 },
]

export default function Question5() {
	return <Container sx={{ pt: 2 }}>
		<Navbar
			prevTitle='Question 4'
			nextTitle='Go Home'
			prevRoute='/question4'
			nextRoute='/'
			title='Question 5'>
			<Q5WrapperContent />
		</Navbar>
		{/* Write your code here */}
	</Container>;
}
