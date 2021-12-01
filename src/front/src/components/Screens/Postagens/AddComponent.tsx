import { Component } from 'react';

import {
    Card,
    Container,
    InputLabel,
    TextField,
    Button,
    Typography
} from '@mui/material';

import { Navigate } from 'react-router-dom';

import { Navbar } from '../../UI/Navbar/Navbar';

import { Api } from '../../Functions/ApiHandler';

type State =
{
    nome: string;
    slug: string;
    redirectTo: null | string;
};

export class AddComponent extends Component< {}, State >
{
    state = { nome: "", slug: "", redirectTo: null };
 
    Api( state: State ): React.ReactElement<undefined> | void
    {
        if( state.nome !== "" && state.slug !== "")
        {
            const { nome, slug } = state;
         
            Api.SendAdm({ nome: nome, slug: slug });
         
            this.setState({ redirectTo: "/admin/categorias" });
        }
        else alert("Dados invalidos!");
    };
 
    render(): React.ReactElement<HTMLElement>
    {
        if( this.state.redirectTo )
            return <Navigate to={this.state.redirectTo}/>
     
        return(
            <>
                <Navbar/>
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
                            <InputLabel sx={{fontSize: "25px"}}>Nome:</InputLabel>
                            <TextField
                                type="text"
                                inputProps={{maxLength: 30}}
                                sx={{marginBottom: "15px"}}
                                onChange={(e) => this.setState({nome: e.target.value})}
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
