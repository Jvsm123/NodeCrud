import { Component, ReactElement } from 'react';

import { UsuariosComponent } from '../../Components/Screens/Usuarios/UsuariosComponent';

export class IndexUsuarios extends Component< {}, {} >
{
	render():ReactElement { return <UsuariosComponent/> };
};
