import { Component } from 'react';

import {
    Alert,
    Card,
    CircularProgress,
    Container,
    Backdrop,
    InputLabel,
    TextField,
    Button,
    Typography,
    Snackbar,
    Stack
} from '@mui/material';

import { Navigate } from 'react-router-dom';

import { Api } from '../../Functions/ApiHandler';

import { Navbar } from '../../UI/Navbar/Navbar';

interface State
{
    newTitulo: string;
    newSlug: string;
 
    id: string;
    titulo: string;
    slug: string;
 
    redirectTo: string | null;
    pop: boolean;
    openCircle: boolean;
};

export class EditComponent extends Component< {}, State >
{
    state =
    {
        newTitulo: "",
        newSlug: "",
     
        id: "",
        titulo: "",
        slug: "",
     
        redirectTo: null,
        pop: false,
        openCircle: true
    };
 
    ApiList( id: string ): void
    {
        Api.ListAdm( id ).then( (res: any) => this.setState(
        {
            id: res.id,
            titulo: res.titulo,
            slug: res.slug,
            openCircle: false
        }));
    };
 
    ApiEdit( state: State ): void
    {
        if( state.newTitulo !== "" && state.newSlug !== "" )
        {
            Api.EditAdm( state, this.state.id ).then( (res: string) =>
            {
                sessionStorage.setItem( "msg", res );
             
                this.setState({ redirectTo: "/admin/categorias" });
            });
        }
        else this.setState({ pop: true });
    };
 
    componentDidMount(): void
    {
        const id: string = window.location.search.split('?id=')[1];
     
        this.ApiList( id );
    };
 
    render(): React.ReactElement< HTMLElement >
    {
        if( !this.state.id && !this.state.titulo && !this.state.slug )
            return <CircularProgress/>
     
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

                <Navbar/>
                 
                { this.state.pop &&
                    <Snackbar
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
                 
                <Container sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: "center",
                    justifyContent: "center",
                    height: '80vh'
                }}
                >
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
                            <InputLabel sx={{fontSize: "25px"}}>
                                Novo Titulo:
                            </InputLabel>
                         
                            <TextField
                                placeholder={this.state.titulo}
                                inputProps={{maxLength: 30}}
                                type="text"
                                onChange={(e) => this.setState({newTitulo: e.target.value})}
                            />
                         
                            <InputLabel sx={{fontSize: "25px"}}>
                                Novo Slug:
                            </InputLabel>
                         
                            <TextField
                                placeholder={this.state.slug}
                                inputProps={{maxLength: 30}}
                                type="text"
                                onChange={(e) => this.setState({newSlug: e.target.value})}
                            />
                         
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
                </Container>
            </>
        );
    };
};
