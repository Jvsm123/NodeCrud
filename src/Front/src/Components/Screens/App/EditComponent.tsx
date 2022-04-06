import { Component, ReactElement } from 'react';

import {
	Alert,
	Backdrop,
	Button,
	Card,
	CircularProgress,
	Container,
	InputLabel,
	MenuItem,
	Snackbar,
	Select,
	Stack,
	TextField,
	Typography
} from '@mui/material';

import { Navigate } from 'react-router-dom';

import { Api } from '../../Functions/ApiHandler';

import { Navbar } from '../../UI/Navbar';

import { ITypeProps, IEditState } from '../../../Utils/UApp';

export class EditComponent extends Component< ITypeProps, IEditState >
{
	state =
	{
		id: "",
		titulo: "",
		slug: "",
		descricao: "",
		categoria: "",
		categorias: [],
		conteudo: "",
		newTitulo: "",
		newSlug: "",
		newDesc: "",
		newCategoria: "",
		newConeteudo: "",
		redirectTo: null,
		pop: false,
		openCircle: true
	};

	ApiList( id: string ): void
	{
		Api.ListOne( this.props.type, id ).then( (res: any) => this.setState(
		{
			id: res.id,
			titulo: res.titulo,
			slug: res.slug,
			descricao: res.descricao,
			conteudo: res.conteudo,
			categoria: res.categoria,
			openCircle: false
		}));
	};

	ApiEdit( state: IEditState ): void
	{
		if( state.newTitulo !== "" && state.newSlug !== "" )
		{
			Api.Edit( this.props.type, state, this.state.id ).then( (res: string) =>
			{
				sessionStorage.setItem( "msg", res );

				this.setState({ redirectTo: `/admin/${this.props.type}` });
			});
		}
		else this.setState({ pop: true });
	};

	componentDidMount(): void
	{
		const id: string = window.location.search.split('?id=')[1];

		this.ApiList( id );
	};

	render(): ReactElement< HTMLElement >
	{
		if( !this.state.id && !this.state.titulo && !this.state.slug ) return <CircularProgress/>

		if( this.state.redirectTo ) return <Navigate to={this.state.redirectTo}/>

		return (
			<>
				<Backdrop open={this.state.openCircle} sx={{color: "#fff", zIndex: 99}}>
					<CircularProgress/>
				</Backdrop>

				<Navbar/>

				{
					this.state.pop && <Snackbar
						open={this.state.pop}
						onClick={() => this.setState({ pop: false })}
						sx={{zIndex: 99}}
					>
						<Alert severity="error">
							Erro ao tentar proceder,
							insira os dados corretamente!
						</Alert>
					</Snackbar>
				}

				<Container>
					<Stack direction="row" sx={{justifyContent: "space-Between", alignItems: "center"}}>
						<Typography
							variant="h3"
							sx={
							{
								alignSelf: "flex-start",
								marginBottom:"15px",
								color: "#707070"
							}}
						>
							Editar
						</Typography>

						<Typography color="primary" variant="h5">
							{this.state.titulo}
						</Typography>
					</Stack>

					<Card
						variant="outlined"
						sx={
						{
							width: "100%",
							padding: 10,
							display: "flex",
							flexDirection: "column",
							borderColor: "#DCFFDB",
							backgroundColor: "#EBFFEB"
						}}
					>
						<InputLabel sx={{fontSize: "25px"}}>Novo Titulo:</InputLabel>
						<TextField
							placeholder={this.state.titulo}
							inputProps={{maxLength: 30}}
							type="text"
							onChange={(e) => this.setState({newTitulo: e.target.value})}
						/>

						<InputLabel sx={{fontSize: "25px"}}>Novo Slug:</InputLabel>
						<TextField
							placeholder={this.state.slug}
							inputProps={{maxLength: 30}}
							type="text"
							onChange={(e) => this.setState({newSlug: e.target.value})}
						/>

						{
							this.props.type === "postagens" &&
							<>
								<InputLabel sx={{fontSize: "25px"}}>Descrição:</InputLabel>
								<TextField
									inputProps={{maxLength: 30}}
									multiline
									type="text"
									onChange={(e) => this.setState({slug: e.target.value})}
								/>

								<InputLabel sx={{fontSize: "25px"}}>Conteúdo:</InputLabel>
								<TextField
									multiline
									type="text"
									onChange={(e) => this.setState({slug: e.target.value})}
								/>

								<InputLabel sx={{fontSize: "25px"}}>Categoria:</InputLabel>
								<Select
									value={this.state.categoria}
									sx={{marginBottom: "15px"}}
									onChange={(e: any) => this.setState({ categoria: e.target.value }) }
								>
								{
									this.state.categorias.length &&
									this.state.categorias.map( (i:string) => (
										<MenuItem key={i} value={i}>{i}</MenuItem>
									))
								}
								</Select>
							</>
						}
 
						<Button
							variant='contained'
							color="info"
							sx={{marginTop: '25px'}}
							onClick={() => this.ApiEdit(this.state)}
						>
							Alterar
						</Button>
					</Card>
				</Container>
			</>
		);
	};
};
