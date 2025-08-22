import React from 'react';
import {
  Container,
  Text,
  Image,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import img1 from "./images/self-pic.jpeg";
import img3 from "./images/background-ai_094202459.png";
import "../App.css";

export default function ProfilePage() {
  const isMobile = useMediaQuery("(max-width: 780px)");
  const [activeBtn, setActiveBtn] = React.useState(null);

  const handleClick = (btn) => setActiveBtn(btn);

  const getButtonStyle = (btn) => ({
    background: activeBtn === btn
      ? "linear-gradient(135deg, #ff00cc, #3333ff)"
      : "rgba(255,255,255,0.08)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.25)",
    padding: isMobile ? "10px 20px" : "14px 30px",
    fontSize: isMobile ? "14px" : "16px",
    fontWeight: "600",
    borderRadius: "50px",
    cursor: "pointer",
    margin: "8px",
    boxShadow: activeBtn === btn
      ? "0 0 25px rgba(255,0,150,0.9), 0 0 60px rgba(0,200,255,0.7)"
      : "0 4px 15px rgba(0,0,0,0.5)",
    transition: "all 0.4s ease",
    transform: activeBtn === btn ? "scale(1.15)" : "scale(1)",
    backdropFilter: "blur(12px)",
    letterSpacing: "1px",
  });

  return (
    <Container
      fluid
      style={{
        minHeight: '100vh',
        width: "100%",
        padding: 20,
        backgroundImage: `url(${img3})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,40,0.9))",
        backdropFilter: "blur(8px)",
        zIndex: 0
      }} />

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "40px",
          padding: "18px 25px",
          borderRadius: "30px",
          zIndex: 1
        }}
      >
        <button onClick={() => handleClick('about')} style={getButtonStyle('about')}>
          <a href="/About" style={{ color: "inherit", textDecoration: "none" }}>About</a>
        </button>

        <button onClick={() => handleClick('poetry')} style={getButtonStyle('poetry')}>
          <a href="/Motavison" style={{ color: "inherit", textDecoration: "none" }}>Poetry</a>
        </button>

        <button onClick={() => handleClick('whatsapp')} style={getButtonStyle('whatsapp')}>
          <a href="https://wa.me/8290400325" style={{ color: "inherit", textDecoration: "none" }}>Whatsapp</a>
        </button>

        <button onClick={() => handleClick('call')} style={getButtonStyle('call')}>
          <a href="tel:+918290400325" style={{ color: "inherit", textDecoration: "none" }}>Call</a>
        </button>
      </div>

      {/* Profile Image */}
      <Image
        src={img1}
        alt="Profile"
        style={{
          width: isMobile ? '140px' : '200px',
          height: isMobile ? '140px' : '200px',
          objectFit: 'cover',
          borderRadius: '50%',
          border: "6px solid rgba(255,255,255,0.9)",
          boxShadow: "0 0 40px rgba(0,200,255,0.9), 0 0 90px rgba(255,0,150,0.8)",
          transition: "all 0.5s ease-in-out",
          transform: "scale(1)",
          zIndex: 1,
        }}
        className="profile-img"
        mb="sm"
      />

      {/* Title */}
      <Text
        fw={900}
        style={{
          marginTop: "20px",
          fontSize: isMobile ? "26px" : "42px",
          background: "linear-gradient(90deg, #ff00cc, #00ffff, #ffcc00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          zIndex: 1,
          textShadow: "0 0 12px rgba(255,255,255,0.5)",
        }}
      >
        Rahul Swami
      </Text>

      {/* Subtitle */}
      <Text
        size={isMobile ? "sm" : "md"}
        style={{
          marginTop: "12px",
          color: "#ddd",
          fontStyle: "italic",
          letterSpacing: "2px",
          textShadow: "0 0 10px rgba(0,200,255,0.8)",
          zIndex: 1,
        }}
      >
        
      </Text>
    </Container>
  );
}
