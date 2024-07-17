const express = require("express");
const { GetAllBooks } = require("./allRoutes/get/getAllBooks");
const { PostCreateBook } = require("./allRoutes/post/postCreateBook");
const { PutUpdateBook } = require("./allRoutes/put/putUpdateBook");
const routes = express.Router();

const path = "/api/v1/";
routes
.get(`${path}books`, GetAllBooks)
.post(`${path}books`, PostCreateBook)
.put(`${path}books/:id`, PutUpdateBook);

module.exports = routes;
