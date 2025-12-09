# Products API Documentation

A RESTful API built with Node.js and Express for managing products. This API provides authentication and CRUD operations for products with role-based access control.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Products](#products)
- [Authentication & Authorization](#authentication--authorization)
- [Request/Response Examples](#requestresponse-examples)
- [Validation Rules](#validation-rules)
- [Error Handling](#error-handling)
- [Data Models](#data-models)

## Features

- User authentication with role-based access control
- CRUD operations for products
- Input validation using express-validator
- Admin-only protected routes
- JSON-based data storage

## Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

## Getting Started

Start the server:

```bash
node server.js
```

The server will run on `http://localhost:5050`

## API Endpoints

### Base URL

```
http://localhost:5050
```

### Authentication

#### Login

Authenticate a user and receive their role.

**Endpoint:** `POST /auth/login`

**Request Body:**

```json
{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

**Response (200 OK):**

```json
{
  "message": "Login successful",
  "role": "admin"
}
```

**Response (400 Bad Request):**

```json
{
  "message": "Invalid credentials"
}
```

---

### Products

#### List All Products

Retrieve all products from the database.

**Endpoint:** `GET /products`

**Authentication:** Not required

**Response (200 OK):**

```json
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest...",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }
]
```

---

#### Get Product by ID

Retrieve a specific product by its ID.

**Endpoint:** `GET /products/:id`

**Authentication:** Not required

**URL Parameters:**

- `id` (number) - Product ID

**Response (200 OK):**

```json
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

**Response (404 Not Found):**

```json
{
  "message": "No Products with this id"
}
```

---

#### Add Product

Create a new product in the database.

**Endpoint:** `POST /products`

**Authentication:** Required (Admin only)

**Headers:**

```
role: admin
```

**Request Body:**

```json
{
  "id": 11,
  "title": "New Product Title",
  "price": 29.99,
  "description": "This is a detailed description of the product that must be at least 10 characters long",
  "category": "electronics",
  "image": "https://example.com/image.jpg"
}
```

**Response (200 OK):**

```json
{
  "message": "Product added successfully",
  "todo": {
    "id": 11,
    "title": "New Product Title",
    "price": 29.99,
    "description": "This is a detailed description of the product that must be at least 10 characters long",
    "category": "electronics",
    "image": "https://example.com/image.jpg"
  }
}
```

**Response (400 Bad Request):**

```json
{
  "errors": [
    {
      "msg": "title must be at least 3 characters",
      "param": "title",
      "location": "body"
    }
  ]
}
```

**Response (400 Bad Request - Duplicate):**

```json
{
  "message": "Product already exists in database"
}
```

**Response (403 Forbidden):**

```json
{
  "message": "Access denied - Admin only"
}
```

---

#### Update Product (Full Update)

Update an entire product by replacing all fields.

**Endpoint:** `PUT /products/:id`

**Authentication:** Required (Admin only)

**Headers:**

```
role: admin
```

**URL Parameters:**

- `id` (number) - Product ID

**Request Body:**

```json
{
  "id": 1,
  "title": "Updated Product Title",
  "price": 99.99,
  "description": "Updated description that is at least 10 characters long",
  "category": "electronics",
  "image": "https://example.com/updated-image.jpg"
}
```

**Response (200 OK):**

```json
{
  "id": 1,
  "title": "Updated Product Title",
  "price": 99.99,
  "description": "Updated description that is at least 10 characters long",
  "category": "electronics",
  "image": "https://example.com/updated-image.jpg"
}
```

**Response (404 Not Found):**

```json
{
  "message": "Product not found"
}
```

**Response (403 Forbidden):**

```json
{
  "message": "Access denied - Admin only"
}
```

---

#### Partially Update Product

Update specific fields of a product without replacing the entire object.

**Endpoint:** `PATCH /products/:id`

**Authentication:** Required (Admin only)

**Headers:**

```
role: admin
```

**URL Parameters:**

- `id` (number) - Product ID

**Request Body:**

```json
{
  "price": 79.99,
  "title": "Partially Updated Title"
}
```

**Response (200 OK):**

```json
{
  "message": "product partially updated",
  "product": {
    "id": 1,
    "title": "Partially Updated Title",
    "price": 79.99,
    "description": "Original description remains unchanged...",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }
}
```

**Response (404 Not Found):**

```json
{
  "message": "Product not found"
}
```

**Response (403 Forbidden):**

```json
{
  "message": "Access denied - Admin only"
}
```

---

#### Delete Product

Remove a product from the database.

**Endpoint:** `DELETE /products/:id`

**Authentication:** Required (Admin only)

**Headers:**

```
role: admin
```

**URL Parameters:**

- `id` (number) - Product ID

**Response (200 OK):**

```json
{
  "message": "Product Deleted successfully"
}
```

**Response (404 Not Found):**

```json
{
  "message": "Product not found"
}
```

**Response (403 Forbidden):**

```json
{
  "message": "Access denied - Admin only"
}
```

---

## Authentication & Authorization

### How Authentication Works

1. **Login**: Use the `/auth/login` endpoint with valid credentials to authenticate
2. **Get Role**: The login response includes your role (`admin` or `user`)
3. **Access Protected Routes**: Include the `role` header in requests to protected endpoints

### Protected Routes

The following endpoints require admin authentication:

- `POST /products` - Add product
- `PUT /products/:id` - Update product
- `PATCH /products/:id` - Partially update product
- `DELETE /products/:id` - Delete product

### Default Users

**Admin User:**

- Email: `admin@gmail.com`
- Password: `123456`
- Role: `admin`

**Regular User:**

- Email: `user@gmail.com`
- Password: `00000`
- Role: `user`

### Making Authenticated Requests

After logging in, include the role in the request headers:

```bash
curl -X POST http://localhost:5050/products \
  -H "Content-Type: application/json" \
  -H "role: admin" \
  -d '{
    "id": 11,
    "title": "New Product",
    "price": 29.99,
    "description": "Product description here",
    "category": "electronics",
    "image": "https://example.com/image.jpg"
  }'
```

---

## Validation Rules

When creating or updating products (POST/PUT), the following validation rules apply:

| Field         | Rules                                             |
| ------------- | ------------------------------------------------- |
| `id`          | Required, must be a positive integer (≥ 1)        |
| `title`       | Required, must be a string, minimum 3 characters  |
| `price`       | Required, must be a float, minimum 0.01           |
| `description` | Required, must be a string, minimum 10 characters |
| `category`    | Required, must be a string                        |
| `image`       | Required, must be a valid URL                     |

**Note:** PATCH requests do not require all fields and do not validate input.

---

## Error Handling

The API returns standard HTTP status codes:

| Status Code | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| 200         | Success                                                                 |
| 400         | Bad Request (validation errors, invalid credentials, duplicate product) |
| 403         | Forbidden (insufficient permissions)                                    |
| 404         | Not Found (product doesn't exist)                                       |
| 500         | Internal Server Error                                                   |

### Error Response Format

**Validation Errors:**

```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "fieldName",
      "location": "body"
    }
  ]
}
```

**General Errors:**

```json
{
  "message": "Error message"
}
```

---

## Data Models

### User Model

```json
{
  "id": 1,
  "email": "admin@gmail.com",
  "password": "123456",
  "role": "admin"
}
```

### Product Model

```json
{
  "id": 1,
  "title": "Product Title",
  "price": 109.95,
  "description": "Product description",
  "category": "men's clothing",
  "image": "https://example.com/image.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

**Note:** The `rating` field is optional and may not be present in all products.

---

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **express-validator** - Input validation
- **JSON** - Data storage

---

## Project Structure

```
.
├── middleware/
│   └── isAdmin.js          # Admin authentication middleware
├── routes/
│   ├── auth.js             # Authentication routes
│   └── products.js         # Product CRUD routes
├── validations/
│   └── productsValidations.js  # Product validation rules
├── products.json           # Products database
├── users.json              # Users database
├── server.js               # Main server file
└── package.json            # Dependencies
```

---

## Notes

- Data is stored in JSON files (`products.json` and `users.json`)
- Changes to products are persisted in memory during the server session
- The server runs on port `5050` by default
- Admin authentication is required for creating, updating, and deleting products
- All users can view products without authentication
