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
    static async ListAdm(): Promise< Array< {} > >
    {
        const response = await fetch("http://localhost:8080/admin/categorias");
     
        const body = await response.json();
     
        if( response.status !== 200 )
            throw new Error( body.message );
     
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
     
        if( response.status !== 200 )
            return "ERR";
     
        return body;
    };
 
    static async EditAdm( { nome, slug, id }: IDataEdit ): Promise< string >
    {
        const response = await fetch(
            `http://localhost:8080/categorias/edit/${id}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                {
                    titulo: nome,
                    slug: slug,
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
