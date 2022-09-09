import { Component, ReactElement } from 'react'

import { Navbar } from '../../UI/Navbar';

import { IPostState, IResults } from '../../../Utils/UApp';

import { Api } from '../../Functions/ApiHandler';

import { Container, Card, Typography } from '@mui/material';

export class PostComponent extends Component< {}, IPostState >
{
	state = { post: [] };

	async ListPost( ID: string ): Promise< void >
	{
		await Api.ListOne( 'postagens', ID ).then( (res: IResults[] ) =>
		{
			let t = [];

			t.push(res);

			this.setState({ post: t });
		});
	};

	async componentDidMount(): Promise< void >
	{
		const id: string = window.location.pathname.split('/')[2];

		await this.ListPost( id );
	};

	render(): ReactElement<HTMLElement>
	{
		const a = this.state.post;

		return (
			<>
				<Navbar/>
				<Container>
					<Card>
						<Typography variant="h2" color="info">{a.length >= 1 && a[0].hasOwnProperty('id') ? a[0].titulo : "Calma ;-;"}</Typography>

						<hr/>

						<small>Data de criação: {a.length >= 1 && a[0].hasOwnProperty('created_at') ? a[0].created_at : 'Calma'}</small>

						<hr/>

						<Typography variant="h3">{a.length >= 1 && a[0].hasOwnProperty('conteudo') ? a[0].conteudo : 'Calma'}</Typography>
					</Card>
				</Container>
			</>
		);
	};
};
