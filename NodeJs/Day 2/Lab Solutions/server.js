const express = require("express");
const server = express();
const productsRoutes = require("./routes/products");
const authRoutes = require("./routes/auth");

server.use(express.json());

server.use("/auth", authRoutes);
server.use("/products", productsRoutes);

server.listen(5050, () => {
  console.log("server running!");
});
