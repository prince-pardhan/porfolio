import React from "react";
import {
  Container,
  Text,
  Image,
  Card,
  Group,
  Button,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import { IconPhoneCall, IconBrandWhatsapp } from "@tabler/icons-react";
import img1 from "./images/image.png";
import "../App.css";
import About from "./About";
import Poirty from "./Motavison";
import LoginPage from "./Login";

export default function ProfilePage() {
  const isMobile = useMediaQuery("(max-width: 780px)");

  return (
    <Container
      fluid
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: isMobile ? "20px" : "60px",
        // background: "linear-gradient(135deg, #1e3c72, #2a5298, #4facfe)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 12s ease infinite",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Card
          shadow="xl"
          radius="xl"
          padding="xl"
          style={{
            maxWidth: "600px",
            width: "100%",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 25px 70px rgba(0,0,0,0.35)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.4s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-12px) scale(1.04)";
            e.currentTarget.style.boxShadow =
              "0 30px 80px rgba(0,0,0,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow =
              "0 25px 70px rgba(0,0,0,0.35)";
          }}
        >
          {/* Floating Glow */}
          <div
            style={{
              position: "absolute",
              top: "-40%",
              left: "-40%",
              width: "180%",
              height: "180%",
              background:
                "radial-gradient(circle at center, rgba(0,242,254,0.15), transparent 70%)",
              animation: "rotateGlow 25s linear infinite",
              zIndex: 0,
            }}
          />

          {/* Profile Image */}
          <div
            style={{
              width: isMobile ? "140px" : "180px",
              height: isMobile ? "140px" : "180px",
              margin: "0 auto",
              borderRadius: "50%",
              background: "linear-gradient(135deg,#00f2fe,#4facfe,#2a5298)",
              padding: "6px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Image
              src={img1}
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                border: "5px solid white",
              }}
            />
          </div>

          {/* Name */}
          <Text
            fw={900}
            style={{
              marginTop: "20px",
              fontSize: isMobile ? "28px" : "40px",
              background: "linear-gradient(90deg, #00f2fe, #4facfe, #2a5298)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 15px rgba(79,172,254,0.6)",
              letterSpacing: "2px",
              position: "relative",
              zIndex: 1,
            }}
          >
            Rk Swami
          </Text>

          {/* Tagline */}
          <Text
            size={isMobile ? "sm" : "md"}
            style={{
              marginTop: "12px",
              fontStyle: "italic",
              lineHeight: 1.6,
              position: "relative",
              zIndex: 1,
            }}
          >
            “It Takes Time To Become Successful – And Time Is Money”
          </Text>

          {/* Buttons */}
          <Group
            mt="xl"
            spacing="md"
            position="center"
            style={{ flexWrap: "wrap", position: "relative", zIndex: 1 }}
          >
            <a href="#about" style={{ textDecoration: "none" }}>
              <Button
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
                radius="xl"
                size={isMobile ? "sm" : "md"}
                style={{ transition: "0.3s", fontWeight: "bold" }}
              >
                About
              </Button>
            </a>

            <a href="#motavison" style={{ textDecoration: "none" }}>
              <Button
                variant="gradient"
                gradient={{ from: "indigo", to: "violet" }}
                radius="xl"
                size={isMobile ? "sm" : "md"}
                style={{ transition: "0.3s", fontWeight: "bold" }}
              >
                Poetry
              </Button>
            </a>

            <a href="#login" style={{ textDecoration: "none" }}>
              <Button
                variant="gradient"
                gradient={{ from: "orange", to: "red" }}
                radius="xl"
                size={isMobile ? "sm" : "md"}
                style={{ transition: "0.3s", fontWeight: "bold" }}
              >
                Login
              </Button>
            </a>

            <a
              href="https://wa.me/8290400325"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                radius="xl"
                color="green"
                leftIcon={<IconBrandWhatsapp size={18} />}
                size={isMobile ? "sm" : "md"}
                style={{
                  fontWeight: "bold",
                  borderWidth: "2px",
                  transition: "0.3s",
                }}
              >
                WhatsApp
              </Button>
            </a>

            <a href="tel:+918290400325">
              <Button
                variant="outline"
                radius="xl"
                color="teal"
                leftIcon={<IconPhoneCall size={18} />}
                size={isMobile ? "sm" : "md"}
                style={{
                  fontWeight: "bold",
                  borderWidth: "2px",
                  transition: "0.3s",
                }}
              >
                Call
              </Button>
            </a>
          </Group>
        </Card>
      </motion.div>

      {/* Sections */}
      <motion.div
        id="about"
        style={{ marginTop: "80px", width: "100%" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      <motion.div
        id="motavison"
        style={{ marginTop: "80px", width: "100%" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Poirty />
      </motion.div>

      <motion.div
        id="login"
        style={{ marginTop: "80px", width: "100%" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <LoginPage />
      </motion.div>

      {/* Extra CSS Animations */}
      <style>
        {`
          @keyframes gradientBG {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
          @keyframes rotateGlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </Container>
  );
}
