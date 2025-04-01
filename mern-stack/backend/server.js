/*
  Entry file for backend application, where we will register our express app.

  Step 1 - Create a package.json file.
    Enabling us to install/keep track of dependencies & register custom scripts.
    Open terminal and run: npm init -y

  Step 2 - Install express package.
  Allows us to create an express app.
  Open terminal and run: npm install express
  
  Step 3 - Create an express application.
  Step 4 - Install nodemon globally (npm install -g nodemon) and add a dev script.
  Step 5 - Run the application using: npm run dev
  Step 6 - Setup a route handler to respond to request.
*/

 const express = require('express');

// Creates an express app & stores the reference in app constant.
const app = express();

// Middleware: Any code that executes always between getting a request from the server and sending a response to the server.
// Adding/Registering a global middleware for logging.
app.use((req, res, next) => {
  console.log("Request path :",req.path);
  console.log("Request method :",req.method);
  // next is a function, that we need to call at the end of the middleware to move on to next piece of middleware i.e. to execute the call back function inside get, post, etc.
  next();
})

// Route handler to respond to request.
app.get("/", (req, res) => {
  res.json({msg: "Welcome to the app !"})
})

// Listen for requests.
app.listen(process.env.PORT, () => {
  console.log("Listening on port 4000");
})
