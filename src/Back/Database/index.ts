import { createConnection, getConnection } from 'typeorm';

const tryConnection = async () =>
{
	try
	{
		return await createConnection();
	}
	catch( err )
	{
		setInterval( createConnection, 2000 );

		const conn = getConnection();

		if( conn !instanceof Error )
		{
			clearInterval();

			await conn.connect();
		};
	}
}

tryConnection();
