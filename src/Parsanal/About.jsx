import React, { useState } from "react";
import {
  Container,
  Title,
  Text,
  Image,
  Stack,
  Card,
} from "@mantine/core";
import { color, motion } from "framer-motion";
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandReact,
  IconDeviceGamepad2,
  IconPencil,
  IconCamera,
  IconVideo,
  IconPaint,
  IconCode,
  IconDeviceDesktop,
} from "@tabler/icons-react";
import img4 from "./images/self-pic.jpeg";

export default function About() {
  const [showSkills, setShowSkills] = useState(false);

  const skills = [
    { name: "Editor",  icon: <IconPencil size={26} color="#00ff00" /> },
    { name: "Gamer", icon: <IconDeviceGamepad2 size={24} color="#0ff" /> },
    { name: "HTML", icon: <IconBrandHtml5 size={26} color="#ff0080" /> },
    { name: "CSS", icon: <IconBrandCss3 size={26} color="#00ffcc" /> },
    { name: "JavaScript", icon: <IconBrandJavascript size={26} color="#ffee00" /> },
    { name: "ReactJS", icon: <IconBrandReact size={26} color="#61DBFB" /> },
    { name: "Writer", icon: <IconPencil size={24} color="#0ff" /> },
    { name: "Photo Editor", icon: <IconCamera size={24} color="#ff0055" /> },
    { name: "Video Editor", icon: <IconVideo size={24} color="#0f0" /> },
    { name: "Poster Designer", icon: <IconPaint size={24} color="#00f" /> },
    { name: "Frontend Dev", icon: <IconCode size={24} color="#0ff" /> },
    { name: "Basic Computer", icon: <IconDeviceDesktop size={24} color="#0f0" /> },
  ];

  return (
    <div id="about">
      <Container
        size="lg"
        py="xl"
        style={{
          color:"#ffffffff",
          minHeight: "100vh",
          fontFamily: "'Courier New', monospace",
          background: "radial-gradient(ellipse at center, #000 0%, #050505 100%)",
          borderRadius: "12px",
          padding: "60px 30px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background matrix effect */}
        <div className="matrix-bg"></div>

        <style>{`
          .matrix-bg {
            position: absolute;
            inset: 0;
            background-image: repeating-linear-gradient(
              0deg,
              rgba(0,255,0,0.05) 0px,
              rgba(0,255,0,0.05) 1px,
              transparent 1px,
              transparent 2px
            );
            z-index: 0;
            animation: scroll 2s linear infinite;
          }
          @keyframes scroll {
            0% { background-position-y: 0; }
            100% { background-position-y: 100px; }
          }

          .profile-pic {
            position: relative;
            display: inline-block;
            border: 2px solid #0f0;
            border-radius: 50%;
            box-shadow: 0 0 20px #0f0;
          }

          .skills-grid {
            display: grid;
            gap: 18px;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          }

          .skill-badge {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-weight: 600;
            padding: 12px 14px;
            border-radius: 10px;
            background: rgba(0,255,0,0.08);
            box-shadow: 0 0 12px rgba(0,255,0,0.5);
            cursor: default;
            font-family: monospace;
            transition: 0.3s ease;
            overflow: hidden;
          }
          .skill-badge:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px #0f0;
          }

          .custom-btn {
            font-weight: 700;
            font-size: 1rem;
            padding: 12px 28px;
            border-radius: 10px;
            cursor: pointer;
            background: linear-gradient(90deg, #00ff00, #0ff);
            border: none;
            box-shadow: 0 0 12px #0ff;
            transition: all 0.3s ease;
          }
          .custom-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px #0ff;
          }
        `}</style>

        <Stack spacing="xl" align="center" style={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Text size="lg" style={{ color: "#0f0", fontSize: "1.1rem" }}>
              About Me
            </Text>
          </motion.div>

          {/* Profile */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }} style={{ textAlign: "center" }}>
            <div className="profile-pic">
              <Image
                src={img4}
                alt="Profile"
                radius="xl"
                style={{
                  width: "220px",
                  height: "220px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #0f0",
                }}
              />
            </div>
            <Text mt="md" size="xl" weight={700} style={{ color: "#0ff" }}>
              Rk Swami
            </Text>
            <Text size="sm" style={{ color: "#0f0" }}>
              Editor • Poster Designer • Frontend Dev
            </Text>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} viewport={{ once: true }} style={{ width: "100%", maxWidth: 760 }}>
            <Card shadow="lg" padding="lg" radius="xl" style={{ background: "rgba(0,0,0,0.6)", border: "1px solid #0f0", backdropFilter: "blur(5px)", textAlign: "center" }}>
              <Text size="md" style={{ lineHeight: 1.8, color: "#0f0" }}>
                Hi, I’m <span style={{ fontWeight: "700", color: "#0ff" }}>Rk Swami</span> <br />
                Skilled in <span style={{ color: "#0f0" }}>Editing</span>,{" "}
                <span style={{ color: "#ff0" }}>Poster Designing</span>, and{" "}
                <span style={{ color: "#0ff" }}>Frontend Development</span>. <br /><br />
                With <strong style={{ color: "#0ff" }}>2+ years experience</strong>, I’ve worked in <span style={{ color: "#0f0", fontWeight: "700" }}>Cult Music Production</span> & <span style={{ color: "#0f0", fontWeight: "700" }}>Ks Junction Sirsa</span>.
              </Text>
            </Card>
          </motion.div>

          {/* Skills with Toggle */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} viewport={{ once: true }} style={{ width: "100%", maxWidth: 900, textAlign: "center", color:"white"}}>
            <button className="custom-btn" onClick={() => setShowSkills(!showSkills)} style={{ marginBottom: "20px" }}>
              {showSkills ? "Close Skills" : "Open Skills"}
            </button>

            {showSkills && (
              <Card shadow="lg" padding="lg" radius="xl" style={{ background: "rgba(0,0,0,0.6)", border: "1px solid #0ff", backdropFilter: "blur(5px)", textAlign: "center" }}>
                <Title
                  order={4}
                  style={{
                    marginBottom: 18,
                    fontWeight: 700,
                    background: "linear-gradient(90deg, #00ff00, #00ffff, #ff00ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  My Skills
                </Title>
                <div className="skills-grid">
                  {skills.map((s, idx) => (
                    <motion.div style={{color:"white"}}
                      key={idx}
                      className="skill-badge"
                      title={s.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {s.icon}
                      <span>{s.name}</span>
                      
                    </motion.div>
                  ))}
                </div>
              </Card>
            )}
          </motion.div>
        </Stack>
      </Container>
    </div>
  );
}
