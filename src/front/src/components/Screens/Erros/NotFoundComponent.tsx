import { Component } from 'react';

import {
    Container,
    Button,
    Typography
} from '@mui/material';

export class NotFoundComponent extends Component< {}, {} >
{
    render(): React.ReactElement<HTMLElement>
    {
        return(
            <Container sx={
                {
                    height: "100vh",
                    backgroundColor: "#380000",
                    margin: '0px',
                }}>
                <Container sx={{height: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h3" sx={{color: '#FF4C4C'}}>Ops, temos um problema aqui \^_^/</Typography>
                    <Typography variant="h6" sx={{color: "#B2B2B2", marginTop: "30px", marginBottom: "30px" }}>Essa Página não existe ou não pode ser acessada agora!</Typography>
                    <Button variant="outlined" color="info">Voltar?</Button>
                </Container>
            </Container>
        );
    };
};
