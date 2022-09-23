const { multiplica } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();

// console.log(process.argv);

console.log(argv);

console.log("base: yargs", argv.base);

console.log(argv.h);
multiplica(argv.b, argv.l, argv.h)
  .then((archivo) => console.log(`Creado ${archivo.america}. correctamente`))
  .catch((err) => console.log(err));
