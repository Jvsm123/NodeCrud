import { getCustomRepository } from 'typeorm';

import { IEditData } from '../../Interfaces/Main';

import { CategoriasRepo } from '../../Repositories/CategoriasRepositories';

export class EditCategoriasService
{
	async execute( Data: IEditData, ID: string ): Promise< string >
	{
		try
		{
			const categoriasRepo = getCustomRepository( CategoriasRepo );
		 
			let categoria = await categoriasRepo.findOne({ where: { id: ID } });

			if( !categoria ) return "categoria não encontrada!";

			Data.newSlug = Data.newSlug.replace('/\s/gi', '_').toLowerCase().trim();

			Data.newTitulo && (categoria.titulo = Data.newTitulo);
		 
			Data.newSlug && (categoria.slug = Data.newSlug);

			await categoriasRepo.update( ID, categoria );

			return "Categoria editada com sucesso!";
		}
		catch( err ) { throw new Error( `Erro ao editar: ${err}` ) };
	};
};
