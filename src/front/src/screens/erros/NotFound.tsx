import { Component } from 'react';

import { NotFoundComponent } from '../../components/Screens/Erros/NotFoundComponent';

export class NotFound extends Component< {}, {} >
{
    render(): React.ReactElement<HTMLElement> { return <NotFoundComponent/> };
};
