import { Container, Divider, List, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Navbar from '../components/navbar';
import Wrapper from '../components/wrapper';

export default function Home() {
	return <Container sx={{ pt: 2 }}>
		<Navbar
			nextTitle='Question 1'
			nextRoute='/question1'
			title='Invoiss Technical Challenge'
		/>
		<Wrapper secondary='Write your code in the respected file in the repository'>
			<List>
				<Link href='/question1' passHref>
					<ListItemButton component='a'>
						<ListItemText>Question 1</ListItemText>
					</ListItemButton>
				</Link>
				<Divider />
				<Link href='/question2' passHref>
					<ListItemButton component='a'>
						<ListItemText>Question 2</ListItemText>
					</ListItemButton>
				</Link>
				<Divider />
				<Link href='/question3' passHref>
					<ListItemButton component='a'>
						<ListItemText>Question 3</ListItemText>
					</ListItemButton>
				</Link>
				<Divider />
				<Link href='/question4' passHref>
					<ListItemButton component='a'>
						<ListItemText>Question 4</ListItemText>
					</ListItemButton>
				</Link>
				<Divider />
				<Link href='/question5' passHref>
					<ListItemButton component='a'>
						<ListItemText>Question 5</ListItemText>
					</ListItemButton>
				</Link>
			</List>
		</Wrapper>
	</Container>;
}
