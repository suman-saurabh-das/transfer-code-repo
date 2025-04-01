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

require("dotenv").config(); // Attaching environment variables to process.env object.

const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

// -------------------- CREATING AN EXPRESS APP --------------------

// Creates an express app & stores the reference in app constant.
const app = express();

/*
  In order to use a .env file, create the variables containing sensitive data inside .env file.
  In order to access these environment variables, we need to use a package: npm install dotenv.
  dotenv is a package that loads environment variables from .env file into process.env object.
*/

// Listen for requests.
// app.listen(process.env.PORT, () => {
//   console.log("Listening on port 4000");
// });

// Route handler to respond to a GET request.
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app !" }); // Sends a json string as response.
});

// After running the server, check response at: http://localhost:4000/

// -------------------- ADDING MIDDLEWARES --------------------

// Middleware: Any code that executes always between getting a request from the server and sending a response to the server.
// Adding/Registering a global middleware for logging.
app.use((req, res, next) => {
  console.log("Request path :", req.path);
  console.log("Request method :", req.method);
  // next is a function, that we need to call at the end of the middleware to move on to next piece of middleware i.e. to execute the call back function inside get, post, etc.
  next();
});

// -------------------- ADDING ROUTE HANDLERS --------------------

// Using the workoutRoutes in our app.
// This will grab all the routes defined in workouts.js file and add them to the app.
// app.use(workoutRoutes);

// We can also add a specific path, so that we find the routes only when we come here.
app.use("/api/workouts", workoutRoutes);

// When sending data to the server (POST/PATCH request), we need to access the data from the req object and we can only access that in an express app when we use a middleware called express.json.
// For any request that comes in, this middleware looks for a body (data), and if it exists, it passes and attaches it to the request object, so that we can access it in the request handler.
app.use(express.json());

// -------------------- ADDING MONGODB --------------------

/*
  Create a new database (cluster) in mongoDB.
  Get the mongoDB connection uri and add it in .env file.
  Install mongoose package: npm install mongoose

  Mongoose is an ODM (object data model) library, which wraps mongoDB with an extra layer that allows it to use methods to read and write database documents and it also gives us a way to declare models and schemas to ensure a much strict data structure.
*/

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen to requests only after successful connection to DB.
    app.listen(process.env.PORT, () => {
      console.log("Listening on port 4000");
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error :", error);
  });
