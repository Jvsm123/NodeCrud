import { Component } from 'react'

import { Button, Container } from '@mui/material/';

import { Navbar } from '../../UI/Navbar/Navbar';

export class AdminComponent extends Component< {}, {} >
{
    render(): React.ReactElement<HTMLElement>
    {
        return (
            <>
                <Navbar/>
             
                <Container>
                    <Button variant="contained" color="success">
                        conteúdo aqui;
                    </Button>
                </Container>
            </>
        );
    };
};
