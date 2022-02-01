import { Categorias } from '../Database/Entities/Categorias';

export interface IEditData
{
	titulo: string;
	newTitulo: string;
	slug: string;
	newSlug: string;
};

export interface INewData
{
	titulo: string;
	slug: string;
};

export interface INewPostagemData
{
	titulo: string;
	slug: string;
	descricao?: string;
	conteudo?: string;
	categoria?: Categorias;
}
