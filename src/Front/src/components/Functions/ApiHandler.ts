interface IDataSend
{
	titulo: string;
	slug: string;
};

interface IDataEdit
{
	titulo: string;
	newTitulo: string;
	slug: string;
	newSlug: string;
};

export class Api
{
	static async ListAdm( id?: string ): Promise< any >
	{
		let url = "http://localhost:80/backend/admin/categorias/all";
	 
		if( id ) url += `?id=${id}`;
	 
		const response = await fetch( url );
	 
		if( response.status !== 200 ) throw new Error( "ERRO" );
	 
		const body = await response.json();
	 
		return body;
	};
 
	static async SendAdm( { titulo, slug }: IDataSend ): Promise< string >
	{
		const response = await fetch (
			"http://localhost:80/backend/admin/categorias/add",
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
 
	static async EditAdm( state: IDataEdit, ID: string ): Promise< string >
	{
		const response = await fetch(
			`http://localhost:80/backend/admin/categorias/edit/${ID}`,
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
 
	static async RemoveAdm( ID: string ): Promise< string >
	{
		const response = await fetch (
			`http://localhost:80/backend/admin/categorias/remove/${ID}`,
			{ method: "DELETE" }
		);
	 
		if( response.status !== 200 ) return "ERRR";
	 
		const body = await response.json();
	 
		return body;
	};
};
