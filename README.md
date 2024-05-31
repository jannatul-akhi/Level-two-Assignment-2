Product and Order Management Backend Application

Description:
This is a backend application built with Express, a fast, unopinionated, minimalist web framework for Node.js. The application is developed using TypeScript, and it includes features like product management, variant management, and order management. The application uses Mongoose for MongoDB interactions and Zod for data validation.

Features:
i. Product Management: Add, update, delete, and search products.
ii. Order Management: Create, Retrieve and manage orders for products.
iii. Manage product quantity

Clear instructions to run the application locally:

1. At first start the server
   npm run start:dev

2. Open your browser and navigate to http://localhost:5000

3. USE postman to interact with the API at http://localhost:5000

4. Use mongoDB compass for querying, optimizing, and analyzing the MongoDB data.

5. For product Management section:
   i. use http://localhost:5000/api/products to post
   ii. use http://localhost:5000/api/products to retrieve all products
   iii. use http://localhost:5000/api/products/:productId to Retrieve a Specific Product by ID
   iv. use http://localhost:5000/api/products/:productId to Update Product Information
   v. use http://localhost:5000/api/products/:productId to delete product
   vi. use http://localhost:5000/api/products??searchTerm=iphone to Search a product

6. For Order management section:

   i. use http://localhost:5000/api/orders to create a order
   ii. use http://localhost:5000/api/orders to retrieve all orders
   iii. use http://localhost:5000/api/orders?email=level2@programming-hero.com to Retrieve Orders by User Email
