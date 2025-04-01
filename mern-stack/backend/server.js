/*
  Entry file for backend application, where we will register our express app.

  Step 1 - Create a package.json file.
    Enabling us to install/keep track of dependencies & register custom scripts.
    Open terminal and run: npm init -y

  Step 2 - Install express package.
  Allows us to create an express app.
  Open terminal and run: npm install express
  
  Step 3 - Create an express application.
  Step 4 - Install nodemon globally: npm install -g nodemon
  Step 5 - Add a dev script and run the application using: npm run dev
  Step 6 - Setup a route handler to respond to request.
*/

require("dotenv").config(); // Attached environment variables to process.env object.
const express = require("express");

// Creates an express app & stores the reference in app constant.
const app = express();

/*
  In order to use a .env file, create the variables containing sensitive data inside .env file.
  In order to access these environment variables, we need to use a package: npm install dotenv.
  dotenv is a package that loads environment variables from .env file into process.env object.
*/

// Listen for requests.
app.listen(process.env.PORT, () => {
  console.log("Listening on port 4000");
});

// Route handler to respond to a GET request.
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app !" });  // Sends a json string as response.
});

// After running the server, check response at: http://localhost:4000/

// Middleware: Any code that executes always between getting a request from the server and sending a response to the server.
// Adding/Registering a global middleware for logging.
app.use((req, res, next) => {
  console.log("Request path :", req.path);
  console.log("Request method :", req.method);
  // next is a function, that we need to call at the end of the middleware to move on to next piece of middleware i.e. to execute the call back function inside get, post, etc.
  next();
});
