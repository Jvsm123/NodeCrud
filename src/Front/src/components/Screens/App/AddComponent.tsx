import { Component, ReactElement } from 'react';

import {
    Alert,
    Button,
    Card,
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

import { ITypeProps, IAddState, IResults } from '../../../utils/UApp';

export class AddComponent extends Component< ITypeProps, IAddState >
{
	state =
	{
		titulo: "",
		slug: "",
		descricao: "",
		categoria: "",
		categorias: [],
		conteudo: "",
		redirectTo: "",
		msg: "",
		pop: false
	};

	SendApi( state: IAddState ): void
	{
		if( state.titulo !== "" && state.slug !== "" )
		{
			Api.Send( this.props.type, state ).then( ( res: string ) =>
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
			const result = await Api.List( "categorias" );

			this.setState({ categorias: result.map( (i: IResults) => i.titulo ) });
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
							inputProps={{maxLength: 40}}
							sx={{marginBottom: "15px"}}
							onChange={(e) => this.setState({titulo: e.target.value})}
						/>

						<InputLabel sx={{fontSize: "25px"}}>Slug:</InputLabel>
						<TextField
							inputProps={{maxLength: 40}}
							type="text"
							sx={{marginBottom: "15px"}}
							onChange={(e) => this.setState({slug: e.target.value})}
						/>

						{
							this.props.type === "postagens" &&
							<>
								<InputLabel sx={{fontSize: "25px"}}>Descrição:</InputLabel>
								<TextField
									inputProps={{maxLength: 220}}
									type="text"
									multiline
									sx={{marginBottom: "15px"}}
									onChange={(e) => this.setState({descricao: e.target.value})}
								/>

								<InputLabel sx={{fontSize: "25px"}}>Categoria:</InputLabel>
								<Select
									value={this.state.categoria}
									sx={{marginBottom: "15px"}}
									onChange={(e) => this.setState({ categoria: e.target.value }) }
								>
								{
									( this.state.categorias.length ) &&
									this.state.categorias.map( (i:string) => (
										<MenuItem key={i} value={i}>{i}</MenuItem>
									))
								}
								</Select>

								<InputLabel sx={{fontSize: "25px"}}>Conteúdo:</InputLabel>
								<TextField
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
							onClick={() => this.SendApi(this.state) }
						>
							Criar { (this.props.type === "categoria" && 'Categeoria') || 'Postagem' }
						</Button>
					</Card>
				</Container>
			</>
		);
	};
};
