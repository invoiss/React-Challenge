/* eslint-disable react/no-children-prop */
import ErrorIcon from '@mui/icons-material/Error';
import { alpha, Box, colors, Divider, List, ListItem, ListItemSecondaryAction, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react';
import ReactMarkdown from 'react-markdown';
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
			bgcolor     : alpha( colors.blue[ 500 ], .2 )
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
		<List>
			<ListItem>
				<ListItemText>Name</ListItemText>
				<ListItemSecondaryAction />
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Date (datetime)</ListItemText>
				<ListItemSecondaryAction />
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Active (boolean switch)</ListItemText>
				<ListItemSecondaryAction />
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Age (select from 1 to 70)</ListItemText>
				<ListItemSecondaryAction />
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Do error handling on the form</ListItemText>
				<ListItemSecondaryAction />
			</ListItem>
		</List>
	</Wrapper>
}
export function Q2WrapperContent() {
	return <Wrapper secondary='Implement the Api below.'>
		<Box>
			Create an api function in NextJS that takes an object with this type
			<H>{'{id: string, name: string}'}[]</H>
			and converts it to
			<H>{'{id: name}'}</H>
		</Box>
		<List>
			<ListItem divider>
				<ListItemText primary='Perform error handling so that any object without that shape will throw an error.' />
				<ListItemSecondaryAction />
			</ListItem>
			<ListItem divider>
				<ListItemText primary='Call the function from a button press' />
				<ListItemSecondaryAction />
			</ListItem>
			<ListItem>
				<ListItemText primary='You can use any library for this' />
				<ListItemSecondaryAction />
			</ListItem>
		</List>
	</Wrapper>
}


export function Q3WrapperContent() {
	return <Wrapper>
		<Box>
			Convert the providers in
			<H>src/pages/_app.tsx</H>
			to use the
			<H>providerComposer</H>
			provided in
			<H>src/providerComposer.tsx</H>
		</Box>
	</Wrapper>
}
export function Q4WrapperContent() {
	return <Wrapper>
		<Box>
			In
			<H>src/pages/dataBase</H>
			create a trigger/function which will calculate the age on insert or modify given the birthday.
		</Box>
	</Wrapper>
}
const Q5MarkDown = `
### In this final question your task is to create a [Combo Box](https://www.w3.org/TR/wai-aria-practices/#combobox) but also known as an Auto Complete Input. 
### Your goal is to create a custom Combo Box that replicates [Auto Complete](https://mui.com/components/autocomplete/#main-content) component from MUI as best as possible.
#### We understand that creating such component would take a long time but to keep it short we are going to focus on implementing only a few functionalities within it. 

- A Combo Box is a combination of TextField and a dropdown. 
- Use the [TextField](https://mui.com/components/text-fields/) component from MUI and allow the user to search through a list of 200 plus options within the dropdown.
- It needs to have a prop for 'renderInput' and a prop for 'options'
- The options can be an array containing of 200 objects. 
- If the query that the user typed is not in the list of options, inform the user in the dropdown that the entry does not exist. 
- You may refer to the [Material UI Auto Complete](https://mui.com/components/autocomplete/#main-content) or [W3.org Combo Box Examples](https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html) for reference of finished examples. 
- Finally, make sure it has a beautiful UI. 
  
- ### As a bonus (but not required): 
- Add a prop for disabled options. Which will still show the option in the input if you search it but you can not select it. 
- Add Controlled States : The Component has two states that can be controlled. 
  - the "value" state with the 'value'/'onChange' props combination. This state represents the value selected by the user, for instance when pressing Enter.
  - the "input value" state with the 'inputValue'/'onInputChange' props combination. This state represents the value displayed in the textbox.
  - These two states are isolated, they should be controlled independently.
`;
export function Q5WrapperContent() {

	return <Wrapper>
		<ReactMarkdown linkTarget='_blank' children={Q5MarkDown} />
	</Wrapper>
}
