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
        background: "linear-gradient(135deg, #e0eafc, #cfdef3)", // soft gradient
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Profile Card */}
      <Card
        shadow="xl"
        radius="lg"
        padding="xl"
        style={{
          maxWidth: "580px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.85)",
          border: "1px solid rgba(200,200,200,0.2)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
          textAlign: "center",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
          e.currentTarget.style.boxShadow =
            "0 18px 45px rgba(0,0,0,0.18)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow =
            "0 12px 40px rgba(0,0,0,0.12)";
        }}
      >
        {/* Profile Image */}
        <Image
          src={img1}
          alt="Profile"
          style={{
            width: isMobile ? "130px" : "170px",
            height: isMobile ? "130px" : "170px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "5px solid transparent",
            background: "linear-gradient(135deg, #4facfe, #00f2fe) padding-box, white border-box",
            margin: "0 auto",
          }}
        />

        {/* Name */}
        <Text
          fw={800}
          style={{
            marginTop: "20px",
            fontSize: isMobile ? "26px" : "36px",
            background: "linear-gradient(90deg, #4facfe, #2a5298)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Rk Swami
        </Text>

        {/* Tagline */}
        <Text
          size={isMobile ? "sm" : "md"}
          style={{
            marginTop: "10px",
            color: "#555",
            fontStyle: "italic",
            lineHeight: 1.6,
          }}
        >
           It Takes Time To Become Successful – And Time Is Money
        </Text>

        {/* Buttons */}
        <Group mt="xl" spacing="md" position="center">
          <a href="#about" style={{ textDecoration: "none" }}>
            <Button variant="gradient" gradient={{ from: "blue", to: "cyan" }} radius="xl">
              About
            </Button>
          </a>

          <a href="#motavison" style={{ textDecoration: "none" }}>
            <Button variant="gradient" gradient={{ from: "indigo", to: "violet" }} radius="xl">
              Poetry
            </Button>
          </a>
          <a href="#login" style={{ textDecoration: "none" }}>
            <Button variant="gradient" gradient={{ from: "indigo", to: "violet" }} radius="xl">
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
            >
              Call
            </Button>
          </a>
        </Group>
      </Card>

      {/* Sections */}
      <div id="about" style={{ marginTop: "60px", width: "100%" }}>
        <About />
      </div>

      <div id="motavison" style={{ marginTop: "60px", width: "100%" }}>
        <Poirty />
      </div>
      <div id="login" style={{ marginTop: "60px", width: "100%" }}>
        <LoginPage />
      </div>
    </Container>
  );
}
  