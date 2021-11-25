import { Component } from 'react';
import { ListPost } from '../../components/Postagens/List';

export class Listagem extends Component< {}, {} >
{
    render(): React.ReactElement<HTMLElement> { return <ListPost/> };
};
