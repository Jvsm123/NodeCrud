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

interface ILocationProps
{
    titulo?: string;
    slug?: string;
    id?: string;
};

interface State
{
    nome: string | undefined;
    slug: string | undefined;
    redirectTo: null | string;
    pop: boolean;
};

export class EditComponent extends Component< ILocationProps, State >
{
    state =
    {
        nome: this.props.titulo,
        slug: this.props.slug,
        redirectTo: null,
        pop: false
    };
 
    Api( state: State ): void
    {
        if( state.nome !== "" && state.slug !== "" )
        {
            const { nome, slug } = state;
         
            Api.EditAdm({ nome: nome, slug: slug, id: this.props.id })
            .then( (res: string) =>
            {
                sessionStorage.setItem("msg", res);
             
                this.setState({ redirectTo: "/admin/categorias" });
            });
        }
        else this.setState({ pop: true });
    };
 
    render(): React.ReactElement<HTMLElement>
    {
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
                            Editar {this.props.titulo}
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
                                Novo Titulo: {this.props.titulo}
                            </InputLabel>
                            <TextField
                                inputProps={{maxLength: 30}}
                                type="text"
                                onChange={(e) => this.setState({nome: e.target.value})}
                            />
                         
                            <InputLabel sx={{fontSize: "25px"}}>
                                Novo Slug: {this.props.slug}
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
                                onClick={() => this.Api(this.state)}
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
