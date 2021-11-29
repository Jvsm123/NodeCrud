import { Component } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TypoGraphy from '@mui/material/Typography';

import { Navbar } from '../../UI/Navbar/Navbar';

import { Api } from '../../Functions/ApiHandler';

type State = { data: Array<Object | never[]> };

export class ListComponent extends Component< {}, State >
{
    state = { data: [] };
 
    async componentDidMount(): Promise<void>
    {
        const data: Array<Object> = await Api();

        this.setState( { data: data } )
    };
 
    render(): React.ReactElement<HTMLElement>
    {
        console.log( this.state )
        if( this.state.data )
            return (
            <>
                <Navbar/>

                <List>
                    {this.state.data.map( (e: any) =>
                        <ListItem>
                            <TypoGraphy font-size="22pt" variant="body1"
                                color="primary"
                            >
                                {e.titulo}
                            </TypoGraphy>
                            <ListItemText>{e.conteudo}</ListItemText>
                        </ListItem>
                    )}
                </List>
            </>
            );
        else return <Navbar/>
    };
};
