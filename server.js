const express = require("express");
const app = express();

const port = 3020;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});