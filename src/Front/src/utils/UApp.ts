export interface ITypeProps
{
	type: string;
};

export interface IListState
{
	data: any;
	id: string | null;

	msg?: string;
	openPop: boolean;
	openCircle: boolean;
	openDialog: boolean;
	redirectTo: string | null;
};

export interface IAddState
{
	titulo: string;
	slug: string;
	descricao?: string;
	conteudo?: string | any[any];
	categoria?: string;
	categorias?: readonly string[];

	msg: string | number;
	redirectTo: null | string;
	pop: boolean;
};

export interface IEditState
{
	id: string;
	titulo: string;
	slug: string;
	descricao?: string;
	conteudo?: string | any[any];
	categoria?: string;

	newTitulo: string;
	newSlug: string;
	newDesc?: string;
	newCategoria?: string;
	newConteudo?: string;

	redirectTo: string | null;
	pop: boolean;
	openCircle: boolean;
};

export interface IPostState
{
	post: any[any] | null;
};
