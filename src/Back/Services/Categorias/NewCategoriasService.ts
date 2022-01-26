import { getCustomRepository } from 'typeorm';

import { CategoriasRepo } from '../../Repositories/CategoriasRepositories';

import { INewData } from '../../Interfaces/Main';

export class NewCategoriasService
{
	async execute( Data: INewData ): Promise< string >
	{
		try
		{
			const categoriasRepo = getCustomRepository( CategoriasRepo );
		 
			await categoriasRepo.save( Data );

			return "Categoria criada com sucesso!";
		}
		catch( err ) { throw new Error(`Erro ao adicionar: ${err}`) };
	};
};
