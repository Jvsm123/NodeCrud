import { Navbar } from '../../UI/Navbar';

import { Component, ReactElement } from 'react';

import { Api } from '../../Functions/ApiHandler';

import { Container, Card, Typography } from '@mui/material';

import { ITypeProps, ICategoriasState } from '../../../utils/UApp';

export class Categorias extends Component< ITypeProps, ICategoriasState >
{
	state = { categorias: [] };

	async ListCategorias(): Promise< void >
	{
		await Api.List( this.props.type ).then( (res: any) => this.setState({ categorias: res }) );
	};

	componentDidMount(): void { this.ListCategorias() };

	render(): ReactElement<HTMLElement>
	{
		const c = this.state.categorias;

		return (
			<>
				<Navbar/>

				<Container>
					{c.length > 0 && c.map( (i: any) => (
						<Card>
							<Typography>{i.titulo}</Typography>
						</Card>
					))}
				</Container>
			</>
		);
	};
};
