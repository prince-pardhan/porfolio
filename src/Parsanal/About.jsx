import React from "react";
import {
  Container,
  Title,
  Text,
  Image,
  List,
  Stack,
  Card,
  Group,
} from "@mantine/core";
import { motion } from "framer-motion"; 
// import img1 from "./images/original-720851e051702405d1881785f1168a3a.webp";
import img2 from "./images/2873617d72b26362d1e6a626efceeac8.jpg";
import img3 from "./images/background-ai_094202459.png";

export default function About() {
  return (
    <Container
      size="lg"
      p="xl"
      style={{
        minHeight: "100vh",
        color: "#fff",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${img3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Stack spacing="xl" style={{ width: "100%" }}>
        {/* Name Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} // 👈 animation ek hi bar chalega
          style={{ textAlign: "center" }}
        >
          <Title
            order={1}
            style={{
              color: "#30ff06",
              textShadow: "0px 0px 25px rgba(48,255,6,0.9)",
              fontSize: "3rem",
              fontWeight: 800,
            }}
          >
            Rahul Swami
          </Title>
          <Text size="lg" style={{ color: "#bbb", fontSize: "1.2rem" }}>
            Creative Editor | Gamer $
          </Text>
        </motion.div>

        {/* Profile Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Group position="center" spacing="xl" align="center" justify="center">
            {[ img2].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Profile"
                radius="xl"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  border: "1px solid #30ff06",
                  borderRadius: "50%",
                  boxShadow: "1px 1px 90px rgba(48,255,6,0.6)",
                  transition: "transform 0.4s, box-shadow 0.4s",
                 
                }}
              />
            ))}
          </Group>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card
            shadow="lg"
            padding="lg"
            radius="lg"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(48,255,6,0.4)",
            }}
          >
            <Text size="md" style={{ lineHeight: 1.8, color:"white" }}>
              <strong>Hii</strong>👋! Main <strong>Rahul Swami</strong> – ek passionate{" "}
              <strong>Video & Photo Editor</strong>,{" "}
              <strong>Poster Designer</strong> aur{" "}
              <strong>Web Enthusiast</strong> hoon.
            </Text>
          </Card>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card
            shadow="xl"
            padding="lg"
            radius="lg"
            style={{
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(48,255,6,0.5)",
            }}
          >
            <Title order={3} style={{ color: "#30ff06" }}>
              Skills
            </Title>
            <List
              spacing="xs"
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "10px",
                color:"white"
              }}
            >
              {[
                 "Video Editing",
                "Photo Editing",
                "Writing",
                "Gaming",
                "Poster Design",
                "Typing",
                "Basic Computer",
                "AI Tools",
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                
              ].map((skill) => (
                <List.Item
                  key={skill}
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(48,255,6,0.2), rgba(48,255,6,0.05))",
                    padding: "8px 18px",
                    borderRadius: "25px",
                    margin: "6px",
                    border: "2px solid rgba(48,255,6,0.5)",
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  {skill}
                </List.Item>
              ))}
            </List>
          </Card>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card
            shadow="xl"
            padding="lg"
            radius="lg"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(48,255,6,0.4)",
            }}
          >
            <Title order={3} style={{ color: "#30ff06" }}>
              Experience
            </Title>
            <Text size="sm" style={{ marginTop: "10px", lineHeight: 1.8,  color:"white"}}>
              • 1+ years as a Video & Photo Editor <br />
              • Built personal & client-focused web projects <br />
              • Skilled in Gaming & Poster Designing <br />
              • Passionate about AI-powered creative tools <br />
            </Text>
          </Card>
        </motion.div>

        {/* My Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card
            shadow="xl"
            padding="lg"
            radius="lg"
            style={{
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(48,255,6,0.5)",
            }}
          >
            <Title order={3} style={{ color: "#30ff06" }}>
              My Details
            </Title>
            <Text size="sm" style={{ marginTop: "10px", lineHeight: 1.8,  color:"white"}}>
              Main <strong>Rahul</strong> hoon, ek{" "}
              <strong>Photo Editor, Video Editor & Poster Designer</strong>,
              Panipat me based.
            </Text>
            <Text
              mt="md"
              style={{
                color: "#30ff06",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              Thanks for visiting 
            </Text>
          </Card>
        </motion.div>
      </Stack>
    </Container>
  );
}
