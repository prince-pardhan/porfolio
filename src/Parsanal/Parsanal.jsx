// HomePage.jsx
import React from "react";
import {
  Container,
  Text,
  Title,
  Stack,
  Box,
  Group,
} from "@mantine/core";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import bgImage from "./images/background-ai_094202459.png";

export default function HomePage() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Replace with your own phone number
  const phoneNumber = "+918290400325"; 
  const whatsappNumber = "+918290400325"; 

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Playfair Display', serif",
        overflow: "hidden",
      }}
    >
      <Container size="lg" style={{ textAlign: "center", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Hero Section */}
          <Title
            order={1}
            style={{
              fontSize: isMobile ? "2.5rem" : "4.2rem",
              fontWeight: 700,
              letterSpacing: "1px",
              background: "linear-gradient(90deg, #ff0000ff 20%, #ff0000ff 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Rahul-Swami
          </Title>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Text
              size={isMobile ? "lg" : "xl"}
              mt="md"
              style={{
                color: "rgba(64, 255, 0, 1)",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                letterSpacing: "0.5px",
              }}
            >
              <h2 style={{color:"gray"}}>Editor</h2>
              <h2>Full Stack Developer</h2>
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Text
              mt="md"
              size={isMobile ? "sm" : "md"}
              style={{
                maxWidth: 590,
                fontWeight: "900",
                margin: "0 auto",
                color: "rgba(255, 208, 0, 1)",
                lineHeight: 1.7,
              }}
            >
              "Chanakya said that the one who controls Sama, Dana, Danda, and Bhed 
              is called a king — what we now call a hacker. And I control all three of them"
            </Text>
          </motion.div>

          {/* Navigation Buttons */}
          <Group position="center" mt="xl" spacing="md">
            {[
              { label: "👉About", path: "/about" },
              { label: "👉Skills", path: "/portfolio" },
            ].map((btn, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  onClick={() => handleNavigation(btn.path)}
                  style={{
                    padding: "12px 30px",
                    border: "2px solid rgba(255,255,255,0.3)",
                    borderRadius: "30px",
                    cursor: "pointer",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    backdropFilter: "blur(6px)",
                    background: "rgba(255,255,255,0.05)",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.15)";
                    e.target.style.border = "2px solid rgba(255,255,255,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.05)";
                    e.target.style.border = "2px solid rgba(255,255,255,0.3)";
                  }}
                >
                  {btn.label}
                </div>
              </motion.div>
            ))}
          </Group>

          {/* Call & WhatsApp Buttons */}
          <Group position="center" mt="md" spacing="md">
            {/* Call Button */}
            <motion.div
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={`tel:${phoneNumber}`}
                style={{
                  padding: "12px 30px",
                  border: "2px solid rgba(31, 32, 31, 1)",
                  borderRadius: "30px",
                  cursor: "pointer",
                  color: "#ffffffff",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  backdropFilter: "blur(6px)",
                  background: "rgba(0,255,0,0.05)",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(0, 0, 0, 0.15)";
                  e.target.style.border = "2px solid rgba(0, 0, 0, 0.9)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(0, 0, 0, 0.05)";
                  e.target.style.border = "2px solid rgba(0, 0, 0, 0.5)";
                }}
              >
                📞 Call Me
              </a>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.div
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "12px 30px",
                  border: "2px solid rgba(0, 0, 0, 1)",
                  borderRadius: "30px",
                  cursor: "pointer",
                  color: "#ffffffff",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  backdropFilter: "blur(6px)",
                  background: "rgba(0,255,0,0.05)",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(0, 0, 0, 0.15)";
                  e.target.style.border = "2px solid rgba(0, 0, 0, 0.9)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(0, 0, 0, 0.05)";
                  e.target.style.border = "2px solid rgba(0, 0, 0, 0.5)";
                }}
              >
                💬 WhatsApp
              </a>
            </motion.div>
          </Group>

          {/* Footer / Tagline */}
          <Box mt="xl" style={{ textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </div>
  );
}
