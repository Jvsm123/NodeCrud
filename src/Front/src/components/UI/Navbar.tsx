import { Component, ReactElement } from 'react';

import {
	Stack,
	Typography
} from '@mui/material';

import { Link } from 'react-router-dom';

export class Navbar extends Component< {}, {} >
{
	render(): ReactElement<HTMLElement>
	{
		return(
			<Stack
				direction="row"
				alignItems="center"
				spacing={ 50 }
				justifyContent="space-between"
				sx={
				{
					padding: 2,
					backgroundColor: "#585858",
					marginBottom: 1,
					width: '100%'
				}}
				color="white"
			>
				<Stack direction="row" alignItems="center" spacing={ 2 } >
					<Link to={`/`}>
						<Typography variant="h5" sx={{color: "white"}}>Blog do Node</Typography>
					</Link>
					<Link to={`/`}>
						<Typography variant="h6" sx={{color: "white"}}>Home</Typography>
					</Link>
					<Typography variant="h6">Categorias</Typography>
					<Typography variant="h6">Login</Typography>
					<Typography variant="h6">Registro</Typography>
				</Stack>
			</Stack>
		);
	};
};
