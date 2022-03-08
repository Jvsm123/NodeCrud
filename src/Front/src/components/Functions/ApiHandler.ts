import { TDataSend, TDataEdit } from '../../utils/UFunctions';

import { IResults } from '../../utils/UApp';

const base: string = "http://localhost:8081/backend/admin/";

export class Api
{
	static async List( type: string ): Promise< [IResults] >
	{
		const response = await fetch( `${base}${type}/all` );

		if( response.status !== 200 ) throw new Error( "ERRO" );

		const body = await response.json();

		return body;
	};

	static async ListOne( type: string, ID: string ): Promise< IResults[] >
	{
		const response = await fetch( `${base}${type}/one/${ID}` );

		if( response.status !== 200 ) throw new Error( "ERRO" );

		const body = await response.json();

		return body;
	};

	static async ListRelated( type: string ): Promise< [IResults] >
	{
		const response = await fetch( `${base}${type}/all/related` );

		if( response.status !== 200 ) throw new Error( "Erro" );

		const body = await response.json();

		if( typeof body === "string") throw new Error(`Erro: ${body}`);

		return body;
	};

	static async Send( type: string, state: TDataSend ): Promise< string >
	{
		let body: any = { titulo: state.titulo, slug: state.slug };

		if( type === "postagens" )
		{
			body.descricao = state.descricao;
			body.conteudo = state.conteudo;
			body.categoria = state.categoria;
		}

		const response = await fetch( `${base}${type}/add`,
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify( body )
		});

		if( response.status !== 200 ) return response.statusText;

		const result = await response.json();

		return result;
	};

	static async Edit( type: string, state: TDataEdit, ID: string ): Promise< string >
	{
		const response = await fetch( `${base}${type}/edit/${ID}`,
		{
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(
			{
				titulo: state.titulo,
				slug: state.slug,
				newTitulo: state.newTitulo,
				newSlug: state.newSlug,
				descricao: state.newDesc,
				conteudo: state.newConteudo,
				categoria: state.newCategoria
			})
		});

		if( response.status !== 200 ) return "ERRR";

		const body = await response.json();

		return body;
	};

	static async Remove( type: string, ID: string ): Promise< string >
	{
		const response = await fetch( `${base}${type}/remove/${ID}`,
		{
			method: "DELETE"
		});

		if( response.status !== 200 ) return "ERRR";

		const body = await response.json();

		return body;
	};
};
