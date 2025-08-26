import React from 'react';
import {
  Container,
  Text,
  Image,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconPhoneCall, IconBrandWhatsapp } from "@tabler/icons-react";
import img1 from "./images/2873617d72b26362d1e6a626efceeac8.jpg";
import "../App.css";

export default function ProfilePage() {
  const isMobile = useMediaQuery("(max-width: 780px)");
  const [activeBtn, setActiveBtn] = React.useState(null);

  const handleClick = (btn) => setActiveBtn(btn);

  const getButtonStyle = (btn) => ({
    background: activeBtn === btn
      ? "linear-gradient(135deg, #00ffcc, #0066ff)"
      : "rgba(0,0,0,0.6)",
    color: "#0ff",
    border: "1px solid rgba(0,255,200,0.6)",
    padding: isMobile ? "12px" : "14px",
    fontSize: isMobile ? "14px" : "16px",
    fontWeight: "600",
    borderRadius: "50%",
    cursor: "pointer",
    margin: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: activeBtn === btn
      ? "0 0 25px rgba(0,255,200,0.9), 0 0 60px rgba(0,255,200,0.7)"
      : "0 4px 15px rgba(0,255,200,0.2)",
    transition: "all 0.4s ease",
    transform: activeBtn === btn ? "scale(1.15)" : "scale(1)",
    backdropFilter: "blur(12px)",
  });

  return (
    <Container
      fluid
      style={{
        minHeight: '100vh',
        width: "100%",
        padding: 20,
        background: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="matrix-bg"></div>

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
          zIndex: 2
        }}
      >
        <button onClick={() => handleClick('about')} style={getButtonStyle('about')}>
          <a href="/About" style={{ color: "inherit", textDecoration: "none" }}>
            About
          </a>
        </button>

        <button onClick={() => handleClick('poetry')} style={getButtonStyle('poetry')}>
          <a href="/Motavison" style={{ color: "inherit", textDecoration: "none" }}>
            Poetry
          </a>
        </button>

        {/* Whatsapp Button (Green Icon) */}
        <a href="https://wa.me/8290400325" target="_blank" rel="noopener noreferrer">
          <button onClick={() => handleClick('whatsapp')} style={getButtonStyle('whatsapp')}>
            <IconBrandWhatsapp size={22} color="#25D366" />
          </button>
        </a>

        {/* Call Button (Blue-Green Icon) */}
        <a href="tel:+918290400325">
          <button onClick={() => handleClick('call')} style={getButtonStyle('call')}>
            <IconPhoneCall size={22} color="#00BFFF" />
          </button>
        </a>
      </div>

      {/* Profile Image */}
      <div className="profile-wrapper">
        <Image
          src={img1}
          alt="Profile"
          style={{
            width: isMobile ? '150px' : '220px',
            height: isMobile ? '150px' : '220px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: "4px solid #0ff",
            boxShadow: "0 0 40px #0ff, 0 0 90px #00f",
            zIndex: 2,
          }}
          className="profile-img"
        />
      </div>

      <Text
        fw={900}
        style={{
          marginTop: "25px",
          fontSize: isMobile ? "28px" : "46px",
          background: "linear-gradient(90deg, #00ffcc, #00ffff, #33ff00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          zIndex: 2,
          animation: "glowText 2.5s infinite alternate",
        }}
      >
        Rahul Swami
      </Text>

      <Text
        size={isMobile ? "sm" : "md"}
        className="typing-text"
        style={{
          marginTop: "12px",
          color: "#0f0",
          fontStyle: "italic",
          letterSpacing: "2px",
          zIndex: 2,
        }}
      >
        It Takes Time To Become Successful, And Time Is Money, And Time Is Power
      </Text>

      {/* Animations */}
      <style>
        {`
          @keyframes glowText {
            to { text-shadow: 0 0 25px #0ff, 0 0 60px #0f0; }
          }

          .typing-text {
            width: 0;
            overflow: hidden;
            border-right: 2px solid #0ff;
            white-space: nowrap;
            animation: typing 5s steps(30, end) infinite alternate,
                       blink 0.7s infinite;
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
          @keyframes blink {
            50% { border-color: transparent }
          }

          .profile-wrapper {
            position: relative;
            display: inline-block;
            z-index: 2;
          }
          .profile-wrapper::before {
            content: "";
            position: absolute;
            top: -15px;
            left: -15px;
            width: calc(100% + 30px);
            height: calc(100% + 30px);
            border-radius: 50%;
            animation: rotateRing 6s linear infinite;
            filter: blur(12px);
            z-index: 0;
          }
          @keyframes rotateRing {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .matrix-bg {
            position: absolute;
            inset: 0;
            background: black;
            overflow: hidden;
            z-index: 0;
          }
          .matrix-bg::before {
            content: "01 010 101 0110 110 1001 01 110 001 0101 101 0100 11 0010";
            position: absolute;
            top: -100%;
            left: 0;
            width: 100%;
            height: 200%;
            font-size: 18px;
            line-height: 22px;
            color: #0f0;
            white-space: pre;
            animation: matrixScroll 10s linear infinite;
            opacity: 0.5;
          }
          @keyframes matrixScroll {
            from { top: -100%; }
            to { top: 0%; }
          }
        `}
      </style>
    </Container>
  );
}
