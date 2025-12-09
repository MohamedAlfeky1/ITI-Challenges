// GET      http://localhost:5060/products         → List all products
// POST     http://localhost:5060/products         → Add product
// PUT      http://localhost:5060//products/:id    → Update product
// Delete   http://localhost:5060//products/:id    → Delete product

const http = require("http");
let products = require("./products.json");

const server = http.createServer((req, res) => {
  // List all products
  if (req.url == "/products" && req.method == "GET") {
    if (!products || products.length === 0) {
      return res.end("No products found");
    }
    res.end(
      JSON.stringify({
        message: "Products fetched successfully",
        products: products,
      })
    );
  }
  // Add product
  else if (req.url == "/products" && req.method == "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      // Handle if the Body is empty
      if (!body) {
        return res.end("Error: Empty request body");
      }

      const newProdcut = JSON.parse(body);
      newProdcut.id = products.length + 1;
      products.push(newProdcut);
      res.end(
        JSON.stringify({
          message: `Product With ID:${newProdcut.id} Added successfully`,
          product: newProdcut,
        })
      );
    });

    req.on("error", () => {
      res.end("Error: Failed to read request");
    });
  }
  // Update product
  else if (req.url.startsWith("/product/") && req.method == "PUT") {
    const productId = +req.url.split("/").pop();
    let product = products.find((p) => p.id === productId);
    if (!product) {
      return res.end("Product not found");
    }

    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      let updatedProduct = JSON.parse(body);
      product = Object.assign(product, updatedProduct);
      res.end(
        JSON.stringify({
          message: `Product With ID:${productId} Updated successfully`,
          products: product,
        })
      );
    });

    req.on("error", () => {
      res.end("Error reading request");
    });
  }
  // Delete product
  else if (req.url.startsWith("/product/") && req.method == "DELETE") {
    const productId = +req.url.split("/").pop();

    const findProduct = products.find((p) => p.id === productId);
    if (!findProduct) {
      return res.end("Product Not Found");
    }

    products = products.filter((p) => p.id !== productId);

    res.end(
      JSON.stringify({
        message: `Product With ID:${productId} Deleted successfully`,
        products,
      })
    );
  }
});

server.listen(5060, () => {
  console.log("server running!");
});
