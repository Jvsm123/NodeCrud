import ora from 'ora';
import listr from 'listr';
import shell from 'shelljs';
import inquirer from 'inquirer';

const init = () =>
{
	inquirer.prompt(
	[
		{
			type: "list",
			name: "manager",
			message: "Qual gerênciador de pacotes gostária de usar?",
			choices: [ "Npm", "Yarn" ]
		},
		{
			type: "list",
			name: "environment",
			message: "Como deseja executar?",
			choices: [ "Docker", "Nativo" ]
		}
	])
	.then( ( options )  =>
	{
		const tasks = [];

		const spin = ora();

		const { manager, environment } = options;

		( manager === "Npm" ) && tasks.push(
		{
			title: "Instalando dependências",
			task: () =>
			{
				spin.text = "Configurando Backend";
				spin.start();

				shell.cd("./src/Back");
				shell.exec("npm install");

				spin.stop();
				spin.text = "Configurando Frontend";
				spin.start();

				shell.cd("-");
				shell.cd("./src/Front");
				shell.exec("npm install");

				shell.cd("..");
				shell.cd("..");

				spin.stop();
			}
		})

		||

		tasks.push(
		{
			title: "Instalando dependências",
			task: () =>
			{
				spin.text = "Configurando Backend";
				spin.start();

				shell.cd("./src/Back");
				shell.exec("\nyarn install");

				spin.stop();

				spin.text = "Configurando Frontend";
				spin.start();

				shell.cd("-");
				shell.cd("./src/Front")
				shell.exec("\nyarn install");

				shell.cd("..");
				shell.cd("..");

				spin.stop();
			}
		});

		new listr(tasks)
			.run()
			.then( () =>
			{
				(environment === "Nativo")
					&& shell.echo("para rodar, basta digitar 'npm run app' na raiz do projeto ;)");

				(environment === "Docker")
					&& shell.echo("Para rodar, basta digitar 'npm run docker' na raiz do projeto :)");
			})
			.catch( err => console.error("houve um problema aqui: ", err) );
	});
}

init();
