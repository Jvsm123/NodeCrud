export const init = () =>
{
	process.env.TYPEORM_URL = process.env['DATABASE_URL'];
	process.env.PORT = '8080';
}
