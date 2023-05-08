//importar uma todo um modulo e estanciar para usar suas funcões
// const { Person } = require("./person");
// const person = new Person("Wagner");
// console.log(person.sayMyName());

// executar algum modulo criado
// require("./modules/path");
// require("./modules/fs");

// require("./modules/http");
// require("./modules/express");

// .Env utilizar variaveis ambientes no nodejs (nomes logicos)
const dotenv = require("dotenv");
const connectToDataBase = require("./src/database/connect");
dotenv.config();

connectToDataBase();

require("./modules/express");
