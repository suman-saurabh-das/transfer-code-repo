/*
  API endpoints -

    GET:    /workouts     -> Gets all the workout documents.
    GET:    /workouts/:id -> Gets a single workout document.
    POST:   /workouts     -> Creates a new workout document.
    DELETE: /workouts/:id -> Deletes a single workout.
    PATCH:  /workouts/:id -> Updates a single workout.

  Since we are creating the routes in a different file, we will be taking help of the Router from express package, this will allow us to create the routes here (workouts.js file) and then we will export it and use it in server.js
*/

const express = require("express");

// Creating an instance of the router.
const router = express.Router();

// Attaching Route handler's to the router.

// GET all workouts.
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

// GET a single workout.
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single workout" });
});

// POST a new workout.
router.post("/", (req, res) => {
  console.log("Request Body :", req.body);  // We can access req body because we are using express.json() middleware.
  res.json({ msg: "POST a new workout" });
});

// DELETE a workout.
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a workout" });
});

// UPDATE a workout.
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a workout" });
});

// Exporting the router, so that it can be used in a different file (server.js).
module.exports = router;
