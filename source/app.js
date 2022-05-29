const express = require("express");
require("../source/database/conn");

const uefaRoute = require("./routers/playerapi")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());



app.use("/playersapi", uefaRoute);



app.listen(port, () => {
    console.log(`Connection Is Live At Port No : ${port}`);
})