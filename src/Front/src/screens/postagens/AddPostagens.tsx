import { Component, ReactElement } from 'react';

import { AddComponent } from '../../components/Screens/Postagens/AddComponent';

export class AddPostagens extends Component< {}, {} >
{
    render(): ReactElement<HTMLElement> { return <AddComponent/> };
};
