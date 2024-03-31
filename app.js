const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getFeedbacks,
  addFeedback,
  getFeedback,
  updateFeedback,
  deleteFeedback,
  deleteAllFeedbacks,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all Feedbacks
app.get("/feedbacks", getFeedbacks);

// POST a new Feedback
app.post("/feedbacks", addFeedback);

// GET a single Feedback
app.get("/feedbacks/:id", getFeedback);

// Update Feedback using PUT
app.put("/feedbacks/:id", updateFeedback);

// DELETE a Feedback
app.delete("/feedbacks/:id", deleteFeedback);

// DELETE all Feedback
app.delete("/feedbacks", deleteAllFeedbacks);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});