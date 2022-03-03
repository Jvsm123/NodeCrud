import { Component, ReactElement } from 'react'

import { Navbar } from '../../UI/Navbar';

import { IPostState, IResults } from '../../../utils/UApp';

import { Api } from '../../Functions/ApiHandler';

import { Container, Card, Typography } from '@mui/material';

export class PostComponent extends Component< {}, IPostState >
{
	state = { post: [] };

	async ListPost( ID: string ): Promise< void >
	{
		await Api.ListOne( 'postagens', ID ).then( (res: [IResults] ) =>
		{
			let t = [];

			t.push(res);

			this.setState({ post: t });
		});

		console.log( this.state.post )
	};

	async componentDidMount(): Promise< void >
	{
		const id: string = window.location.pathname.split('/')[2];

		await this.ListPost( id );
	};

	render(): ReactElement<HTMLElement>
	{
		return (
			<>
				<Navbar/>
				{
					this.state.post[0].hasOwnProperty('id') && (
					<Container>
						<Card>
							<Typography variant="h3" color="info">{(this.state.post[0].titulo) ? this.state.post[0].titulo : ''}</Typography>

							<hr/>

							<small>Data de criação: {(this.state.post[0].created_at) ? this.state.post[0].created_at : ''}</small>

							<hr/>

							<Typography variant="h4">{this.state.post[0].conteudo ? this.state.post[0].conteudo : ''}</Typography>
						</Card>
					</Container>)
				}
			</>
		);
	};
};
