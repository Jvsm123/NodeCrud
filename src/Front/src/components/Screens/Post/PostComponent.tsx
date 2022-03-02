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
		await Api.ListOne( 'postagans', ID ).then( (res: any[any]) =>
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
					this.state.post && (
					<Container>
						<Card>
							<Typography variant="h3" color="info">{this.state.post[0]!.titulo!}</Typography>

							<hr/>

							<small>Data de criação: {this.state.post[0]!.created_at}</small>

							<hr/>

							<Typography variant="h4">{this.state.post[0]!.conteudo}</Typography>
						</Card>
					</Container>)
				}
			</>
		);
	};
};
