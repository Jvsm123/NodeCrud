import { Component, ReactElement } from 'react';

import { EditComponent } from '../../components/Screens/Postagens/EditComponent';

export class EditPostagens extends Component< {}, {} >
{
	render(): ReactElement<HTMLElement> { return <EditComponent/> };
};
