import { Component, ReactElement } from 'react';

import {
	Button,
	Container,
	Card,
	CardContent,
	CardActions,
	Typography,
	ListItemText,
	Stack
} from '@mui/material/';

import { Link } from 'react-router-dom';

import { Navbar } from '../../UI/Navbar';

import { IHomeState } from '../../../utils/UApp';

import { Api } from '../../Functions/ApiHandler';

export class HomeComponent extends Component< {}, IHomeState >
{
	state = { post: [] };

	async ListPost(): Promise< void >
	{
		await Api.List( 'postagens' ).then( (res: any[]) =>
			this.setState({ post: res }) );
	};

	componentDidMount(): void { this.ListPost() };

	render(): ReactElement< HTMLElement >
	{
		console.log( this.state.post );

		return (
			<>
				<Navbar/>

				<Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'normal', width: 'initial' }}>
					<Card sx={{ height: '15rem', backgroundColor: "#bac2bc", marginTop: '1rem' }}>
						<CardContent>
							<Typography sx={{ fontSize: 28 }} color="text.secondary">Bem-vindo ao Blog do Node</Typography>
							<Typography>Seu blog de informações e conhecimento!</Typography>
							<hr style={{ color: "#bdc5bf", margin: '2rem auto' }}/>
							<CardActions>
								<Button color="info" variant="contained">Crie uma conta</Button>
							</CardActions>
						</CardContent>
					</Card>
				</Container>

				<Container sx={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'normal', width: 'initial' }}>
					<hr/>

					<Typography variant="h4">Postagens recentes:</Typography>
					{
						( this.state.post.length >= 1 ) &&
							this.state.post.map( (e: any) => (
							<Card
								sx={{ marginTop: "20px", marginBottom: "20px", padding: "10px" }}
								variant="outlined"
								key={Math.random() * 10000}
							>
								<Stack spacing={2}>
									<Typography variant="h3" color="secondary">{e.titulo}</Typography>

									<ListItemText>Descrição: {e.descricao}</ListItemText>

									<Link to={`/post/${e.id}`}>
										<Button variant="outlined" color="info">Saiba mais...</Button>
									</Link>

									<hr/>

									<small>Categoria: {e.categoria.titulo}</small>

									<small>Data de criação: {e.created_at}</small>
								</Stack>
							</Card>
						))
					}

					{ this.state.post.length < 1 && <Typography>Não há postagens!</Typography> }
				</Container>
			</>
		);
	};
};
