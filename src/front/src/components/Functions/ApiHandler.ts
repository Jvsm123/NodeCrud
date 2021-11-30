export class Api
{
    static async ListAdm(): Promise<Array<{}>>
    {
        const response = await fetch("http://localhost:8080/admin/categorias");
     
        const body = await response.json();
     
        if( response.status !== 200 ) throw new Error( body.message );
     
        return body;
    };
 
    static async SendAdm( data: Object ): Promise<void>
    {
 
    }
};
