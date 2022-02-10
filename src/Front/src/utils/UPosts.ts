export interface IAddPostState
{
	titulo: string;
	slug: string;
	msg: string | number;
	redirectTo: null | string;
	pop: boolean;
};

export interface IEditPostState
{
	newTitulo: string;
	newSlug: string;

	id: string;
	titulo: string;
	slug: string;

	redirectTo: string | null;
	pop: boolean;
	openCircle: boolean;
};
