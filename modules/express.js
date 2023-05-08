const express = require("express");
const UserModel = require("../src//models/user.model");
const { removeAllListeners } = require("../src//models/user.model");

const app = express();

//EJS (inserir dados dinamicos em um html)
app.set("view engine", "ejs");
app.set("views", "src/views");

//para dizer que vamos sempre trabalhar com arquivos json nas requisiçoes
app.use(express.json());

//middlewares (ele roda antes da requisição e fica esperando até que o next seja executado)
app.use((req, res, next) => {
  console.log(req.body);
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);
  next();
});

//EJS (metodo para testar o EJS)
app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});
  res.render("index", { users });
});

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>hello world nodejs</h1>");
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
