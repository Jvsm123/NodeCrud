interface IData
{
    nome: string;
    slug: string;
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
 
    static async SendAdm( { nome, slug }: IData ): Promise< void >
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
            throw new Error( body.message );
     
        return body;
    };
};
