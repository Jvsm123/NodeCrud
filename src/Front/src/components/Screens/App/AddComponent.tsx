import { Component, ReactElement } from 'react';

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

import { Navbar } from '../../UI/Navbar';

import { Navigate } from 'react-router-dom';

import { Api } from '../../Functions/ApiHandler';

import { ITypeProps } from '../../../utils/UApp';

import { IAddPostState } from '../../../utils/UPosts';

export class AddComponent extends Component< ITypeProps, IAddPostState >
{
    state =
    {
        titulo: "",
        slug: "",
        redirectTo: null,
        msg: "",
        pop: false
    };
 
    Api( state: IAddPostState ): void
    {
        if( state.titulo !== "" && state.slug !== "" )
        {
            const { titulo, slug } = state;
         
            Api.SendAdm( this.props.type, { titulo: titulo, slug: slug })
            .then( ( res: string ) =>
            {
                sessionStorage.setItem("msg", res );
             
                this.setState({ redirectTo: `/admin/${this.props.type}` });
            });
        }
        else this.setState({ pop: true });
    };
 
    render(): ReactElement<HTMLElement>
    {
        if( this.state.redirectTo )
            return <Navigate to={this.state.redirectTo} state={this.state.msg}/>
     
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
	                    { this.props.type === "categorias" && 'Nova Categoria'}
	                    { this.props.type === "postagens" && 'Nova Postagem'}
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
                            >Criar Categeoria
						</Button>
                    </Card>
                </Container>
            </>
        );
    };
};
