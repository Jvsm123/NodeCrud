import { Component } from 'react';

import {
    Container,
    Button,
    CircularProgress,
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography
} from '@mui/material';

import { Link } from 'react-router-dom';

import { Navbar } from '../../UI/Navbar/Navbar';

import { Api } from '../../Functions/ApiHandler';

type State = { data: Array<Object | never[]> };

export class ListComponent extends Component< {}, State >
{
    state = { data: [] };
 
    async componentDidMount(): Promise<void>
    {
        const data: Array<Object> = await Api.ListAdm();
     
        this.setState( { data: data } )
    };
 
    render(): React.ReactElement<HTMLElement>
    {
        if( this.state.data )
        {
            return (
                <>
                    <Navbar/>
                 
                    <Container>
                        <Typography color="primary" variant="h3">Lista de Categorias</Typography>
                     
                        <Divider sx={{marginBottom: "10px"}}/>
                     
                        <Link to="/admin/addPostagens">
                            <Button variant="contained" color="success">
                                Nova Categoria
                            </Button>
                        </Link>
                     
                        <List>
                            {this.state.data.map( (e: any) =>
                                <ListItem>
                                    <Typography variant="h5" color="secondary">
                                        {e.titulo}
                                    </Typography>
                                 
                                    <ListItemText>{e.conteudo}</ListItemText>
                                </ListItem>
                            )}
                        </List>
                    </Container>
                </>
            );
        }
        else return <CircularProgress color="secondary" variant="indeterminate"/>;
    };
};
