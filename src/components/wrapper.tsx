/* eslint-disable react/no-children-prop */
import ErrorIcon from '@mui/icons-material/Error';
import { alpha, Box, colors, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import H from './highlight';

export default function Wrapper( { children, secondary }: { children: React.ReactNode, secondary?: string } ) {
	return (
		<Paper sx={{
			p           : 2,
			my          : 2,
			boxShadow   : 'none',
			border      : 1,
			borderRadius: 2,
			borderColor : colors.blue[ 500 ],
			bgcolor     : alpha( colors.blue[ 500 ], .2 ),
			'li'        : { py: 1, },
			'ul'        : { pl: 2 }
		}}>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<ErrorIcon sx={{ m: 2, color: colors.grey[ 500 ], alignSelf: 'start' }} />
				<Box>
					{children}
				</Box>
			</Box>
			{secondary ? <Box sx={{
				p           : 2,
				border      : 1,
				borderRadius: 2,
				borderColor : colors.green[ 500 ],
				bgcolor     : alpha( colors.green[ 500 ], .2 )
			}}>
				<Typography variant='subtitle1' sx={{ color: colors.grey[ 800 ] }}>{secondary}</Typography>
			</Box> : undefined}
		</Paper>
	);
}


export function Q1WrapperContent() {
	return <Wrapper>
		<Typography>Design a form with Formik and Material UI</Typography>
		<Typography>Contains the following items: </Typography>
		<ul>
			<li>Name</li>
			<Divider />
			<li>Date (datetime)</li>
			<Divider />
			<li>Active (boolean switch)</li>
			<Divider />
			<li>Age (select from 1 to 70)</li>
			<Divider />
			<li>Do error handling on the form</li>
		</ul>
	</Wrapper>
}
export function Q2WrapperContent() {
	return <Wrapper secondary='Implement the Api below.'>
		<Typography>
			Create an api function in NextJS that takes an object with this type <H>{'{id: string, name: string}'}[]</H> and converts it to <H>{'{id: name}'}</H>
		</Typography>
		<ul>
			<li>Perform error handling so that any object without that shape will throw an error.</li>
			<li>Call the function from a button press</li>
			<li>You can use any library for this</li>
		</ul>
	</Wrapper>
}


export function Q3WrapperContent() {
	return <Wrapper>
		<Typography>
			Convert the providers in <H>src/pages/_app.tsx</H> to use the <H>providerComposer</H> provided in <H>src/providerComposer.tsx</H>
		</Typography>
	</Wrapper>
}
export function Q4WrapperContent() {
	return <Wrapper>
		<Typography>
			In <H>src/pages/dataBase</H> create a trigger/function which will calculate the age on insert or modify given the birthday.
		</Typography>
	</Wrapper>
}

export function Q5WrapperContent() {

	return <Wrapper>
		<Typography variant='h6'>
			In this final question your task is to create a <a href='https://www.w3.org/TR/wai-aria-practices/#combobox' target='_blank' rel='noreferrer'>Combo Box</a>  but also known as an Auto Complete Input.
		</Typography>
		<Typography variant='h6'>
			Your goal is to create a custom Combo Box that replicates <a href='https://mui.com/components/autocomplete/#main-content' target='_blank' rel='noreferrer'>Auto Complete</a> component from MUI as best as possible.
		</Typography>
		<Box sx={{ border: 1, borderColor: 'warning.main', borderRadius: 1, p: 2, m: 2, bgcolor: alpha( colors.orange[ 500 ], .1 ) }}>
			<Typography sx={{ color: 'warning.main' }}>
				We understand that creating such component would take a long time
				but to keep it short we are going to focus on implementing only a few functionalities within it.
			</Typography>
		</Box>
		<ul>
			<li>
				A Combo Box is a combination of TextField and a dropdown.
			</li>
			<li>
				Use the <a href='https://mui.com/components/text-fields/' target='_blank' rel='noreferrer'>TextField Component</a> from MUI and allow the user to search through a list of 200 plus options within the dropdown.
			</li>
			<li>It needs to have a prop for <H>renderInput</H> and a prop for <H>options</H>
			</li>
			<li>The options can be an array containing of 200 objects.
			</li>
			<li>If the query that the user typed is not in the list of options, inform the user in the dropdown that the entry does not exist.
			</li>
			<li>You may refer to the <a href='https://mui.com/components/autocomplete/#main-content' target='_blank' rel='noreferrer'>Material UI Auto Complete</a> or <a href='https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html' target='_blank' rel='noreferrer'>W3.org Combo Box Examples</a> for reference of finished examples.
			</li>
			<li>Finally, make sure it has a beautiful UI.
			</li>
		</ul>
		<Typography variant='h6'>
			As a bonus (but not required):
		</Typography>
		<ul>
			<li>Add a prop for disabled options. Which will still show the option in the input if you search it but you can not select it.
			</li>
			<li>Add Controlled States : The Component has two states that can be controlled.
			</li>
			<ul>
				<li className='text'>
					The &quot;value&quot; state with the <H>value</H>/<H>onChange</H> props combination. This state represents the value selected by the user, for instance when pressing Enter.
				</li>
				<li className='text'>The &quot;input value&quot; state with the <H>inputValue</H>/<H>onInputChange</H> props combination. This state represents the value displayed in the textbox.
				</li>
				<li className='text'>These two states are isolated, they should be controlled independently.
				</li>
			</ul>
		</ul>
	</Wrapper>
}
