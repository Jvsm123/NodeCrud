import { Component, ReactElement } from 'react';

import { ListComponent } from '../../Components/Screens/App/ListComponent';

export class IndexCategorias extends Component< {}, {} >
{
	render(): ReactElement<HTMLElement> { return <ListComponent type={'categorias'}/> };
};
