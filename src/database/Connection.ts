import { createConnection, getConnection } from 'typeorm';

var status = false;

export class Connection
{
    public async GetConnection( db: string ): Promise<any | boolean>
    {
        if( db === 'mongo' ) return await this.SetMongoConnection();
        if( db === 'mysql' ) return await this.SetMongoConnection();
    };
 
    private async SetMysqlConnection(): Promise<any>
    {
        if( !status )
        {
            status = true;
         
            return await createConnection("Mysql");
        };
     
        return await getConnection("MongoDB");
    };
 
    private async SetMongoConnection(): Promise<any>
    {
        if( !status )
        {
            status = true;
         
            return await createConnection("MongoDB");
        };
     
        return await getConnection("MongoDB");
    };
};
