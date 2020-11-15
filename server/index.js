const express = require("express");
const axios = require('axios');
const cors = require('cors');
const config = require('./config')
const app = express();
const port = 5000;

app.use(cors());

app.get("/:web/:page?", async(req, res) => {
    try {
        const { web, page = 1 } = req.params
        const { [web]: myWeb} = config
        const response = await axios.get(`${myWeb.url}?${myWeb.pageParam}=${page}`);
        return res.status(200).send(response.data);
    } catch ({ message }) {
        console.log(message)
        res.status(500).send({ message })
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
