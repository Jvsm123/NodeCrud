import { createConnection } from 'typeorm';

const tryConnection = async () =>
{
	try { return await createConnection() }
	catch( err )
	{
		console.error( err );

		console.warn(" Tentaremos uma nova conexão em breve... ");

		const stop = ( connection: any ) =>
		{
			clearInterval( refresh );

			console.log("Conectado!");

			return connection;
		};

		const init = async () =>
		{
			console.log("\nTentando conexão...");

			let reset = async () =>
			{
				try { return await createConnection() }
				catch( err ) { return err };
			};

			reset().then( ( res: any ) =>
			{
				if( res instanceof Error )
				{
					console.warn("Erro ao tentar se conectar: \n" + res);

					console.log("Tentaremos em breve outra vez...");
				}
				else stop( reset );
			});
		};

		let refresh = setInterval( init, 150000 );
	};
};

tryConnection();
