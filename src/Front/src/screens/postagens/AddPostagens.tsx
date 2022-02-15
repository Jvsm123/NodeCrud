import { Component, ReactElement } from 'react';

import { AddComponent } from '../../components/Screens/App/AddComponent';

export class AddPostagens extends Component< {}, {} >
{
	render(): ReactElement<HTMLElement> { return <AddComponent type={'postagens'}/> };
};
