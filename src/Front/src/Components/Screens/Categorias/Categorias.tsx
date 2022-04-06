import { Navbar } from '../../UI/Navbar';

import { Component, ReactElement } from 'react';

import { Api } from '../../Functions/ApiHandler';

import { Link } from 'react-router-dom';

import { Container, Card, Typography } from '@mui/material';

import { ITypeProps, ICategoriasState } from '../../../Utils/UApp';

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
					<Typography sx={{ fontSize: 28 }}>Categorias</Typography>
					<hr/>
					{ c.length > 0 && c.map( (i: any) => (
						<>
							<Card sx={{ marginTop: '1rem', padding: '0.5rem'}}>
								<Link to={`/categorias/${i.titulo}`}>
									<Typography sx={{fontSize: 18}}>{i.titulo}</Typography>
								</Link>
							</Card>
							<br/>
						</>
					))}
				</Container>
			</>
		);
	};
};
