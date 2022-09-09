import { Categorias } from '../Database/Entities/Categorias';

export interface INewData
{
	titulo: string;
	slug: string;
	descricao?: string;
	conteudo?: string | any[any];
	categoria?: Categorias;
};

export interface IEditData
{
	titulo: string;
	slug: string;
	descricao?: string;
	conteudo?: string | any[any];
	categoria?: Categorias;

	newTitulo: string;
	newSlug: string;
	newDescricao?: string;
	newConteudo?: string | any[];
	newCategoria?: Categorias;
};
