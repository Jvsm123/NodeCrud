import { Component, ReactElement } from 'react';

import { Navbar } from '../../UI/Navbar';

import { Api } from '../../Functions/ApiHandler';

import { Link } from 'react-router-dom';

import { ICategoriasState, IResults } from '../../../utils/UApp';

import { Container, Typography, Card } from '@mui/material';

export class PostagensRelated extends Component< {}, ICategoriasState >
{
	state = { categorias: [] };

	async CategoriaRelated( titulo: string ): Promise< void >
	{
		await Api
			.ListRelated( 'categorias', titulo )
			.then( (res: [IResults]) =>
				this.setState({ categorias: res })
			);
	};

	componentDidMount(): void
	{
		const titulo: string = window.location.pathname.split('/')[2]

		this.CategoriaRelated( titulo );
	};

	render(): ReactElement< HTMLElement >
	{
		const c: [IResults] | any = this.state.categorias;

		if( c.length > 0 ) return (
			<>
				<Navbar/>

				<Container>
					<Typography>{c.titulo}</Typography>
	
					<br/>

					{ (c.hasOwnProperty('postagens') && c.length > 0) && c.postagens.map( (e:any) => (
						<Link to={`/post/${e.id}`}>
							<Card>
								<Typography>{e.titulo}</Typography>
								<Typography>{e.descricao}</Typography>
							</Card>
						</Link>
					))}
				</Container>
			</>
		)
		else return <Navbar/>
	};
};
