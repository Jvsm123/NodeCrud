import { Component, ReactElement } from 'react';

import { ListComponent } from '../../components/Screens/App/ListComponent';

export class IndexPostagens extends Component< {}, {} >
{
	render(): ReactElement<HTMLElement> { return <ListComponent type={'postagens'}/> };
};
