import express from 'express';

/*
  PRE-REQUISITES FOR RUNNING THE EXPRESS APP
  
    In package.json file, add a property "type":"module" (to use import statements)
    In package.json file, add a start script "start":"node ./index.js" (to run the app)
*/

// Creating an app using express function
const app = express();

const PORT = 5111;

// Start server by listening to a port
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
})

// Configure a route so that, if a client is requesting on that path we will send data.

// all() method - Used to handle all HTTP methods (GET, POST, PUT, DELETE, etc.) for a specified route ("/"). Allows us to define middleware or route handlers (callback fn) that will be invoked regardless of the HTTP request method made by the client.

app.all("/", (req, res) => {
  // Part of information from client to server is in req
  console.log("Request :", req);
  // Part of information from server to client is in res
  console.log("Response :", res);

  // Sending the information.
  res.send("Server is up and running !");
})

// To run the app, in terminal run: npm run start.