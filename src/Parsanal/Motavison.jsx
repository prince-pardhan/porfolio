// src/SkillsSection.jsx
import React, { useEffect, useState } from "react";
import { Title } from "@mantine/core";
import { motion } from "framer-motion";
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
  const skills = [
    { name: "Editor (90%)", icon: <IconPencil size={22} />, color: "#ff0080ff" },
    { name: "Poster Editing (99%)", icon: <IconBrush size={22} />, color: "#ff0026ff" },
    { name: "Frontend Developer (95%)", icon: <IconCode size={22} />, color: "#0d00ffff" },
    { name: "Photo Editor (97.09%)", icon: <IconCamera size={22} />, color: "#00d9ffff" },
    { name: "Video Editor (95.07%)", icon: <IconVideo size={22} />, color: "#4c00ffff" },
    { name: "HTML (99%)", icon: <IconBrandHtml5 size={22} />, color: "#ff3700ff" },
    { name: "CSS (99%)", icon: <IconBrandCss3 size={22} />, color: "#264de4" },
    { name: "JavaScript (90%)", icon: <IconBrandJavascript size={22} />, color: "#ffcc00ff" },
    { name: "ReactJS (95%)", icon: <IconBrandReact size={22} />, color: "#00c8ffff" },
    { name: "Basic Computer (97%)", icon: <IconDeviceDesktop size={22} />, color: "#00ffaaff" },
    { name: "Writer (90%)", icon: <IconPencil size={22} />, color: "#f43f5e" },
    { name: "Gamer (99%)", icon: <IconDeviceGamepad2 size={22} />, color: "#8400ffff" },
    { name: "Typing Skill (95%)", icon: <IconBrandJavascript size={22} />, color: "#ff9900ff" }, // Typing added
  ];

  // Typing Effect State for Section Title
  const fullText = "[ALL-SKILLS]";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 150); // typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1100,
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
          background: "linear-gradient(45deg, #6aff00ff, #6aff00ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: 40,
          fontSize: "2.3rem",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "2px",
          minHeight: "3rem",
        }}
      >
        {displayText}
      </Title>

      {/* Styles for skills */}
      <style>{`
        .skill-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          cursor: default;
        }

        .skill-badge:hover {
          transform: translateY(-4px) scale(1.03);
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .skills-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }
      `}</style>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="skill-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            viewport={{ once: true }}
          >
            <div style={{ color: skill.color }}>{skill.icon}</div>
            <span style={{ color: "white", fontWeight: 900 }}>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
