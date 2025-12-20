// server/index.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Replace handles here
const usernames = {
  leetcode: "qDCkfvJavE",
  codeforces: "Ankurcrs7",
  codingninja: "Ankurcrs", // mock data
};

// LeetCode stats proxy (GraphQL API)
app.get("/api/leetcode", async (req, res) => {
  try {
    const query = `
      query userProblemsSolved($username: String!) {
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
          profile {
            userAvatar
          }
        }
      }`;
    const response = await fetch("https://leetcode.com/graphql/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { username: usernames.leetcode } }),
    });
    const data = await response.json();
    res.json(data.data.matchedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch LeetCode stats" });
  }
});

// Codeforces stats proxy (official API)
app.get("/api/codeforces", async (req, res) => {
  try {
    const response = await fetch(
      `https://codeforces.com/api/user.info?handles=${usernames.codeforces}`
    );
    const data = await response.json();
    res.json(data.result[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch Codeforces stats" });
  }
});

// Coding Ninjas proxy (mock example)
app.get("/api/codingninja", async (req, res) => {
  try {
    const data = {
      totalSolved: 85,
      tracksCompleted: 3,
      avatar: "https://static.codingninjas.com/assets/images/cc-logo.svg",
    };
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Coding Ninjas stats" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
