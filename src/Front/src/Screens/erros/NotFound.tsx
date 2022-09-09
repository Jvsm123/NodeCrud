import { Component } from 'react';

import { NotFoundComponent } from '../../Components/Screens/Erros/NotFoundComponent';

export class NotFound extends Component< {}, {} >
{
    render(): React.ReactElement<HTMLElement> { return <NotFoundComponent/> };
};
