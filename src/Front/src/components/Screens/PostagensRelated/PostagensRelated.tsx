import { Component, ReactElement } from 'react';

import { Navbar } from '../../UI/Navbar';

import { Api } from '../../Functions/ApiHandler';

import { Link } from 'react-router-dom';

import { ICategoriasState } from '../../../utils/UApp';

import { Container, Typography, Card } from '@mui/material';

export class PostagensRelated extends Component< {}, ICategoriasState >
{
	state = { categorias: [] };

	async CategoriaRelated( titulo: string ): Promise< void >
	{
		await Api.ListRelated( 'categorias', titulo ).then( (res: any) =>
		{
			console.log( res );

			this.setState({ categorias: res });
		});
	};

	componentDidMount(): void
	{
		const titulo: string = window.location.pathname.split('/')[2]

		this.CategoriaRelated( titulo );
	};

	render(): ReactElement< HTMLElement >
	{
		const c = this.state.categorias;

		return (
			<>
				<Navbar/>

				<Container>
					<Typography>{c.hasOwnProperty('title') && c.title}</Typography>
					<br/>
					{ c.hasOwnProperty('postagens') && c.length > 0 && c.postagens.map( (e:any) => (
						<Link to={`/post/${e.id}`}>
							<Card>
								<Typography>{e.titulo}</Typography>
								<Typography>{e.descricao}</Typography>
							</Card>
						</Link>
					))}
				</Container>
			</>
		);
	};
};
