import React, { useState } from "react";
import {
  Container,
  Title,
  Text,
  Image,
  Stack,
  Card,
  Button,
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
} from "@tabler/icons-react";
import img4 from "./images/self-pic.jpeg";

export default function About() {
  const [showSkills, setShowSkills] = useState(false);

  const skills = [
    { name: "Editor", icon: <IconPencil size={20} /> },
    { name: "Gamer", icon: <IconDeviceGamepad2 size={20} /> },
    { name: "HTML", icon: <IconBrandHtml5 size={20} color="#E44D26" /> },
    { name: "CSS", icon: <IconBrandCss3 size={20} color="#1572B6" /> },
    { name: "JavaScript", icon: <IconBrandJavascript size={20} color="#F7DF1E" /> },
    { name: "ReactJS", icon: <IconBrandReact size={20} color="#61DBFB" /> },
    { name: "Writer", icon: <IconPencil size={20} /> },
    { name: "Photo Editor", icon: <IconCamera size={20} /> },
    { name: "Video Editor", icon: <IconVideo size={20} /> },
    { name: "Poster Designer", icon: <IconPaint size={20} /> },
    { name: "Frontend Dev", icon: <IconCode size={20} /> },
    { name: "Basic Computer", icon: <IconDeviceDesktop size={20} /> },
  ];

  return (
    <div id="about">
      <Container
        size="lg"
        py="xl"
        style={{
          minHeight: "100vh",
          color: "#fff",
          background: "linear-gradient(135deg,#141E30,#243B55)",
          borderRadius: "20px",
          padding: "60px 30px",
        }}
      >
        {/* Local CSS */}
        <style>{`
          .skills-grid {
            display: grid;
            gap: 20px;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            align-items: stretch;
          }

          .skill-badge {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-weight: 600;
            padding: 16px 18px;
            border-radius: 16px;
            font-size: 1rem;
            color: #fff;
            cursor: default;
            background: rgba(255, 255, 255, 0.08);
            border: 2px solid transparent;
            box-shadow: 0 6px 16px rgba(0,0,0,0.25);
            transition: transform 250ms ease, box-shadow 250ms ease, border 300ms ease;
            backdrop-filter: blur(8px);
            position: relative;
            overflow: hidden;
          }

          .skill-badge::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 2px;
            background: linear-gradient(135deg, #ffb703, #ff4800, #ffb703);
            -webkit-mask: 
              linear-gradient(#fff 0 0) content-box, 
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.4s ease;
          }

          .skill-badge:hover::before {
            opacity: 1;
          }

          .skill-badge:hover {
            transform: translateY(-8px) scale(1.06);
            box-shadow: 0 14px 30px rgba(0,0,0,0.35);
          }

          .skill-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            background: rgba(255,255,255,0.15);
            border-radius: 50%;
            box-shadow: inset 0 2px 6px rgba(0,0,0,0.2);
          }

          .custom-btn {
            font-weight: 700;
            font-size: 1rem;
            padding: 12px 28px;
            border-radius: 14px;
            border: none;
            cursor: pointer;
            background: linear-gradient(135deg, #1100ffff, #1100ffff);
            color: #fff;
            box-shadow: 0 6px 16px #1100ffff;
            transition: all 0.3s ease-in-out;
            position: relative;
            overflow: hidden;
          }

          .custom-btn:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow: 0 12px 30px #1100ffff;
          }
        `}</style>

        <Stack spacing="xl" align="center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            style={{ textAlign: "center" }}
          >
            <Text size="lg" style={{ color: "#e0e0e0", fontSize: "1.05rem" }}>
              Rk Swami
            </Text>
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ textAlign: "center" }}
          >
            <Image
              src={img4}
              alt="Profile"
              radius="xl"
              style={{
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                margin: "auto",
                objectFit: "cover",
                border: "5px solid #031cffff",
                boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
              }}
            />
            <Text mt="md" size="xl" weight={700} style={{ color: "#fff" }}>
              Rk Swami
            </Text>
            <Text size="sm" style={{ color: "#ccc" }}>
              Editor • Poster Designer • Frontend Dev
            </Text>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            style={{ width: "100%", maxWidth: 760 }}
          >
            <Card
              shadow="md"
              padding="lg"
              radius="xl"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
                textAlign: "center",
              }}
            >
              <Text size="md" style={{ lineHeight: 1.8, color: "#eee" }}>
                Hi, I’m{" "}
                <span style={{ color: "#fff", fontWeight: "700" }}>Rk Swami</span>
                <br />
                Skilled in <span style={{ color: "#18ff03ff" }}>Video & Photo Editing</span>,{" "}
                <span style={{ color: "#10ff03ff" }}>Poster Designing</span>, and{" "}
                <span style={{ color: "#25ff03ff" }}>Frontend Development</span>.
                <br />
                <br />
                With <strong style={{ color: "#3aff03ff" }}>2 years of experience</strong>,
                I’ve worked in <span style={{ color: "#fff", fontWeight: "700" }}>Cult Music Production</span>{" "}
                & <span style={{ color: "#fff", fontWeight: "700" }}>Ks Junction Sirsa</span>.
              </Text>
            </Card>
          </motion.div>

          {/* Skills with Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            viewport={{ once: true }}
            style={{ width: "100%", maxWidth: 900, textAlign: "center" }}
          >
            <button
              className="custom-btn"
              onClick={() => setShowSkills(!showSkills)}
              style={{ marginBottom: "20px" }}
            >
              {showSkills ? " close Skills " : " Open Skills"}
            </button>

            {showSkills && (
              <Card
                shadow="md"
                padding="lg"
                radius="xl"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(10px)",
                  textAlign: "center",
                }}
              >
                <Title order={4} style={{ color: "#031cffff", marginBottom: 18 }}>
                  My Skills
                </Title>

                <div className="skills-grid">
                  {skills.map((s, idx) => (
                    <motion.div
                      key={idx}
                      className="skill-badge"
                      title={s.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="skill-icon">{s.icon}</span>
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
