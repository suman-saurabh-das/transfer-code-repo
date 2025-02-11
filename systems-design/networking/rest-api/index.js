import express from 'express';
import bodyParser from 'body-parser';

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
  console.log(`Server is running at port ${PORT}`); // This will be logged in terminal
});

// Configure a route so that, if a client is requesting on that path we will send data.

// all() method - Used to handle all HTTP methods (GET, POST, PUT, DELETE, etc.) for a specified route ("/"). Allows us to define middleware or route handlers (callback fn) that will be invoked regardless of the HTTP request method made by the client.

app.all("/", (req, res) => {
  // Part of information from client to server is in req
  console.log("Request :", req);
  // Part of information from server to client is in res
  console.log("Response :", res);

  // Sending the information.
  res.send("Server is up and running !");
});

// To run the app, in terminal run: npm run start.

// -------------------- CREATING A TO-DO API --------------------

// NOTE - Serialized data is exchanged between the resources (client/server). In order to serialize our newTodo data received at server end from client, we need to parse it using body-parser.
// For this we will use a  package - body-parser, run : npm i body-parser --save

// When using express, we can parse the data received in the body at a central place for each and every request. Here we are using bodyParser here as a middleware i.e. any req that goes to any route will first be parsed by executing below function.
app.use(bodyParser.json());

// Data
const todos = [
  { id: 1, todo: "task 1", completed: false },
  { id: 2, todo: "task 2", completed: true },
  { id: 3, todo: "task 3", completed: false },
  { id: 4, todo: "task 4", completed: true },
]

// READ | GET method - Retrieve data from the server.
app.get("/todos", (req, res) => {
  res.json(todos);
})

// CREATE | POST method - Sends data to the server.
app.post("/todos", (req, res) => {
  // In POST request, data has to be sent in the body.
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json({message: "New To-Do added !"});
})
// In order to make a POST request, we will use thunder-client vs-code extension.
// To test the requests, run the server, open thunder-client vs-code extension and import rest-api.json, this file will have the data for making GET, POST, PUT and DELETE requests.

// PUT - Sends entire information to the server to update the data.
// PATCH - Sends partial information to the server to update the data.

// UPDATE | PUT method - Updates data on the server.
app.put("/todos/:id", (req, res) => {
  const updatedTodoData = req.body;
  const todoParamsId = Number(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === todoParamsId);

  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: todoParamsId,
      ...updatedTodoData
    }
    res.status(201).json({message: "To-Do updated successfully !"})
  } else {
    res.status(400).json({message: "To-Do id doesn't exist !"})
  }
})

// DELETE | DELETE method - Deletes data from the server.
app.delete("/todos/:id", (req, res) => {
  const todoParamsId = Number(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === todoParamsId);
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    res.json({message: "To-To deleted successfully !"})
  } else {
    res.status(400).json({message: "To-Do id doesn't exist !"})
  }
})

// HEAD - Retrieves information about the headers.
// OPTIONS - Used for security. (Primarily for authentication of cross-domain resources)
// CONNECT - Used to establish connection between the resources (client/server), so that next time the connection happens faster.
// TRACE - Used to diagnose request and response messages on any of the resources (client/server).
