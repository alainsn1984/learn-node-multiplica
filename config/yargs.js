const argv = require("yargs")
  .option("b", {
    alias: "base",
    demandOption: true,
    describe: "Base de la operacion de multiplicacion",
    type: "number",
  })
  .option("h", {
    alias: "hasta",
    demandOption: true,
    describe: "Valor final de la multiplicion",
    type: "number",
    default: 10,
  })
  .option("l", {
    alias: "listar",
    describe: "Lista la tabla en la consola",
    type: "boolean",
  }).argv;

module.exports = argv;
