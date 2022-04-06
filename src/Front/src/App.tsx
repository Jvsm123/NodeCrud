import { Component, ReactElement } from 'react';

import { Router } from './Screens/router';

export class App extends Component< {}, {} >
{
	render(): ReactElement<HTMLElement> { return <Router/> };
};
