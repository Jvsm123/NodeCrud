export interface IResults
{
	titulo: string;
	slug: string;
	descricao?: string;
	conteudo?: string | any[any];
	categoria?: string;
}

export interface IPostState
{
	post: Array< IResults > | null;
};

export interface ICategoriasState
{
	categorias: [] | IResults[];
};

export interface ITypeProps { type: string };

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
	categorias?: Array< string > | null;

	msg: string | number;
	redirectTo: string | null;
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

