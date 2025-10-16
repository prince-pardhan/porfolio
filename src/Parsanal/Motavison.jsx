// src/SkillsSection.jsx
import React, { useEffect, useState } from "react";
import { Title, Card } from "@mantine/core";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandReact,
  IconDeviceGamepad2,
  IconPencil,
  IconCamera,
  IconVideo,
  IconCode,
  IconDeviceDesktop,
  IconBrush,
} from "@tabler/icons-react";

export default function SkillsSection() {
  // Skill Data
  const skills = [
    { name: "Editor", percent: 90, color: "#ff0080", icon: <IconPencil size={24} /> },
    { name: "Poster Editing", percent: 99, color: "#ff0026", icon: <IconBrush size={24} /> },
    { name: "Frontend Dev", percent: 95, color: "#0d00ff", icon: <IconCode size={24} /> },
    { name: "Photo Editor", percent: 97, color: "#00d9ff", icon: <IconCamera size={24} /> },
    { name: "Video Editor", percent: 95, color: "#4c00ff", icon: <IconVideo size={24} /> },
    { name: "HTML", percent: 99, color: "#ff3700", icon: <IconBrandHtml5 size={24} /> },
    { name: "CSS", percent: 99, color: "#264de4", icon: <IconBrandCss3 size={24} /> },
    { name: "JavaScript", percent: 90, color: "#ffcc00", icon: <IconBrandJavascript size={24} /> },
    { name: "ReactJS", percent: 95, color: "#00c8ff", icon: <IconBrandReact size={24} /> },
    { name: "Basic Computer", percent: 97, color: "#00ffaa", icon: <IconDeviceDesktop size={24} /> },
    { name: "Writer", percent: 90, color: "#f43f5e", icon: <IconPencil size={24} /> },
    { name: "Gamer", percent: 99, color: "#8400ff", icon: <IconDeviceGamepad2 size={24} /> },
    { name: "Typing", percent: 95, color: "#ff9900", icon: <IconBrandJavascript size={24} /> },
  ];

  // Typing Animation
  const fullText = "[ALL-SKILLS]";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Fake dynamic trading data (each skill represented as time-series)
  const chartData = skills.map((skill) => ({
    name: skill.name,
    value: skill.percent + Math.random() * 5 - 2, // small variation for trading look
  }));

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "80px 20px",
        textAlign: "center",
        backgroundColor: "black",
        borderTop: "2px solid rgba(255,255,255,0.05)",
        borderBottom: "2px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Typing Animated Title */}
      <Title
        order={2}
        style={{
          background: "linear-gradient(45deg, #6aff00, #6aff00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: 50,
          fontSize: "2.5rem",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        {displayText}
      </Title>

      {/* CSS */}
      <style>{`
        .chart-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 20px;
          margin-bottom: 40px;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .chart-card:hover {
          transform: translateY(-6px) scale(1.02);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }

        .skill-name {
          color: white;
          font-weight: 800;
          font-size: 1.1rem;
          margin-top: 12px;
        }
      `}</style>

      {/* Trading-Style Graph */}
      <Card className="chart-card">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="name" tick={{ fill: "white", fontSize: 12 }} />
            <YAxis domain={[80, 100]} tick={{ fill: "white", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.7)",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#00ff99"
              strokeWidth={3}
              dot={{ fill: "#6aff00", strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Individual Skill Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "25px",
        }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="chart-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            viewport={{ once: true }}
          >
            <div style={{ color: skill.color, fontSize: "28px" }}>{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
            <div
              style={{
                color: skill.color,
                fontWeight: 900,
                fontSize: "1.2rem",
                marginTop: 4,
              }}
            >
              {skill.percent}%
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
