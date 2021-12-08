import { Component } from 'react';

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

import { Navigate } from 'react-router-dom';

import { Api } from '../../Functions/ApiHandler';

import { Navbar } from '../../UI/Navbar/Navbar';

interface State
{
    id: string | null
    titulo: string | null;
    nome: string | null;
    slug: string | null;
    redirectTo: string | null;
    pop: boolean;
};

export class EditComponent extends Component< {}, State >
{
    state =
    {
        id: null,
        titulo: null,
        nome: null,
        slug: null,
        redirectTo: null,
        pop: false
    };
 
    ApiGet( id: string ): void
    {
        Api.ListAdm( id ).then( (res: any) =>
        {
            this.setState(
            {
                id: res.id,
                titulo: res.titulo,
                nome: res.titulo,
                slug: res.slug
            });
        });
    };
 
    ApiSend( state: State ): void
    {
        if( state.nome !== "" && state.slug !== "" )
        {
            Api.EditAdm( state, this.state.id ).then( (res: string) =>
            {
                sessionStorage.setItem("msg", res);
             
                this.setState({ redirectTo: "/admin/categorias" });
            });
        }
        else this.setState({ pop: true });
    };
 
    componentDidMount(): void
    {
        const id: string = window.location.search;
     
        this.ApiGet(window.location.search);
    };
 
    render(): React.ReactElement<HTMLElement>
    {
        console.log( this.props );
     
        return (
            <>
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
                        <Typography
                            variant="h2"
                            sx={
                            {
                                alignSelf: "flex-start",
                                marginBottom:"15px",
                                color: "#707070"
                            }}
                        >
                            Editar {this.state.titulo}
                        </Typography>
                     
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
                            <InputLabel sx={{fontSize: "25px"}}
                            >
                                Novo Titulo: {this.state.titulo}
                            </InputLabel>
                            <TextField
                                inputProps={{maxLength: 30}}
                                type="text"
                                onChange={(e) => this.setState({nome: e.target.value})}
                            />
                         
                            <InputLabel sx={{fontSize: "25px"}}>
                                Novo Slug: {this.state.slug}
                            </InputLabel>
                            <TextField
                                inputProps={{maxLength: 30}}
                                type="text"
                                onChange={(e) => this.setState({slug: e.target.value})}
                            />
                         
                            <Button
                                variant='contained'
                                color="info"
                                sx={{marginTop: '25px'}}
                                onClick={() => this.ApiSend(this.state)}
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
