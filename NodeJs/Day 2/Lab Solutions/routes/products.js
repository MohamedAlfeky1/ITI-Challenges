// GET      http://localhost:5060/products         → List all products
// GET      http://localhost:5060/products/1       → Get product by id
// POST     http://localhost:5060/products         → Add product
// PUT      http://localhost:5060//products/:id    → Update product
// PATCH    http://localhost:5060//products/:id    → Update product
// Delete   http://localhost:5060//products/:id    → Delete product

const { log } = require("console");
const express = require("express");
let products = require("../products.json");
const { body, validationResult } = require("express-validator");
const productValidation = require("../validations/productsValidations");
const isAdmin = require("../middleware/isAdmin");

const router = express.Router();

// List all products
router.get("/", (req, res) => {
  try {
    res.status(200).json(products);
  } catch (e) {
    console.log(e);
  }
});

// Get Product By ID
router.get("/:id", (req, res) => {
  const productID = +req.params.id;
  const findProduct = products.find((p) => p.id == productID);

  if (!findProduct)
    return res.status(404).json({ message: "No Products with this id" });

  console.log(findProduct);

  res.status(200).json(findProduct);
});

// this is protected route, You need to be admin to update a product
// Please login first with Email: admin@gmail.com and password: 123456

// UPDATE product
router.put("/:id", isAdmin, productValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const productID = +req.params.id;

    // Find product index
    const index = products.findIndex((p) => p.id === productID);
    if (index === -1) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updates = req.body;

    // Merge Update
    const updatedProduct = {
      ...products[index],
      ...updates,
      id: products[index].id, // keep original ID
    };

    products[index] = updatedProduct;

    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// this is protected route, You need to be admin to partially update a product
// Please login first with Email: admin@gmail.com and password: 123456

// PARTIALLY UPDATE product
router.patch("/:id", isAdmin, (req, res) => {
  try {
    const productID = +req.params.id;

    // Find product index
    const index = products.findIndex((p) => p.id === productID);
    if (index === -1) {
      return res.status(404).json({ message: "Product not found" });
    }

    // apply only partial update and protect the ID
    Object.assign(products[index], req.body, { id: products[index].id });

    res.status(200).json({
      message: "product partially updated",
      product: products[index],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// this is protected route, You need to be admin to add a product
// Please login first with Email: admin@gmail.com and password: 123456

// ADD product
router.post("/", isAdmin, productValidation, (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const productID = req.body.id;

    // Find if product index already exists in database
    const index = products.findIndex((p) => p.id === productID);
    if (index !== -1) {
      return res
        .status(400)
        .json({ message: "Product already exists in database" });
    }

    let newProduct = req.body;

    res
      .status(200)
      .json({ message: "Product added successfully", todo: newProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// this is protected route, You need to be admin to delete a product
// Please login first with Email: admin@gmail.com and password: 123456

// DELETE product
router.delete("/:id", isAdmin, (req, res) => {
  try {
    const productID = +req.params.id;

    // Find product index
    const index = products.findIndex((p) => p.id === productID);
    if (index === -1) {
      return res.status(404).json({ message: "Product not found" });
    }

    products.filter((product) => product.id !== productID);
    products = products.filter((product) => product.id !== productID);
    res.status(200).json({ message: "Product Deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
