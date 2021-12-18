import { Component } from 'react';

import { ListComponent } from '../../components/Screens/Postagens/ListComponent';

export class IndexPostagens extends Component< {}, {} >
{
    render(): React.ReactElement<HTMLElement> { return <ListComponent/> };
};
