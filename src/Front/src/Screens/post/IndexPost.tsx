import { Component, ReactElement } from 'react';

import { PostComponent } from '../../Components/Screens/Post/PostComponent';

export class IndexPost extends Component< {}, {} >
{
	render(): ReactElement<HTMLElement> { return <PostComponent/> };
};
