export interface IDataSend
{
	titulo: string;
	slug: string;
	conteudo?: string;
	descricao?: string;
	categoria?: string;
};

export interface IDataEdit
{
	titulo: string;
	slug: string;
	newTitulo?: string;
	newSlug?: string
	conteudo?: string;
	descricao?: string;
	categoria?: string;
};
