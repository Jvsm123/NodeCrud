import { createConnection } from 'typeorm';

interface IConnection<T>
{
    private static connection: null | [T];
    public GetConnection: Function;
    private GetMysqlConnection: Function;
    private GetMongoConnection: Function;
}

export class Connection implements IConnection
{
    private static connection: null | [T] = null;
 
    constructor()
    {
        static private this.connection = null;
    };
 
    public async GetConnection( db: string ): Promise<any> | boolean
    {
        if( this.connection ) return true;
     
        if( db === 'mongo' ) return await this.GetMongoConnection();
        if( db === 'mysql' ) return await this.GetMongoConnection();
    };
 
    private async GetMysqlConnection(): Promise<any>
    {
        return await createConnection("Mysql");
    };
 
    private async GetMongoConnection(): Promise<any>
    {
        return await createConnection("Mongo");
    };
};
