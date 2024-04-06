"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => res.status(200).send(`
<html lang="en">

<head>
  <title>Welcome</title>
</head>
<style>
  h1 {
    background-color: aquamarine;
    color: brown;
  }
</style>

<body>
  <h1>Hello! Welcome to my first ever backend deployment project.</h1>
</body>

</html>
`));
app.listen(8080, () => console.log("Listening on the app"));
