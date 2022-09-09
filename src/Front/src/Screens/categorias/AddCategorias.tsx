import { Component, ReactElement } from 'react';

import { AddComponent } from '../../Components/Screens/App/AddComponent';

export class AddCategorias extends Component< {}, {} >
{
	render(): ReactElement<HTMLElement> { return <AddComponent type={"categorias"}/> };
};
