const { body } = require("express-validator");

const productValidation = [
  body("id")
    .exists()
    .withMessage("id is required")
    .isInt({ min: 1 })
    .withMessage("id must be a positive integer"),

  body("title")
    .exists()
    .withMessage("title is required")
    .isString()
    .withMessage("title must be a string")
    .isLength({ min: 3 })
    .withMessage("title must be at least 3 characters"),

  body("price")
    .exists()
    .withMessage("price is required")
    .isFloat({ min: 0.01 })
    .withMessage("price must be a valid number > 0"),

  body("description")
    .exists()
    .withMessage("description is required")
    .isString()
    .withMessage("description must be string")
    .isLength({ min: 10 })
    .withMessage("description must be at least 10 characters"),

  body("category")
    .exists()
    .withMessage("category is required")
    .isString()
    .withMessage("category must be string"),

  body("image")
    .exists()
    .withMessage("image is required")
    .isURL()
    .withMessage("image must be a valid URL"),
];

module.exports = productValidation;
