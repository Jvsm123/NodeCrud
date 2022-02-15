import { IDataSend, IDataEdit } from '../../utils/UFunctions';

export class Api
{
	static async ListAdm( type: string, id?: string ): Promise< any >
	{
		let url = `http://localhost:8081/backend/admin/${type}/all`;
	 
		if( id ) url += `?id=${id}`;
	 
		const response = await fetch( url );
	 
		if( response.status !== 200 ) throw new Error( "ERRO" );
	 
		const body = await response.json();
	 
		return body;
	};
 
	static async SendAdm( type: string, { titulo, slug }: IDataSend ): Promise< string >
	{
		const response = await fetch (
			`http://localhost:8081/backend/admin/${type}/add`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify (
				{
					titulo: titulo,
					slug: slug
				})
			}
		);
	 
		if( response.status !== 200 ) return "ERR";
	 
		const body = await response.json();
	 
		return body;
	};
 
	static async EditAdm( type: string, state: IDataEdit, ID: string ): Promise< string >
	{
		const response = await fetch(
			`http://localhost:8081/backend/admin/${type}/edit/${ID}`,
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(
				{
					titulo: state.titulo,
					newTitulo: state.newTitulo,
					slug: state.slug,
					newSlug: state.newSlug,
				})
			}
		);
	 
		if( response.status !== 200 ) return "ERRR";
	 
		const body = await response.json();
	 
		return body;
	};
 
	static async RemoveAdm( type: string, ID: string ): Promise< string >
	{
		const response = await fetch (
			`http://localhost:8081/backend/admin/${type}/remove/${ID}`,
			{ method: "DELETE" }
		);
	 
		if( response.status !== 200 ) return "ERRR";
	 
		const body = await response.json();
	 
		return body;
	};
};
