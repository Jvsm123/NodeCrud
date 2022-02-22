import { Component, ReactElement } from 'react';

import {
    Alert,
    Card,
    Container,
    InputLabel,
    TextField,
    Button,
    Typography,
    Snackbar
} from '@mui/material';

import { Navbar } from '../../UI/Navbar';

import { Navigate } from 'react-router-dom';

import { Api } from '../../Functions/ApiHandler';

import { ITypeProps, IAddState } from '../../../utils/UApp';

export class AddComponent extends Component< ITypeProps, IAddState >
{
	state =
	{
		titulo: "",
		slug: "",
		descricao: "",
		conteudo: "",
		categoria: "",
		redirectTo: null,
		msg: "",
		pop: false
	};

	Api( state: IAddState ): void
	{
		if( state.titulo !== "" && state.slug !== "" )
		{
			const { titulo, slug } = state;

			Api.SendAdm( this.props.type, { titulo: titulo, slug: slug })
			.then( ( res: string ) =>
			{
				sessionStorage.setItem("msg", res );

				this.setState({ redirectTo: `/admin/${this.props.type}` });
			});
		}
		else this.setState({ pop: true });
	};

	render(): ReactElement<HTMLElement>
	{
		if( this.state.redirectTo )
			return <Navigate to={this.state.redirectTo} state={this.state.msg}/>

		return (
			<>
				<Navbar/>
				{
					this.state.pop && <Snackbar
						open={this.state.pop}
						onClick={() => this.setState({pop: false})}
						sx={{zIndex: 99}}
					>
						<Alert severity="error">
							Erro ao tentar proceder,
							insira os dados corretamente!
						</Alert>
					</Snackbar>
				}

				<Container>
					<Typography variant="h2" sx={
					{
						alignSelf: "flex-start",
						marginBottom:"15px",
						color: "#707070"
					}}
					>
						{ this.props.type === "categorias" && 'Nova Categoria'}
						{ this.props.type === "postagens" && 'Nova Postagem'}
					</Typography>

					<Card variant="outlined" sx={
					{
						width: "100%",
						padding: 10,
						display: "flex",
						flexDirection: "column",
						borderColor: "#DCFFDB",
						backgroundColor: "#EBFFEB"
					}}>
						<InputLabel sx={{fontSize: "25px"}}>Título:</InputLabel>
						<TextField
							type="text"
							inputProps={{maxLength: 30}}
							sx={{marginBottom: "15px"}}
							onChange={(e) => this.setState({titulo: e.target.value})}
						/>

						<InputLabel sx={{fontSize: "25px"}}>Slug:</InputLabel>
						<TextField
							inputProps={{maxLength: 30}}
							type="text"
							onChange={(e) => this.setState({slug: e.target.value})}
						/>

						{
							this.props.type === "postagens" &&
							<>
								<InputLabel sx={{fontSize: "25px"}}>Descrição:</InputLabel>
								<TextField
									inputProps={{maxLength: 30}}
									type="text"
									onChange={(e) => this.setState({slug: e.target.value})}
								/>

								<InputLabel sx={{fontSize: "25px"}}>Conteúdo:</InputLabel>
								<TextField
									inputProps={{maxLength: 30}}
									type="text"
									onChange={(e) => this.setState({slug: e.target.value})}
								/>

								<InputLabel sx={{fontSize: "25px"}}>Categoria:</InputLabel>
								<TextField
									inputProps={{maxLength: 30}}
									type="text"
									onChange={(e) => this.setState({slug: e.target.value})}
								/>
							</>
						}

						<Button
							variant="contained"
							color="success"
							sx={{marginTop: "25px"}}
							onClick={() => this.Api(this.state) }
						>
							Criar Categeoria
						</Button>
					</Card>
				</Container>
			</>
		);
	};
};
