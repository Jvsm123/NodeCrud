interface IDataSend
{
    nome: string;
    slug: string;
};

interface IDataEdit extends IDataSend
{
    id: string;
};

export class Api
{
    static async ListAdm( id?: string ): Promise< any >
    {
        let url = "http://localhost:8080/admin/categorias";
     
        if( id ) url += `?id=${id}`;
     
        const response = await fetch( url );
     
        const body = await response.json();
     
        if( response.status !== 200 ) throw new Error( body.message );
     
        return body;
    };
 
    static async SendAdm( { nome, slug }: IDataSend ): Promise< string >
    {
        const response = await fetch (
            "http://localhost:8080/admin/addPostagens",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify (
                {
                    nome: nome,
                    slug: slug
                })
            }
        );
     
        const body = await response.json();
     
        if( response.status !== 200 ) return "ERR";
     
        return body;
    };
 
    static async EditAdm( state: any, id: any ): Promise< string >
    {
        const response = await fetch(
            `http://localhost:8080/categorias/edit/${id}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                {
                    titulo: state.nome,
                    slug: state.slug,
                    id: id
                })
            }
        );
     
        const body = await response.json();
     
        if( response.status !== 200 )
            return "ERRR";
     
        return body;
    };
};
