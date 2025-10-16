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

export default function About() {
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
      `}</style>

      <Container size="lg" py="xl" style={{ zIndex: 2, position: "relative" }}>
        <Stack spacing="xl" align="center">
         
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
                background:
                  "linear-gradient(90deg, #ff0000ff, #ff0000ff, #ff0000ff)",
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
                Editing, Design, and Development
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
                Hii, I am Editing (and) Full Stack Developer
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
                With 8 month of experience Editing, working with{" "}
                <span style={{ color: "#38fc02ff" }}>
                  (Cult Music Production)
                </span>{" "}
                and{" "}
                <span style={{ color: "#01b3ffff" }}>
                  (Ks Junction Sirsa)
                </span>
                , I bring together creativity, structure, and precision to every
                project I take on. <br />
              </Text>
            </Card>

            <Card 
              radius="lg"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.05)",
                backdropFilter: "blur(15px)",
                maxWidth: 900,
                textAlign: "center",
                marginTop: "50px", 
              }}
            >
              <Text style={{color:"white", fontWeight:"900"}}>
                <h1>
                  <span style={{color:"red", fontWeight:"900"}}>200+</span> Long video
                  <span style={{color:"green"}}> 300+</span> Short Video <br /> 
                </h1>
                Editing ki h (And) <span style={{color:"yellow"}}>2 years</span> complite in Editing 
                Cours <br />
                <span style={{fontWeight:"200", color:"#00ffd9ff"}}>
                  Every project is a new experience for me, where I use my
                  creativity, timing, and passion to make every moment special.
                </span> <br />
                <span style={{fontWeight:"700", color:"#01b3ffff"}}>
                  The one behind the camera, showing the world a new perspective. (Editor)
                </span>
              </Text>
            </Card>
          </motion.div>
        </Stack>
      </Container>
    </div>
  );
}
