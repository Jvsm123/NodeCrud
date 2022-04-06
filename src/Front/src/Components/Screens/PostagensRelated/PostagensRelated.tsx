import { Component, ReactElement } from 'react';

import { Navbar } from '../../UI/Navbar';

import { Api } from '../../Functions/ApiHandler';

import { Link } from 'react-router-dom';

import { ICategoriasState, IResults } from '../../../Utils/UApp';

import {
	Button,
	Container,
	Typography,
	Card
} from '@mui/material';

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

		console.log( c );

		if( c.length > 0 ) return (
			<>
				<Navbar/>

				<Container>
					<Typography sx={{fontSize: 28}}>{c[0].titulo}</Typography>
	
					<hr/>

					{ c[0].postagens.map( (e:any) => (
						<Card sx={{marginTop: '1rem', padding: '.5rem'}}>
							<Typography sx={{fontSize: 20, marginBottom: '0.2rem'}}>{e.titulo}</Typography>
							<Typography sx={{marginBottom: '.5rem'}}>{e.descricao}</Typography>

							<Link to={`/post/${e.id}`}>
								<Button
									variant='contained'
									color='success'
								>
								Saiba mais
								</Button>
							</Link>
						</Card>
					))}
				</Container>
			</>
		)
		else return (
			<>
				<Navbar/>
			
				<h3>Carregando...</h3>
			</>
		);
	};
};
