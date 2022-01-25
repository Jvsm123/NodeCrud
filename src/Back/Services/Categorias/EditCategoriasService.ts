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
		 
			let newCategoria = await categoriasRepo.findOne({ where: { id: ID } });

			if( !newCategoria ) throw new Error("Erro, não há categorias com essa ID!");
		 
			newCategoria.titulo = (data.titulo === data.newTitulo)
				? data.titulo : data.newTitulo;
		 
			newCategoria.slug = (data.slug === data.newSlug)
				? data.slug : data.newSlug;
		 
			await categoriasRepo.update( ID, newCategoria )

			return "Categoria criada com sucesso!";
		}
		catch( err ) { throw new Error( `Erro ao editar: ${err}` ) };
	};
};
