import { getCustomRepository } from 'typeorm';

import { INewData } from '../../Interfaces/Main';

import { CategoriasRepo } from '../../Repositories/CategoriasRepositories';

export class NewCategoriasService
{
	async execute( Data: INewData ): Promise< string >
	{
		try
		{
			const categoriasRepo = getCustomRepository( CategoriasRepo );

			Data.slug = Data.slug.replace('/\s/gi', '_').toLowerCase().trim();

			await categoriasRepo.save( Data );

			return "Categoria criada com sucesso!";
		}
		catch( err ) { throw new Error(`Erro ao adicionar: ${err}`) };
	};
};
