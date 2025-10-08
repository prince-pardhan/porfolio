// About.jsx
import React from "react";
import {
  Container,
  Title,
  Text,
  Stack,
  Card,
} from "@mantine/core";
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
  IconPaint,
  IconCode,
  IconDeviceDesktop,
  IconBrush,
} from "@tabler/icons-react";

export default function About() {
  const skills = [
    { name: "Editor (90%)", icon: <IconPencil size={22} />, color: "#ff0080ff" },
    { name: "Poster Editing (99%)", icon: <IconBrush size={22} />, color: "#ff0026ff" }, 
    { name: "Frontend Developer (95%)", icon: <IconCode size={22} />, color: "#0d00ffff" },
    { name: "Photo Editor  (97.09%)", icon: <IconCamera size={22} />, color: "#00d9ffff" },
    { name: "Video Editor (95.07%)", icon: <IconVideo size={22} />, color: "#4c00ffff" },
    { name: "HTML (99%)", icon: <IconBrandHtml5 size={22} />, color: "#ff3700ff" },
    { name: "CSS (99%)", icon: <IconBrandCss3 size={22} />, color: "#264de4" },
    { name: "JavaScript(90%)", icon: <IconBrandJavascript size={22} />, color: "#ffcc00ff" },
    { name: "ReactJS(95%)", icon: <IconBrandReact size={22} />, color: "#00c8ffff" },
    { name: "Basic Computer(97%)", icon: <IconDeviceDesktop size={22} />, color: "#00ffaaff" },
    { name: "Writer(90%)", icon: <IconPencil size={22} />, color: "#f43f5e" },
    { name: "Gamer(99%)", icon: <IconDeviceGamepad2 size={22} />, color: "#8400ffff" },
    { Name: "Typing (95%)",colur:"red"}
  ]

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #1a1a2e 0%, #0a0a0a 80%)",
        color: "white",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Floating glow effects */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, #0004ffff 50%, transparent 100%)",
          filter: "blur(100px)",
          opacity: 0.6,
          animation: "float 9s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-120px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, #0004ffff 50%, transparent 100%)",
          filter: "blur(100px)",
          opacity: 0.5,
          animation: "float 7s ease-in-out infinite alternate",
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

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
          gap: 16px;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }
      `}</style>

      <Container size="lg" py="xl" style={{ zIndex: 2, position: "relative" }}>
        <Stack spacing="xl" align="center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center" }}
          >
            <Text
              style={{
                color: "#a78bfa",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
             
            </Text>
            <Title
              order={1}
              style={{
                fontSize: "3.5rem",
                background: "linear-gradient(90deg, #ff0000ff, #ff0000ff, #ff0000ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 800,
                marginTop: "8px",
              }}
            >
              Rk Swami
            </Title>
            <Text
              style={{
                maxWidth: "600px",
                margin: "10px auto 0",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
              }}
            >
              A creative professional specializing in{" "}
              <span style={{ color: "#55ff00ff", fontWeight: 600 }}>
                Editing, Design, and  Development
              </span>{" "}
              — passionate about blending technology and art to craft
              extraordinary digital experiences.
            </Text>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ marginTop: "40px" }}
          >
            <Card
              padding="xl"
              radius="lg"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(176, 26, 26, 0.1)",
                backdropFilter: "blur(15px)",
                maxWidth: 900,
                textAlign: "center",
              }}
            >
              <Text
                mt="lg"
                size="xl"
                fw={700}
                style={{
                  color: "#ffe600ff",
                  fontSize: "1.8rem",
                  marginBottom: "6px",
                }}
              >
                Hii, i am Editing (and) full stak Developer
              </Text>
              <Text
                size="md"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  maxWidth: "700px",
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                With 2+ years of experience Editing working with{" "}
                <span style={{ color: "#38fc02ff" }}>(Cult Music Production)</span> and{" "}
                <span style={{ color: "#01b3ffff" }}>(Ks Junction Sirsa)</span>, I
                bring together creativity, structure, and precision to every
                project I take on. <br />
                <span style={{color:"#01a6ffff", fontSize:"900"}}>200 + Long Video Editing (and) 150 + short video Editing </span>
              </Text>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              width: "100%",
              maxWidth: 1000,
              marginTop: "60px",
              textAlign: "center",
            }}
          >
            <Title
              order={2}
              style={{
                background  : "linear-gradient(45deg, #6aff00ff, #6aff00ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: 32,
                fontSize: "2.2rem",
                fontWeight: 700,
              }}
            > 
              [All-Skills]
            </Title>

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
                  <span style={{ color: "white", fontWeight: 600 }}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Stack>
      </Container>
    </div>
  );
}
