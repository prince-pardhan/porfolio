import React from "react";
import {
  Container,
  Title,
  Text,
  Image,
  Stack,
  Card,
  Group,
  Divider,
  Badge,
} from "@mantine/core";
import { motion } from "framer-motion";
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
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.95), rgba(0,20,0,0.95)), url(${img3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "20px",
        boxShadow: "inset 0 0 80px rgba(48,255,6,0.2)",
      }}
    >
      <Stack spacing="xl" style={{ width: "100%" }}>
        {/* Name Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: "center" }}
        >
          <Title
            order={1}
            style={{
              color: "#30ff06",
              textShadow: "0px 0px 35px rgba(48,255,6,1)",
              fontSize: "3.8rem",
              fontWeight: 900,
              letterSpacing: "4px",
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            Rahul Swami
          </Title>
          <Divider
            my="sm"
            style={{
              borderColor: "#30ff06",
              width: "150px",
              margin: "14px auto",
              borderWidth: "3px",
              boxShadow: "0px 0px 20px rgba(48,255,6,0.9)",
            }}
          />
          <Text
            size="lg"
            style={{
              color: "#aaa",
              fontSize: "1.4rem",
              letterSpacing: "2px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Creative Editor | Gamer | Designer
          </Text>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Group position="center">
            <Image
              src={img2}
              alt="Profile"
              radius="xl"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                border: "4px solid #30ff06",
                borderRadius: "50%",
                boxShadow: "0 0 70px rgba(48,255,6,0.9)",
                transition: "all 0.4s ease",
                cursor: "pointer",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.12) rotate(4deg)";
                e.currentTarget.style.boxShadow =
                  "0 0 120px rgba(48,255,6,1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) rotate(0)";
                e.currentTarget.style.boxShadow =
                  "0 0 70px rgba(48,255,6,0.9)";
              }}
            />
          </Group>
        </motion.div>

        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card
            shadow="xl"
            padding="lg"
            radius="xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(48,255,6,0.15), rgba(0,0,0,0.7))",
              border: "1px solid rgba(48,255,6,0.5)",
              backdropFilter: "blur(15px)",
              boxShadow: "0 0 35px rgba(48,255,6,0.4)",
            }}
          >
            <Text
              size="md"
              style={{
                lineHeight: 1.9,
                fontSize: "1.2rem",
                color: "#eee",
                textAlign: "center",
              }}
            >
              👋 <strong>Hi</strong>, I’m{" "}
              <span style={{ color: "#30ff06", fontWeight: "bold" }}>
                Rahul Swami
              </span>{" "}
              – {" "}
              <span style={{ color: "#30ff06" }}>Video & Photo Editor</span>,{" "}
              <span style={{ color: "#30ff06" }}>Poster Designer</span>{""}
             
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
            shadow="lg"
            padding="lg"
            radius="xl"
            style={{
              background: "rgba(0,0,0,0.75)",
              border: "1px solid rgba(48,255,6,0.6)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 25px rgba(48,255,6,0.5)",
            }}
          >
            <Title
              order={3}
              style={{
                color: "#30ff06",
                textShadow: "0px 0px 15px rgba(48,255,6,0.8)",
              }}
            >
              Skills
            </Title>
            <Group
              mt="md"
              spacing="sm"
              style={{ flexWrap: "wrap", justifyContent: "center" }}
            >
              {[
                "Video Editing",
                "Photo Editing",
                "Poster Design",
                "Gaming",
                "Writing",
                "AI Tools",
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Typing",
                "Basic Computer",
              ].map((skill) => (
                <Badge
                  key={skill}
                  size="lg"
                  radius="xl"
                  variant="outline"
                  style={{
                    borderColor: "#30ff06",
                    color: "#30ff06",
                    fontSize: "1rem",
                    padding: "12px 18px",
                    background: "rgba(48,255,6,0.15)",
                    boxShadow: "0 0 20px rgba(48,255,6,0.4)",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.5)";
                    e.currentTarget.style.background =
                      "rgba(48,255,6,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.background =
                      "rgba(48,255,6,0.15)";
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </Group>
          </Card>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card
            shadow="xl"
            padding="lg"
            radius="xl"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(48,255,6,0.5)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 25px rgba(48,255,6,0.4)",
            }}
          >
            <Title
              order={3}
              style={{
                color: "#30ff06",
                textShadow: "0px 0px 10px rgba(48,255,6,0.8)",
              }}
            >
              Experience
            </Title>
            <Text
              size="sm"
              style={{
                marginTop: "12px",
                lineHeight: 1.8,
                fontSize: "1.1rem",
                color: "#ddd",
              }}
            >
              • 1+ years as a Video & Photo Editor <br />
              • Built personal & client-focused web projects <br />
              • Skilled in Gaming & Poster Designing <br />
              • Passionate about AI-powered creative tools
            </Text>
          </Card>
        </motion.div>

        {/* My Details */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card
            shadow="xl"
            padding="lg"
            radius="xl"
            style={{
              background: "rgba(0,0,0,0.85)",
              border: "1px solid rgba(48,255,6,0.7)",
              backdropFilter: "blur(15px)",
              boxShadow: "0 0 30px rgba(48,255,6,0.6)",
            }}
          >
            <Title
              order={3}
              style={{
                color: "#30ff06",
                textShadow: "0px 0px 15px rgba(48,255,6,0.9)",
              }}
            >
              My Details
            </Title>
            <Text
              size="sm"
              style={{
                marginTop: "10px",
                lineHeight: 1.9,
                fontSize: "1.1rem",
                color: "#eee",
              }}
            >
              Main <strong>Rahul</strong> hoon, ek{" "}
              <strong>
                Photo Editor, Video Editor & Poster Designer
              </strong>{" "}
              – Panipat me based.
            </Text>
            <Text
              mt="md"
              style={{
                color: "#30ff06",
                fontWeight: "bold",
                fontSize: "1.3rem",
                textAlign: "center",
              }}
            >
              🚀 Thanks for visiting!
            </Text>
          </Card>
        </motion.div>
      </Stack>
    </Container>
  );
}
