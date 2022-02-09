import ora from 'ora';
import chalk from 'chalk';
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

		const { manager, environment } = options;

		const spin = ora('Configurando recursos').start();

		( manager === "Npm" ) && tasks.push(
		{
			title: "Instalando dependências",
			task: () =>
			{
				shell.cd("./src/Back");
				shell.exec("npm install");

				shell.cd("-");
				shell.cd("./src/Front");
				shell.exec("npm install");
			}
		})

		||

		tasks.push(
		{
			title: "Instalando dependências",
			task: () =>
			{
				shell.cd("./src/Back");
				shell.exec("yarn install");

				shell.cd("-");
				shell.cd("./src/Front")
				shell.exec("yarn install");
			}
		});

		spin.text ='Implementando estratégia';

		( manager === "npm" && environment === "Docker" ) && tasks.push(
		{
			title: "Executando containers",
			task: () => shell.exec("npm run docker")
		});

		( manager === "npm" && environment === "Nativo" ) && tasks.push(
		{
			title: "Executando app",
			task: () => shell.exec("npm run app")
		});

		( manager === "yarn" && environment === "Docker" ) && tasks.push(
		{
			title: "Executando containers",
			task: () => shell.exec("npm run docker")
		});

		( manager === "yarn" && environment === "Nativo" ) && tasks.push(
		{
			title: "Executando app",
			task: () => shell.exec("yarn run app")
		});

		new listr(tasks)
			.run()
			.catch( err => console.error("houve um problema aqui: ", err) );
	});
}

init();
