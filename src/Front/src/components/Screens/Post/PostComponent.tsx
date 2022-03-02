import { Component, ReactElement } from 'react'

import { Navbar } from '../../UI/Navbar';

import { IPostState } from '../../../utils/UApp';

import { Api } from '../../Functions/ApiHandler';

import { Container, Card, Typography } from '@mui/material';

export class PostComponent extends Component< {}, IPostState >
{
	state = { post: null };

	async ListPost( ID: string ): Promise< void >
	{
		await Api.ListOne( 'postagans', ID ).then( (res: any[]) =>
		{
			this.setState({ post: res })
		});
	};

	componentDidMount(): void
	{
		const id: string = window.location.search.split('?id=')[1];

		this.ListPost( id );
	};

	render(): ReactElement<HTMLElement>
	{
		return (
			<>
				<Navbar/>

				{
					(this.state.post == null) && (<Typography>Teste</Typography>) ||
					(this.state.post != null) && (
					<Container>
						<Card>
							<Typography variant="h3" color="info">{this.state.post.titulo}</Typography>

							<hr/>

							<small>Data de criação: {this.state.post.created_at}</small>

							<hr/>

							<Typography variant="h4">{this.state.post.conteudo}</Typography>
						</Card>
					</Container>)
				}
			</>
		);
	};
};
