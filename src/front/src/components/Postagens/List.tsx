import { Component } from 'react';

// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { Api } from '../Functions/Api';

type State = { data: Array<any | never[]> };

export class ListPost extends Component< {}, State >
{
    state = { data: [] };
 
    async componentDidMount()
    {
        const res = await Api();
     
        this.setState( { data: res } );
     
        console.log( this.state.data );
    };
 
    render(): React.ReactElement<HTMLElement>
    {
        return (
            <List>
                <ListItem>
                    <h1>teste de render</h1>
                    <ListItemText>
                        <p>
                            Adipisicing quod repellat doloremque debitis
                            sapiente, neque Officia mollitia veritatis ipsam
                            error dolores. Itaque at iusto blanditiis nam omnis
                            Magnam veritatis totam explicabo at quae? Aspernatur
                            doloribus illum consequuntur dolores
                        </p>
                    </ListItemText>
                </ListItem>
            </List>
        );
    };
};
