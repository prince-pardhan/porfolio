import React, { useState } from "react";
import {
  Container,
  Title,
  Text,
  Image,
  Stack,
  Card,
  Grid,
} from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";
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
  IconChevronDown,
} from "@tabler/icons-react";
import img4 from "./images/WhatsApp Image 2025-09-27 at 11.15.33_aee201dc.jpg";

export default function About() {
  const [showSkills, setShowSkills] = useState(false);

  const skills = [
    { name: "Editor", icon: <IconPencil size={22} />, category: "Creative" },
    { name: "Gamer", icon: <IconDeviceGamepad2 size={22} />, category: "Hobbies" },
    { name: "HTML", icon: <IconBrandHtml5 size={22} />, category: "Development" },
    { name: "CSS", icon: <IconBrandCss3 size={22} />, category: "Development" },
    { name: "JavaScript", icon: <IconBrandJavascript size={22} />, category: "Development" },
    { name: "ReactJS", icon: <IconBrandReact size={22} />, category: "Development" },
    { name: "Writer", icon: <IconPencil size={22} />, category: "Creative" },
    { name: "Photo Editor", icon: <IconCamera size={22} />, category: "Creative" },
    { name: "Video Editor", icon: <IconVideo size={22} />, category: "Creative" },
    { name: "Poster Designer", icon: <IconPaint size={22} />, category: "Design" },
    { name: "Frontend Dev", icon: <IconCode size={22} />, category: "Development" },
    { name: "Basic Computer", icon: <IconDeviceDesktop size={22} />, category: "Technical" },
  ];

  const skillCategories = {
    Development: "#4f46e5",
    Creative: "#ec4899",
    Design: "#f59e0b",
    Technical: "#10b981",
    Hobbies: "#8b5cf6"
  };

  return (
    <div id="about">
      <Container
        size="lg"
        py="xl"
        style={{
          minHeight: "100vh",
          fontFamily: "'Inter', sans-serif",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          borderRadius: "0",
          padding: "80px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Enhanced Background */}
        <div className="background-effects">
          <div className="gradient-blob"></div>
          <div className="grid-pattern"></div>
        </div>

        <style>{`
          .background-effects {
            position: absolute;
            inset: 0;
            z-index: 0;
          }
          
          .gradient-blob {
            position: absolute;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%);
            top: -200px;
            right: -200px;
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
          }
          
          .grid-pattern {
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
            background-size: 50px 50px;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }

          .profile-pic {
            position: relative;
            display: inline-block;
            border-radius: 50%;
            padding: 4px;
            background: linear-gradient(45deg, #4f46e5, #ec4899, #f59e0b);
          }

          .profile-pic::before {
            content: '';
            position: absolute;
            inset: -2px;
            background: linear-gradient(45deg, #4f46e5, #ec4899, #f59e0b);
            border-radius: 50%;
            z-index: -1;
            animation: rotate 3s linear infinite;
          }

          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .skills-grid {
            display: grid;
            gap: 16px;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          }

          .skill-badge {
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: 600;
            padding: 16px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            cursor: default;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .skill-badge::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            transition: left 0.5s;
          }

          .skill-badge:hover::before {
            left: 100%;
          }

          .skill-badge:hover {
            transform: translateY(-2px);
            border-color: rgba(255, 255, 255, 0.3);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }

          .custom-btn {
            font-weight: 600;
            font-size: 1rem;
            padding: 14px 32px;
            border-radius: 12px;
            cursor: pointer;
            background: linear-gradient(45deg, #4f46e5, #7c3aed);
            border: none;
            color: white;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            align-items: center;
            gap: 8px;
            position: relative;
            overflow: hidden;
          }

          .custom-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
          }

          .custom-btn:hover::before {
            left: 100%;
          }

          .custom-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(79, 70, 229, 0.4);
          }

          .category-badge {
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            background: rgba(255, 255, 255, 0.1);
            margin-left: auto;
          }
        `}</style>

        <Stack spacing="xl" align="center" style={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
            style={{ textAlign: "center" }}
          >
            <Text 
              size="lg" 
              style={{ 
                color: "#a5b4fc",
                fontSize: "1.1rem",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase"
              }}
            >
              About Me
            </Text>
            <Title 
              order={1} 
              style={{ 
                color: "white",
                fontSize: "3rem",
                fontWeight: 700,
                marginTop: "8px",
                background: "linear-gradient(45deg, #ffffff, #a5b4fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Rk Swami
            </Title>
          </motion.div>

          {/* Profile Section */}
          <Grid gutter="xl" style={{ width: "100%", maxWidth: 1200, alignItems: "center" }}>
            <Grid.Col md={4} style={{ display: "flex", justifyContent: "center" }}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8, delay: 0.1 }} 
                viewport={{ once: true }}
              >
                <div className="profile-pic">
                  <Image
                    src={img4}
                    alt="Profile"
                    style={{
                      width: "280px",
                      height: "280px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "4px solid #0f0f0f",
                    }}
                  />
                </div>
              </motion.div>
            </Grid.Col>

            <Grid.Col md={8}>
              <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }} 
                viewport={{ once: true }}
              >
                <Card 
                  padding="xl" 
                  radius="lg" 
                  style={{ 
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Text 
                    size="xl" 
                    weight={700} 
                    style={{ 
                      color: "white",
                      fontSize: "2rem",
                      marginBottom: "16px"
                    }}
                  >
                    Creative Professional
                  </Text>
                  <Text 
                    size="md" 
                    style={{ 
                      lineHeight: 1.7, 
                      color: "#d1d5db",
                      fontSize: "1.1rem"
                    }}
                  >
                    Hi, I'm <span style={{ fontWeight: "700", color: "#a5b4fc" }}>Rk Swami</span>, 
                    a passionate creative professional with expertise in editing, design, and frontend development. 
                    With over <strong style={{ color: "#a5b4fc" }}>2 years of experience</strong>, I've collaborated 
                    with renowned organizations like <span style={{ color: "#f59e0b" }}>Cult Music Production</span> 
                    and <span style={{ color: "#f59e0b" }}>Ks Junction Sirsa</span> to deliver exceptional visual 
                    and digital experiences.
                  </Text>
                  
                  <div style={{ display: "flex", gap: "16px", marginTop: "24px", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "12px", height: "12px", background: "#10b981", borderRadius: "50%" }}></div>
                      <Text style={{ color: "#d1d5db" }}>Editor</Text>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "12px", height: "12px", background: "#f59e0b", borderRadius: "50%" }}></div>
                      <Text style={{ color: "#d1d5db" }}>Poster Designer</Text>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "12px", height: "12px", background: "#4f46e5", borderRadius: "50%" }}></div>
                      <Text style={{ color: "#d1d5db" }}>Frontend Developer</Text>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Grid.Col>
          </Grid>

          {/* Skills Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }} 
            viewport={{ once: true }} 
            style={{ width: "100%", maxWidth: 1000, textAlign: "center" }}
          >
            <button 
              className="custom-btn" 
              onClick={() => setShowSkills(!showSkills)}
              style={{ marginBottom: "30px" }}
            >
              {showSkills ? "Hide Skills" : "Explore Skills"}
              <motion.div
                animate={{ rotate: showSkills ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <IconChevronDown size={20} />
              </motion.div>
            </button>

            <AnimatePresence>
              {showSkills && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card 
                    padding="xl" 
                    radius="lg" 
                    style={{ 
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Title
                      order={3}
                      style={{
                        marginBottom: 32,
                        fontWeight: 700,
                        background: "linear-gradient(45deg, #a5b4fc, #ec4899)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: "2rem"
                      }}
                    >
                      Skills & Expertise
                    </Title>
                    <div className="skills-grid">
                      {skills.map((skill, idx) => (
                        <motion.div
                          key={idx}
                          className="skill-badge"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <div style={{ color: skillCategories[skill.category] }}>
                            {skill.icon}
                          </div>
                          <span style={{ color: "white" }}>{skill.name}</span>
                          <span 
                            className="category-badge"
                            style={{ color: skillCategories[skill.category] }}
                          >
                            {skill.category}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Stack>
      </Container>
    </div>
  );
}