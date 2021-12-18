import { createConnection, getConnection } from 'typeorm';

var status = false;

export class Connection
{
	public async GetConnection( db: string ): Promise< any | boolean >
	{
		if( db === 'mongo' ) return await this.SetMongoConnection();
		if( db === 'mysql' ) return await this.SetMongoConnection();
	};
 
	private async SetMysqlConnection(): Promise< any >
	{
		try
		{
			if( !status )
			{
				status = true;
			 
				return await createConnection("Mysql");
			};
		 
			return await getConnection("Mysql");
		}
		catch( err ) { throw new Error(`Erro ao se conectar: ${err}`) };
	};
 
	private async SetMongoConnection(): Promise< any >
	{
		try
		{
			if( !status )
			{
				status = true;
			 
				return await createConnection("MongoDB");
			};
		 
			return await getConnection("MongoDB");
		}
		catch( err ) { throw new Error(`Erro ao se conectar: ${err}`) };
	};
};
