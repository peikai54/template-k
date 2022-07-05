import inquirer from "inquirer";
inquirer
    .prompt([
    {
        type: "input",
        name: "输入框",
        message: "input",
    },
])
    .then(function (answers) {
    // Use user feedback for... whatever!!
    console.log(answers);
})
    .catch(function (error) {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    }
    else {
        // Something else went wrong
    }
});
