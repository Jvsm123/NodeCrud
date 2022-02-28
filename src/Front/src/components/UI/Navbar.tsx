import { Component, ReactElement } from 'react';

import {
    Stack,
    Typography
} from '@mui/material';

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
					<Typography variant="h5">Blog do Node</Typography>
					<Typography variant="h6">Home</Typography>
					<Typography variant="h6">Categorias</Typography>
					<Typography variant="h6">Login</Typography>
					<Typography variant="h6">Registro</Typography>
				</Stack>
			</Stack>
		);
	};
};
