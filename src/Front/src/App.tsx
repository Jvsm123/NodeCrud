import { Component } from 'react';
import { Router } from './screens/router';

export class App extends Component< {}, {} >
{
    render(): React.ReactElement<HTMLElement> { return <Router/> };
};
