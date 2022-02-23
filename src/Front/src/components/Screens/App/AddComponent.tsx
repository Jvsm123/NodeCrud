import { Component, ReactElement } from 'react';

import {
    Alert,
	Box,
    Button,
    Card,
	Chip,
    Container,
	MenuItem,
    InputLabel,
    Snackbar,
	Select,
    TextField,
    Typography
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
		categoria: [],
		categorias: null,
		conteudo: "",
		redirectTo: null,
		msg: "",
		pop: false
	};

	Api( state: IAddState ): void
	{
		if( state.titulo !== "" && state.slug !== "" )
		{
			Api.SendAdm( this.props.type, state ).then( ( res: string ) =>
			{
				sessionStorage.setItem("msg", res );

				this.setState({ redirectTo: `/admin/${this.props.type}` });
			});
		}
		else this.setState({ pop: true });
	};

	async componentDidMount(): Promise<void>
	{
		if( this.props.type === "postagens" )
		{
			const result = await Api.ListAdm( "categorias" );

			const newRes = result.map( (i: any) => i.titulo);

			(result.length > 0) && this.setState({ cateogrias: newRes });
		};
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
							sx={{marginBottom: "15px"}}
							onChange={(e) => this.setState({slug: e.target.value})}
						/>

						{
							this.props.type === "postagens" &&
							<>
								<InputLabel sx={{fontSize: "25px"}}>Descrição:</InputLabel>
								<TextField
									inputProps={{maxLength: 30}}
									type="text"
									sx={{marginBottom: "15px"}}
									onChange={(e) => this.setState({descricao: e.target.value})}
								/>

								<InputLabel sx={{fontSize: "25px"}}>Categoria:</InputLabel>
								<Select
									value={this.state.conteudo}
									sx={{marginBottom: "15px"}}
									onChange={(e) => this.state.categoria.push(e.target.value)}
									renderValue={(selected) => (
										<Box>
										{
											selected.map( (v) => <Chip key={v} label={v}/> )
										}
										</Box>
									)}
								>
								{
									this.state.categorias.length &&
									this.state.categorias.map( (i:string) => (
										<MenuItem key={i} value={i}>{i}</MenuItem>
									))
								}
								</Select>

								<InputLabel sx={{fontSize: "25px"}}>Conteúdo:</InputLabel>
								<TextField
									inputProps={{maxLength: 30}}
									type="text"
									multiline
									sx={{marginBottom: "15px"}}
									onChange={(e) => this.setState({conteudo: e.target.value})}
								/>
							</>
						}

						<Button
							variant="contained"
							color="info"
							sx={{marginBottom: "25px"}}
							onClick={() => this.Api(this.state) }
						>
							Criar { (this.props.type === "categoria" && 'Categeoria') || 'Postagem' }
						</Button>
					</Card>
				</Container>
			</>
		);
	};
};
