import { Component } from 'react';

import {
    Alert,
    Card,
    Container,
    Button,
    Backdrop,
    CircularProgress,
    Divider,
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

import { Link } from 'react-router-dom';

import { Navbar } from '../../UI/Navbar/Navbar';

import { Api } from '../../Functions/ApiHandler';

type State =
{
    data: Array< Object | never[] >;
    msg?: string;
    openPop: boolean;
    openCircle: boolean;
};

export class ListComponent extends Component< {}, State >
{
    state =
    {
        data: [],
        msg: "",
        openPop: true,
        openCircle: true
    };
 
    async componentDidMount(): Promise<void>
    {
        const data: Array< Object > = await Api.ListAdm();
     
        console.log( data );
     
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
        if( this.state.data )
        {
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
                 
                    <Navbar/>
                 
                    <Container>
                        <Typography color="primary" variant="h3">Lista de Categorias</Typography>
                     
                        <Divider sx={{marginBottom: "20px"}}/>
                     
                        <Link to="/admin/addPostagens">
                            <Button variant="contained" color="success">
                                Nova Categoria
                            </Button>
                        </Link>
                     
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
                                         
                                            <ListItemText>
                                                Slug: {e.slug}
                                            </ListItemText>

                                            <ListItemText>
                                                Data de Criação: {e.createdAt}
                                            </ListItemText>
                                        </Stack>

                                        <Stack direction="row" spacing={2}>
                                            <DeleteForever
                                                onClick={() => alert("A")}
                                                color="primary"
                                                sx={{cursor: "pointer", marginRight: "15px"}}
                                            >
                                            </DeleteForever>
                                     
                                            <Link to={`/admin/editPostagens/${e.id}`}>
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
                    </Container>
                </>
            );
        }
        else return <CircularProgress color="secondary" variant="indeterminate"/>;
    };
};
