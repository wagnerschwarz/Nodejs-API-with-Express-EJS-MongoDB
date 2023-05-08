const mongoose = require("mongoose");
const connectToDataBase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.qcbufwu.mongodb.net/?retryWrites=true&w=majority`
    );
    return console.log("[Sucesso] Conectado com o Banco de Dados!");
  } catch (error) {
    return console.log(
      "[Error] Ocorreu um erro ao se conectar com o Banco de Dados: ",
      error
    );
  }
};

module.exports = connectToDataBase;
