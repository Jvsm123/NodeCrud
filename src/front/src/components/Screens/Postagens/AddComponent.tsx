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

import { Navbar } from '../../UI/Navbar/Navbar';

import { Api } from '../../Functions/ApiHandler';

interface State
{
    titulo: string;
    slug: string;
    msg: string | number;
    redirectTo: null | string;
    pop: boolean;
};

export class AddComponent extends Component< {}, State >
{
    state =
    {
        titulo: "",
        slug: "",
        redirectTo: null,
        msg: "",
        pop: false
    };
 
    Api( state: State ): void
    {
        if( state.titulo !== "" && state.slug !== "" )
        {
            const { titulo, slug } = state;
         
            Api.SendAdm({ titulo: titulo, slug: slug })
            .then( ( res: string ) =>
            {
                sessionStorage.setItem("msg", res );
             
                this.setState({ redirectTo: "/admin/categorias" });
            });
        }
        else this.setState({ pop: true });
    };
 
    render(): React.ReactElement<HTMLElement>
    {
        if( this.state.redirectTo )
            return <Navigate
                to={this.state.redirectTo}
                state={this.state.msg}
            />
     
        return(
            <>
                <Navbar/>
             
                { this.state.pop &&
                    <Snackbar
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
             
                <Container sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: "center",
                    justifyContent: "center",
                    height: '80vh'
                }}>
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
                            Nova Categoria
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

                            <Button
                                variant="contained"
                                color="success"
                                sx={{marginTop: "25px"}}
                                onClick={() => this.Api(this.state) }
                            >Criar Categeoria</Button>
                        </Card>
                    </Container>
                </Container>
            </>
        );
    };
};
