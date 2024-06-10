# E-Commerce Website

This is a full-stack E-Commerce website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse products, add them to their cart, and place orders.

## Features

- Browse products by category
- View detailed product information
- Add products to the shopping cart
- Adjust product quantities in the cart
- Remove products from the cart
- Checkout process with order summary

## Technologies Used

- **Frontend**:
  - React.js
  - Redux (for state management)
  - React Router (for navigation)
  - Fetch API (for HTTP requests)
  - Bootstrap (for styling)

- **Backend**:
  - Node.js
  - Express.js (for building RESTful APIs)
  - MongoDB (as the database)
  - Mongoose (for MongoDB object modeling)
  - JWT (JSON Web Tokens) for authentication

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. **Clone the repository**:

   ```
   git clone https://github.com/yourusername/e-commerce.git
   ```

2. **Install dependencies**:

   Navigate to the project directory and install both backend and frontend dependencies:

   ```
   cd e-commerce
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. **Set up environment variables**:

   - **Backend**: Create a `.env` file in the `backend` directory and specify the required environment variables such as MongoDB connection URI, JWT secret key, etc.
   - **Frontend**: Create or update the `.env` file in the `frontend` directory with any frontend-specific environment variables.


5. **Start the backend server**:

   ```
   cd ../backend && npm start
   ```

6. **Start the frontend development server**:

   ```
   cd ../frontend && npm start
   ```

7. **Open the app**:

   Visit `http://localhost:3000` in your browser to view the application.

## Usage

- Register a new account or log in with an existing one.
- Browse products by category and view detailed product information.
- Add products to your shopping cart and adjust quantities as needed.
- Proceed to checkout, review your order summary, and place your order.
- View your order history and update your profile information if necessary.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests if you find any bugs or want to suggest improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
