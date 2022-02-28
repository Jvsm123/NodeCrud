import { Component, ReactElement } from 'react';

import { HomeComponent } from '../../components/Screens/Home/HomeComponent';

export class IndexHome extends Component< {}, {} >
{
	render(): ReactElement<HTMLElement> { return <HomeComponent/> };
};
