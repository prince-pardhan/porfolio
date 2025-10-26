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
    {
      name: "Editor",
      percent: 90,
      color: "#ff0080",
      icon: <IconPencil size={24} />,
      about:
        "Editing is not just about cutting and arranging; it’s about storytelling with precision and creativity. With strong command over tools and techniques, I bring clarity, rhythm, and emotion into every project, ensuring each piece flows seamlessly while maintaining high quality and professional presentation in every aspect.",
    },
    {
      name: "Poster Editing",
      percent: 99,
      color: "#ff0026",
      icon: <IconBrush size={24} />,
      about:
        "Poster editing is an art that communicates ideas visually. My designs combine color harmony, typography, and layout balance to make posters that stand out and connect with audiences instantly. Each poster is crafted thoughtfully to deliver the message clearly, creatively, and with a professional visual impact.",
    },
    {
      name: "Frontend Dev",
      percent: 95,
      color: "#0d00ff",
      icon: <IconCode size={24} />,
      about:
        "Frontend development is about building experiences that feel alive and intuitive. I focus on creating modern, responsive websites using clean code and best UI/UX practices. My goal is to ensure every user enjoys a smooth, fast, and visually appealing interaction across all devices and screen sizes.",
    },
    {
      name: "Photo Editor",
      percent: 97,
      color: "#00d9ff",
      icon: <IconCamera size={24} />,
      about:
        "Photo editing is where creativity meets technology. With advanced knowledge of color correction, retouching, and composition, I transform ordinary photos into visually stunning images. Every picture is enhanced thoughtfully, keeping natural beauty intact while adding artistic flair that makes it stand out in any setting.",
    },
    {
      name: "Video Editor",
      percent: 95,
      color: "#4c00ff",
      icon: <IconVideo size={24} />,
      about:
        "Video editing requires both technical precision and storytelling ability. I skillfully cut, synchronize, and enhance clips with sound, music, and transitions to create compelling visuals. Every project I handle is crafted to maintain emotional connection, smooth pacing, and a cinematic touch that captures attention instantly.",
    },
    {
      name: "HTML",
      percent: 99,
      color: "#ff3700",
      icon: <IconBrandHtml5 size={24} />,
      about:
        "HTML is the foundation of every website, and I use it with utmost precision. My expertise ensures semantic, clean, and accessible structure for every page. Whether building complex layouts or simple landing pages, I maintain web standards to deliver strong, fast, and SEO-friendly performance.",
    },
    {
      name: "CSS",
      percent: 99,
      color: "#264de4",
      icon: <IconBrandCss3 size={24} />,
      about:
        "CSS is the language that brings design to life. I craft beautiful, responsive layouts with smooth animations and pixel-perfect styling. My understanding of Flexbox, Grid, and modern frameworks ensures every web interface I style is visually elegant, consistent, and optimized for both desktop and mobile devices.",
    },
    {
      name: "JavaScript",
      percent: 90,
      color: "#ffcc00",
      icon: <IconBrandJavascript size={24} />,
      about:
        "JavaScript adds intelligence to web applications. I write efficient, modular, and clean code to create interactive experiences that respond instantly to user actions. With a deep understanding of DOM, ES6+, and modern frameworks, I turn static designs into dynamic, functional, and engaging digital platforms.",
    },
    {
      name: "ReactJS",
      percent: 95,
      color: "#00c8ff",
      icon: <IconBrandReact size={24} />,
      about:
        "ReactJS is my favorite framework for building scalable and high-performance applications. I develop reusable components, manage state efficiently, and ensure a seamless user experience. With my skills, I create lightning-fast, modular, and maintainable interfaces that enhance usability and improve the overall frontend architecture.",
    },
    {
      name: "Basic Computer",
      percent: 97,
      color: "#00ffaa",
      icon: <IconDeviceDesktop size={24} />,
      about:
        "Having a solid foundation in computer basics allows me to work efficiently across different platforms. I am comfortable with file management, system operations, office tools, and troubleshooting common issues. My computer knowledge supports my technical creativity, helping me adapt quickly to any software or environment.",
    },
    {
      name: "Writer",
      percent: 90,
      color: "#f43f5e",
      icon: <IconPencil size={24} />,
      about:
        "Writing allows me to express thoughts, creativity, and information in a meaningful way. I craft content that is engaging, informative, and emotionally resonant. Whether technical or creative writing, I focus on structure, clarity, and flow to make sure every piece connects with its intended audience effectively.",
    },
    {
      name: "Gamer",
      percent: 99,
      color: "#8400ff",
      icon: <IconDeviceGamepad2 size={24} />,
      about:
        "Gaming is more than just entertainment—it sharpens focus, strategy, and reflexes. As a gamer, I understand coordination, teamwork, and precision. It improves my problem-solving mindset and creative decision-making, which I often apply in my real-world projects and technical development tasks.",
    },
    {
      name: "Typing",
      percent: 95,
      color: "#ff9900",
      icon: <IconBrandJavascript size={24} />,
      about:
        "Typing efficiently is a crucial skill for productivity. I maintain excellent speed and accuracy, allowing me to complete technical and creative tasks quickly. This ability enhances my workflow, especially in programming, editing, and documentation, ensuring I deliver precise and timely work with strong attention to detail.",
    },
  ];

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
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "80px 20px",
        textAlign: "center",
        background: "linear-gradient(180deg, #000000, #000000)",
      }}
    >
      <Title
        order={2}
        style={{
          background: "linear-gradient(90deg, #00f5ff, #ff00c8)",
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
          background: #0a0a0a;
          border: 2px solid #1a1a1a;
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 30px;
          transition: all 0.3s ease;
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.05);
        }
        .chart-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
          border-color: #00ffff;
        }
        .skill-name {
          color: #ffffff;
          font-weight: 700;
          font-size: 1.1rem;
          margin-top: 12px;
        }
        .skill-about {
          color: #bbbbbb;
          font-size: 0.9rem;
          margin-top: 10px;
          line-height: 1.4;
          text-align: justify;
        }
      `}</style>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="chart-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
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
            <div className="skill-about">{skill.about}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
