import { createConnection, getConnection, Connection } from 'typeorm';

var status = false;

export class Connections
{
	public async GetConnection( db: string ): Promise< Connection >
	{
		if( db === 'mongo' ) return await this.SetMongoConnection();

		else return await this.SetMysqlConnection();
	};
 
	private async SetMysqlConnection(): Promise< Connection >
	{
		try
		{
			if( !status )
			{
				status = true;
			 
				return await createConnection("Mysql");
			};
		 
			return getConnection("Mysql");
		}
		catch( err ) { throw new Error(`Erro ao se conectar: ${err}`) };
	};
 
	private async SetMongoConnection(): Promise< Connection >
	{
		try
		{
			if( !status )
			{
				status = true;
			 
				return await createConnection("MongoDB");
			};
		 
			return getConnection("MongoDB");
		}
		catch( err ) { throw new Error(`Erro ao se conectar: ${err}`) };
	};
};
