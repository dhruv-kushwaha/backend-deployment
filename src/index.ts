import express from "express";

const app = express();

app.get("/", (req, res) =>
  res.status(200).send(`
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
`)
);

app.listen(8080, () => console.log("Listening on the app"));
