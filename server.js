const express = require("express");
const app = express();

const port = 3020;

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});