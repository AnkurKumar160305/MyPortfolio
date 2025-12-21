import React, { useState, useEffect } from "react";
import "./Competitive.css";

// Import react-icons
import { SiLeetcode, SiCodeforces, SiCodingninjas } from "react-icons/si";
import { GiCheckMark } from "react-icons/gi";
import { MdOutlineStar } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";

const LEETCODE_USERNAME = "qDCkfvJavE";

const Competitive = () => {
  const [stats, setStats] = useState({
    leetcode: null,
    codeforces: null,
    codingninja: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const [lcRes, cfRes, cnRes] = await Promise.all([
          fetch("http://localhost:5000/api/leetcode"),
          fetch("http://localhost:5000/api/codeforces"),
          fetch("http://localhost:5000/api/codingninja"),
        ]);
        const [lcData, cfData, cnData] = await Promise.all([
          lcRes.json(),
          cfRes.json(),
          cnRes.json(),
        ]);

        setStats({
          leetcode: lcData,
          codeforces: cfData,
          codingninja: cnData,
          loading: false,
          error: null,
        });
      } catch (err) {
        console.error(err);
        setStats({ ...stats, loading: false, error: "Failed to fetch stats" });
      }
    }

    fetchStats();
  }, []);

  if (stats.loading)
    return <div className="comp-loading">Loading stats...</div>;
  if (stats.error) return <div className="comp-error">{stats.error}</div>;

  return (
    <div className="competitive-root">
      <h2 className="comp-title">Competitive Programming Stats</h2>
      <div className="comp-grid">
        {/* LeetCode */}
        {stats.leetcode && (
          <div className="comp-card leetcode-card">
            <div className="comp-header">
              <SiLeetcode className="comp-icon leetcode-icon" />
              <h3>LeetCode</h3>
            </div>

            {stats.leetcode.submitStats.acSubmissionNum.map(
              (item) =>
                item.difficulty !== "All" && (
                  <p key={item.difficulty}>
                    {item.difficulty === "Easy" && (
                      <GiCheckMark className="stat-icon easy-icon" />
                    )}
                    {item.difficulty === "Medium" && (
                      <MdOutlineStar className="stat-icon medium-icon" />
                    )}
                    {item.difficulty === "Hard" && (
                      <AiOutlineFire className="stat-icon hard-icon" />
                    )}
                    <strong>{item.difficulty}:</strong> {item.count}
                  </p>
                )
            )}

            <a
              href={`https://leetcode.com/${LEETCODE_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-link leetcode-btn"
            >
              Visit <SiLeetcode />
            </a>
          </div>
        )}

        {/* Codeforces */}
        {stats.codeforces && (
          <div className="comp-card codeforces-card">
            <div className="comp-header">
              <SiCodeforces className="comp-icon codeforces-icon" />
              <h3>Codeforces</h3>
            </div>
            <p>
              <GiCheckMark className="stat-icon easy-icon" />
              <strong>Handle:</strong> {stats.codeforces?.handle}
            </p>
            <p>
              <MdOutlineStar className="stat-icon medium-icon" />
              <strong>Rating:</strong> {stats.codeforces?.rating || "Unrated"}
            </p>
            <p>
              <AiOutlineFire className="stat-icon hard-icon" />
              <strong>Max Rating:</strong>{" "}
              {stats.codeforces?.maxRating || "N/A"}
            </p>
            <a
              href={`https://codeforces.com/profile/${stats.codeforces?.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-link codeforces-btn"
            >
              Visit <SiCodeforces />
            </a>
          </div>
        )}

        {/* Coding Ninjas */}
        {stats.codingninja && (
          <div className="comp-card codingninja-card">
            <div className="comp-header">
              <SiCodingninjas className="comp-icon codingninjas-icon" />
              <h3>Coding Ninjas</h3>
            </div>
            <p>
              <GiCheckMark className="stat-icon easy-icon" />
              <strong>Total Solved:</strong> {stats.codingninja?.totalSolved}
            </p>
            <p>
              <MdOutlineStar className="stat-icon medium-icon" />
              <strong>Tracks Completed:</strong>{" "}
              {stats.codingninja?.tracksCompleted}
            </p>
            <a
              href="https://www.codingninjas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="visit-link codingninjas-btn"
            >
              Visit <SiCodingninjas />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Competitive;
