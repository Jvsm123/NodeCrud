import { Component, ReactElement } from 'react';

import { HomeComponent } from '../../Components/Screens/Home/HomeComponent';

export class IndexHome extends Component< {}, {} >
{
	render(): ReactElement<HTMLElement> { return <HomeComponent/> };
};
