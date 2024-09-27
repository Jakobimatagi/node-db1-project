const express = require("express");

const server = express();
const accountsRouter = require('../api/accounts/accounts-router')
server.use(express.json());
server.use(accountsRouter)

module.exports = server;
