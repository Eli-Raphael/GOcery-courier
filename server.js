const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is working on Port " + port);
});

const port = process.env.port || 5000;

app.listen(port, () => "Server is running on port");