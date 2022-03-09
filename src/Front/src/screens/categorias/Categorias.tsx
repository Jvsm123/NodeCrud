import { Component, ReactElement } from 'react';

import { Categorias as Categoria } from '../../components/Screens/Categorias/Categorias';

export class Categorias extends Component< {}, {} >
{
	render(): ReactElement< HTMLElement > { return <Categoria type={"categorias"}/> };
};
