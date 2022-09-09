import { Component, ReactElement } from 'react';

import { EditComponent } from '../../Components/Screens/App/EditComponent';

export class EditPostagens extends Component< {}, {} >
{
	render(): ReactElement<HTMLElement> { return <EditComponent type={'post'}/> };
};
