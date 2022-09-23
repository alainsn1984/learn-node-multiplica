const fs = require("fs");
const colors = require("colors");

const multiplica = async (num, listar = false, hasta = 10) => {
  try {
    let result = "";
    let consola = "";

    // console.log(hasta);
    for (let index = 1; index <= hasta; index++) {
      result += `${index} ${"x"} ${num} ${"="} ${index * num}\n`;
      consola += `${index} ${"x".blue} ${num} ${"=".blue} ${index * num}\n`;
    }
    if (listar) {
      console.clear();
      console.log("==============================".green);
      console.log("Tabla de Multiplicacion".green, num);
      console.log("==============================".green);
    }
    await fs.writeFileSync(`./salida/tabla-${num}.txt`, result);
    console.log(consola);
    return `tabla-${num}.txt creada`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  multiplica,
};
