import { getCustomRepository } from 'typeorm';

import { IEditData } from '../../Interfaces/Main';

import { CategoriasRepo } from '../../Repositories/CategoriasRepositories';

export class EditCategoriasService
{
	async execute( data: IEditData, ID: string ): Promise< string >
	{
		try
		{
			const categoriasRepo = getCustomRepository( CategoriasRepo );
		 
			let categoria = await categoriasRepo.findOne({ where: { id: ID } });

			if( !categoria ) return "categoria não encontrada!";

			data.titulo && (categoria.titulo = data.titulo);
		 
			data.slug && (categoria.slug = data.slug);

			await categoriasRepo.update( ID, categoria );

			return "Categoria editada com sucesso!";
		}
		catch( err ) { throw new Error( `Erro ao editar: ${err}` ) };
	};
};
