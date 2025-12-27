"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiLeetcode, SiCodeforces, SiCodingninjas } from "react-icons/si";
import { GiTrophy } from "react-icons/gi";
import { MdOutlineInsights, MdOutlineStar } from "react-icons/md"; 
import { HiOutlineLightningBolt } from "react-icons/hi";
import "./Competitive.css";

const LEETCODE_USERNAME = "qDCkfvJavE";

const Competitive = () => {
  const [stats, setStats] = useState({
    leetcode: null,
    codeforces: null,
    codingninja: null,
    loading: true,
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
          cnRes.json()
        ]);
        setStats({ 
          leetcode: lcData, 
          codeforces: cfData, 
          codingninja: cnData, 
          loading: false 
        });
      } catch (err) {
        console.error("Fetch error:", err);
        setStats((prev) => ({ ...prev, loading: false }));
      }
    }
    fetchStats();
  }, []);

  if (stats.loading) {
    return (
      <div className="loader-container">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="glass-spinner" 
        />
      </div>
    );
  }

  return (
    <div className="competitive-container">
      <div className="mesh-gradient"></div>
      
      <header className="comp-header">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="title-container"
        >
          <h2 className="main-title">
            <span className="title-gradient">Competitive</span> 
            <span className="title-outline"> Stats</span>
          </h2>
          <div className="title-decorator">
            <span className="line side-left"></span>
            <span className="dot"></span>
            <span className="line side-right"></span>
          </div>
        </motion.div>
      </header>

      <div className="comp-grid">
        {/* LeetCode Card */}
        {stats.leetcode && (
          <PlatformCard 
            title="LeetCode" 
            icon={<SiLeetcode />} 
            color="#FFA116" 
            link={`https://leetcode.com/${LEETCODE_USERNAME}`}
          >
            {stats.leetcode.submitStats.acSubmissionNum.map((item) => 
              item.difficulty !== "All" && (
                <div className="stat-pill" key={item.difficulty}>
                  <span className={`status-dot ${item.difficulty.toLowerCase()}`}></span>
                  <span className="diff-label">{item.difficulty}</span>
                  <span className="diff-count">{item.count}</span>
                </div>
              )
            )}
          </PlatformCard>
        )}

        {/* Codeforces Card */}
        {stats.codeforces && (
          <PlatformCard 
            title="Codeforces" 
            icon={<SiCodeforces />} 
            color="#1CA7EC" 
            link={`https://codeforces.com/profile/${stats.codeforces?.handle}`}
          >
            <div className="stat-row">
              <GiTrophy className="row-icon" />
              <div className="row-info">
                <span>Current Rating</span>
                <strong>{stats.codeforces?.rating || "000"}</strong>
              </div>
            </div>
            <div className="stat-row">
              <HiOutlineLightningBolt className="row-icon" />
              <div className="row-info">
                <span>Peak Rating</span>
                <strong>{stats.codeforces?.maxRating || "N/A"}</strong>
              </div>
            </div>
          </PlatformCard>
        )}

        {/* Coding Ninjas Card */}
        {stats.codingninja && (
          <PlatformCard 
            title="Coding Ninjas" 
            icon={<SiCodingninjas />} 
            color="#FF5252" 
            link="https://www.codingninjas.com/"
          >
            <div className="stat-row">
              <MdOutlineInsights className="row-icon" />
              <div className="row-info">
                <span>Total Solved</span>
                <strong>{stats.codingninja?.totalSolved}</strong>
              </div>
            </div>
            <div className="stat-row">
              <MdOutlineStar className="row-icon" />
              <div className="row-info">
                <span>Tracks Cleared</span>
                <strong>{stats.codingninja?.tracksCompleted}</strong>
              </div>
            </div>
          </PlatformCard>
        )}
      </div>
    </div>
  );
};

const PlatformCard = ({ title, icon, color, link, children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -15, 
        rotateX: 8, 
        rotateY: -8,
        boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 20px 0px ${color}22`
      }}
      style={{ 
        "--accent": color,
        transformStyle: "preserve-3d" 
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="glass-card"
    >
      <div className="glass-shine"></div>
      
      <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}>
        <div className="card-top">
          <div className="icon-wrapper">{icon}</div>
          <h3>{title}</h3>
        </div>
        
        <div className="card-body">
          {children}
        </div>

        <motion.a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, backgroundColor: "var(--accent)", color: "#000" }}
          whileTap={{ scale: 0.95 }}
          className="glass-btn"
        >
          Visit Profile
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Competitive;