const express = require("express");
const { createNewCategory } = require("../controllers/category")

const categoryRouter = express.Router();

categoryRouter.post("/", createNewCategory);

module.exports = categoryRouter;