import { Component } from 'react';

import {
	Alert,
	Button,
	Backdrop,
	CircularProgress,
	Card,
	Container,
	Divider,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	DialogActions,
	List,
	ListItem,
	ListItemText,
	Snackbar,
	Stack,
	Typography
} from '@mui/material';

import {
	DeleteForever,
	Edit
} from '@mui/icons-material'

import { Link, Navigate } from 'react-router-dom';

import { Navbar } from '../../UI/Navbar/Navbar';

import { Api } from '../../Functions/ApiHandler';

type State =
{
	data: any;
	msg?: string;
	openPop: boolean;
	openCircle: boolean;
	openDialog: boolean;
	id: string | null;
	redirectTo: string | null;
};

export class ListComponent extends Component< {}, State >
{
	state =
	{
		data: [],
		msg: "",
		openPop: true,
		openCircle: true,
		openDialog: false,
		id: null,
		redirectTo: null
	};
 
	async ApiDelete( ID: string ): Promise< void >
	{
		const res = await Api.RemoveAdm( ID );
	 
		if( !res ) window.sessionStorage.setItem({ msg: "Erro ao remover!" });
	 
		window.sessionStorage.setItem({ msg: res });
	 
		this.setState({ redirectTo: "/admin/categorias" });
	};
 
	async componentDidMount(): Promise< void >
	{
		const data = await Api.ListAdm();
	 
		const msg: string | null = sessionStorage.getItem("msg");
	 
		if( msg )
		{
			sessionStorage.clear();
		 
			this.setState({ msg: msg });
		};
	 
		this.setState({ data: data, openCircle: false });
	};
 
	render(): React.ReactElement<HTMLElement>
	{
		if( this.state.redirectTo )
			return <Navigate to={this.state.redirectTo}/>
	 
		return (
			<>
				<Backdrop
					open={this.state.openCircle}
					sx={{color: "#fff", zIndex: 99}}
				>
					<CircularProgress/>
				</Backdrop>
			 
				{ this.state.msg &&
					<Snackbar
						open={this.state.openPop}
						autoHideDuration={4000}
						onClose={() => this.setState({ openPop: false }) }
					>
						<Alert severity="success">{this.state.msg }</Alert>
					</Snackbar>
				}
			 
				{ this.state.openDialog &&
					<Dialog open={this.state.openDialog}>
						<DialogTitle>"Deletar Conteúdo?"</DialogTitle>
						<DialogActions>
							<Button onClick={() => this.setState({openDialog: false})
								.then( () => this.ApiDelete(this.state.id) ) }>
								Sim
							</Button>
							<Button onClick={() => this.setState({openDialog: false})}>Não</Button>
						</DialogActions>
					</Dialog>
				}
			 
				<Navbar/>
			 
				<Container>
					<Typography color="primary" variant="h3">Lista de Categorias</Typography>
				 
					<Divider sx={{marginBottom: "20px"}}/>
				 
					<Link to="/admin/addPostagens">
						<Button variant="contained" color="success">
							Nova Categoria
						</Button>
					</Link>
				 
					{ (this.state.data && this.state.data.length > 0) &&
					<List>
						{ this.state.data.map( (e: any) =>
						<Card
							sx={{ marginTop: "20px", marginBottom: "20px", padding: "10px" }}
							variant="outlined"
						>
							<ListItem sx={{justifyContent: "space-between"}}>
								<Stack spacing={2}>
									<Typography variant="h5" color="secondary">
										{e.titulo}
									</Typography>
								 
									<ListItemText>Slug: {e.slug}</ListItemText>
								 
									<ListItemText>
										Data de Criação: {e.createdAt}
									</ListItemText>
								</Stack>
							 
								<Stack direction="row" spacing={2}>
									<DeleteForever
										onClick={() => this.setState({openDialog: true, id: e.id})}
										color="primary"
										sx={{cursor: "pointer", marginRight: "15px"}}
									>
									</DeleteForever>
								 
									<Link to={`/admin/editPostagens/?id=${e.id}`}>
										<Edit
											color="primary"
											sx={{cursor: "pointer"}}
										>
										</Edit>
									</Link>
								</Stack>
							</ListItem>
						</Card>
						)}
					</List>
					}
				 
					{ !this.state.data &&
						<Typography variant="h2" sx={{marginTop: "20px"}}>
							Não há dados cadastrados no sistema!
						</Typography>
					}
				</Container>
			</>
		);
	};
};
