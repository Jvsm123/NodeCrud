import { getCustomRepository } from 'typeorm';

import { ObjectId } from 'mongodb';

import { CategoriasMongoRepo } from '../../Repositories/CategoriasRepositories';

import { Connection } from '../../Database/Connection';

interface IData
{
	titulo: string;
	newTitulo: string;
	slug: string;
	newSlug: string;
};

export class EditCategoriasService
{
	async execute( data: IData, ID: string ): Promise< string | undefined >
	{
		try
		{
			const instanceConnection = new Connection();
		 
			const mongoConnection = await instanceConnection
			.GetConnection('mongo');
		 
			const categoriasMongoRepo = await mongoConnection
			.getCustomRepository( CategoriasMongoRepo );
		 
			let newCategoria = await categoriasMongoRepo
			.findOne({ _id: ObjectId(ID) });
		 
			newCategoria.titulo = (data.titulo === data.newTitulo)
				? data.titulo : data.newTitulo;
		 
			newCategoria.slug = (data.slug === data.newSlug)
				? data.slug : data.newSlug;
		 
			return await categoriasMongoRepo
			.update( ID, newCategoria )
			.then( () => { return "alterado com sucesso!" } );
		}
		catch( err ) { throw new Error( `Erro ao editar: ${err}` ) };
	};
};
