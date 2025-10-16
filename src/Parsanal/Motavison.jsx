// src/SkillsSection.jsx
import React, { useEffect, useState } from "react";
import { Title, Card } from "@mantine/core";
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

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "80px 20px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Animated Hacking Background */}
      <canvas
        id="matrixCanvas"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          backgroundColor: "black",
        }}
      ></canvas>

      {/* JS Animation for Hacking Lines */}
      <MatrixBackground />

      {/* Content Above Background */}
      <div style={{ position: "relative", zIndex: 1 }}>
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
    </div>
  );
}

// Matrix-style animated background component
function MatrixBackground() {
  useEffect(() => {
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);
    return () => clearInterval(interval);
  }, []);

  return null;
}
