const commandLineArgs = require("command-line-args");
const chalk = require("chalk");
const consoleTables = require("console-table-printer");

let mainDefinitions = [
    { name: 'name', defaultOption: true }
];

const mainCommand = commandLineArgs(mainDefinitions, { stopAtFirstUnknown : true });
let argv = mainCommand._unknown || [];

console.log(chalk.bgGreen("Node") + chalk.black.bgWhite("Manage"));

if(mainCommand.name === "help") {
    console.log("NodeManage - " + chalk.underline("Help Menu"));

    let cmdsTable = new consoleTables.Table({
        title : "Available commands",
        columns : [
            { name: "Command", alignment: "left", color: "green" },
            { name: "Arguments", alignment: "middle" },
            { name: "Description", alignment: "left", maxLen: 30 }
        ]
    });

    cmdsTable.addRow({ Command : "help", "Arguments" : "", Description: "Prints this help menu with lots of helpful information to help you better understand how NodeManage works."} );
    cmdsTable.addRow({ Command : "list",
    "Arguments" : "-displayManaged, -M  Only displays Node Processes managed by NodeManage.",
    Description: "Shows all running Node processes in a nice little table."} );

    cmdsTable.printTable();
} else if(mainCommand.name == "list") {
    const runDefinitions = [
        { name: "displayManaged", alias: "M" }
    ]

    const runOptions = commandLineArgs(runDefinitions, { argv, stopAtFirstUnknown : true });
    argv = runOptions._unknown || [];

    console.log(runOptions);

    console.log(argv);
}