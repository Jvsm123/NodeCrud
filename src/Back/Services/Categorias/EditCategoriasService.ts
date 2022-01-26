import { getCustomRepository } from 'typeorm';

import { CategoriasRepo } from '../../Repositories/CategoriasRepositories';

import { IEditData } from '../../Interfaces/Main';

export class EditCategoriasService
{
	async execute( data: IEditData, ID: string ): Promise< string >
	{
		try
		{
			const categoriasRepo = getCustomRepository( CategoriasRepo );
		 
			let categoria = await categoriasRepo.findOne({ where: { id: ID } });

			if( categoria )
			{
				data.titulo && (categoria.titulo = data.titulo);
		 
				data.slug && (categoria.slug = data.slug);
			}
			else return "categoria não econtrada!";
		 
			await categoriasRepo.update( ID, categoria );

			return "Categoria editada com sucesso!";
		}
		catch( err ) { throw new Error( `Erro ao editar: ${err}` ) };
	};
};
