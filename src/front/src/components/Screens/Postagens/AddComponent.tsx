import { Component } from 'react';

import {
    Card,
    Container,
    InputLabel,
    TextField,
    Button,
    Typography
} from '@mui/material';

import { Navbar } from '../../UI/Navbar/Navbar';

import { Api } from '../../Functions/ApiHandler';

type State = { nome: string; slug: string; };

export class AddComponent extends Component< {}, State >
{
    state = { nome: "", slug: ""};
 
    Api( state: State ) { Api.SendAdm( state ) };
 
    render(): React.ReactElement<HTMLElement>
    {
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
                                sx={{marginBottom: "15px"}}
                                onChange={(e) => this.setState({nome: e.target.value})}
                            />

                            <InputLabel sx={{fontSize: "25px"}}>Slug:</InputLabel>
                            <TextField
                                onChange={(e) => this.setState({slug: e.target.value})}
                            />

                            <Button
                                variant="contained"
                                color="success"
                                sx={{marginTop: "25px"}}
                                onClick={() => this.Api(this.state)}
                            >Criar Categeoria</Button>
                        </Card>
                    </Container>
                </Container>
            </>
        );
    };
};
