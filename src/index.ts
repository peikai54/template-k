import { Command } from "commander";
import shell from "shelljs";
import fs from "fs-extra";
import inquirer from "inquirer";
const program = new Command();

const cmdText1 = "是否删除该文件夹(YES / NO)";

const cloneGit = "git@github.com:peikai54/ts-init.git";

program
  .name("string-util")
  .description("CLI to some JavaScript string utilities")
  .version("0.8.0");

const shellGitClone = async () => {
  shell.echo("检查是否安装shelljs");
  const dirName = "react-init";
  if (!shell.which("git")) {
    shell.echo("\x1b[31m请先安装git\x1b[39m");
    shell.exit(1);
  } else {
    shell.echo("\x1b[92mgit已经安装\x1b[39m");
  }

  const cwdPath = process.cwd();

  const isExist = await fs.pathExistsSync(`${cwdPath}/${dirName}`);

  if (isExist) {
    shell.echo("\x1b[31m该文件夹已经存在\x1b[39m");
    const resp = await inquirer.prompt([
      {
        type: "input",
        name: "isDelete",
        message: cmdText1,
      },
    ]);
    const answer = resp["isDelete"].toUpperCase();
    if (answer === "YES" || answer === "Y") {
      await fs.removeSync(`${cwdPath}/${dirName}`);
    } else if (answer === "NO" || answer === "N") {
      shell.exit(1);
    } else {
      shell.exit(1);
    }
  }

  shell.mkdir("-p", dirName);

  shell.cd(dirName).exec(`git clone ${cloneGit}`);
};

program
  .command("init-react")
  .description("生成react项目")
  .action(shellGitClone);

program.parse();
