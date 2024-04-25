// pages/api/user.js
import users from "../../data/userdata";

export default function handler(req, res) {
  if (req.method === "GET") {
    // Respond with the existing users data
    res.status(200).json({ users });
  } else if (req.method === "POST") {
    // Parse the incoming request body
    const { name, age } = req.body;

    // Generate a new user ID
    const id = users.length + 1;

    // Create a new user object
    const newUser = { id, name, age };

    // Add the new user to the users array
    users.push(newUser);

    // Respond with the newly added user
    res.status(201).json({ user: newUser });
  } else {
    // Handle unsupported HTTP methods
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
