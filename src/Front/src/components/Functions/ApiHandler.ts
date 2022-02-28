import { TDataSend, TDataEdit } from '../../utils/UFunctions';

const base: string = "http://localhost:8081/backend/admin/";

export class Api
{
	static async List( type: string ): Promise< any[] >
	{
		const response = await fetch( `${base}${type}/all` );

		if( response.status !== 200 ) throw new Error( "ERRO" );

		const body = await response.json();

		return body;
	};

	static async ListOne( type: string, id: string ): Promise< any[] >
	{
		const response = await fetch( `${base}${type}/one/${id}` );

		if( response.status !== 200 ) throw new Error( "ERRO" );

		const body = await response.json();

		return body;
	}

	static async Send( type: string, state: TDataSend ): Promise< string >
	{
		console.log( state );

		const response = await fetch( `${base}${type}/add`,
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify (
			{
				titulo: state.titulo,
				slug: state.slug,
				descricao: state.descricao,
				conteudo: state.conteudo,
				categoria: state.categoria
			})
		});

		if( response.status !== 200 ) return "ERR";

		const body = await response.json();

		return body;
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
