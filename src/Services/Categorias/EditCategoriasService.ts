import { getCustomRepository } from 'typeorm';

import { ObjectId } from 'mongodb';

import { CategoriasMongoRepo } from '../../Repositories/CategoriasRepositories';

import { Connections } from '../../Database/Connection';

import { IEditData } from '../../Interfaces/Main';

export class EditCategoriasService
{
	async execute( data: IEditData, ID: string ): Promise< string | undefined >
	{
		try
		{
			const instanceConnection = new Connections();
		 
			const mongoConnection = await instanceConnection
			.GetConnection('mongo');
		 
			const categoriasMongoRepo = mongoConnection
			.getCustomRepository( CategoriasMongoRepo );
		 
			let newCategoria = await categoriasMongoRepo
			.findOne({ id: ObjectId(ID) });
		 
			if( newCategoria )
			{
				newCategoria.titulo = (data.titulo === data.newTitulo)
					? data.titulo : data.newTitulo;
		 
				newCategoria.slug = (data.slug === data.newSlug)
					? data.slug : data.newSlug;
		 
				return await categoriasMongoRepo
					.update( ID, newCategoria )
					.then( () => { return "alterado com sucesso!" } );
			};
		}
		catch( err ) { throw new Error( `Erro ao editar: ${err}` ) };
	};
};
