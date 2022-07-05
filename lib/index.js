var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Command } from "commander";
import shell from "shelljs";
import fs from "fs-extra";
import inquirer from "inquirer";
var program = new Command();
var cmdText1 = "是否删除该文件夹(YES / NO)";
program
    .name("string-util")
    .description("CLI to some JavaScript string utilities")
    .version("0.8.0");
var shellGitClone = function () { return __awaiter(void 0, void 0, void 0, function () {
    var dirName, cwdPath, isExist, resp, answer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                shell.echo("检查是否安装shelljs");
                dirName = "react-init";
                if (!shell.which("git")) {
                    shell.echo("\x1b[31m请先安装git\x1b[39m");
                    shell.exit(1);
                }
                else {
                    shell.echo("\x1b[92mgit已经安装\x1b[39m");
                }
                cwdPath = process.cwd();
                return [4 /*yield*/, fs.pathExistsSync("".concat(cwdPath, "/").concat(dirName))];
            case 1:
                isExist = _a.sent();
                if (!isExist) return [3 /*break*/, 5];
                shell.echo("\x1b[31m该文件夹已经存在\x1b[39m");
                return [4 /*yield*/, inquirer.prompt([
                        {
                            type: "input",
                            name: "isDelete",
                            message: cmdText1,
                        },
                    ])];
            case 2:
                resp = _a.sent();
                answer = resp["isDelete"].toUpperCase();
                if (!(answer === "YES" || answer === "Y")) return [3 /*break*/, 4];
                return [4 /*yield*/, fs.removeSync("".concat(cwdPath, "/").concat(dirName))];
            case 3:
                _a.sent();
                return [3 /*break*/, 5];
            case 4:
                if (answer === "NO" || answer === "N") {
                    shell.exit(1);
                }
                else {
                    shell.exit(1);
                }
                _a.label = 5;
            case 5:
                shell.mkdir("-p", dirName);
                shell.cd(dirName).exec("git clone git@github.com:peikai54/daily-server.git");
                fs.removeSync("".concat(cwdPath, "/").concat(dirName, "/.git"));
                return [2 /*return*/];
        }
    });
}); };
program
    .command("init-react")
    .description("生成react项目")
    .action(shellGitClone);
program.parse();
