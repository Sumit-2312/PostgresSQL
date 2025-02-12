import express from "express";
import pgClient from "./db";

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Check if all fields are provided
    if (!username || !password || !email) {
      return res.status(400).json({ error: "All fields are required!" });
    }
    
    console.log("Received Data:", req.body);

    // Insert into PostgreSQL
    const response = await pgClient.query(
      "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *", // preventing SQL injection
      [username, password, email]
    );
    console.log("User inserted successfully:", response.rows[0]);

    // Send success response
    res.status(201).json({
      message: "You are signed up successfully",
      user: response.rows[0],
    });
  } catch (error) {
    console.error("Query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server on port 3000
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
