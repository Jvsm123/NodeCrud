import { Component, ReactElement } from 'react';

import { Router } from './screens/router';

export class App extends Component< {}, {} >
{
    render(): ReactElement<HTMLElement> { return <Router/> };
};
