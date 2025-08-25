import React from 'react';
import {
  Container,
  Text,
  Image,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconPhoneCall, IconBrandWhatsapp, IconBook, IconUser } from "@tabler/icons-react";
import img1 from "./images/2873617d72b26362d1e6a626efceeac8.jpg";
import "../App.css";

export default function ProfilePage() {
  const isMobile = useMediaQuery("(max-width: 780px)");

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
      {/* Matrix BG */}
      <div className="matrix-bg"></div>

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

      {/* Name */}
      <Text
        fw={900}
        style={{
          marginTop: "25px",
          fontSize: isMobile ? "28px" : "46px",
          background: "linear-gradient(90deg, #00ffcc, #00ffff, #33ff00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          zIndex: 2,
          textShadow: "0 0 20px #0ff, 0 0 50px #0f0",
        }}
      >
        Rahul Swami
      </Text>

      {/* Subtitle */}
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

      {/* Icon Buttons */}
      <div style={{ marginTop: "40px", display: "flex", gap: "25px" }}>
        {/* WhatsApp */}
        <a href="https://wa.me/8290400325" target="_blank" rel="noopener noreferrer" className="icon-btn whatsapp-btn">
          <IconBrandWhatsapp size={32}/>
        </a>

        {/* Call */}
        <a href="tel:+918290400325" className="icon-btn call-btn">
          <IconPhoneCall size={32}/>
        </a>
      </div>

      {/* Extra CSS */}
      <style>
        {`
          .icon-btn {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            color: white;
            transition: 0.3s ease;
            box-shadow: 0 0 20px rgba(0,255,200,0.6);
          }

          .whatsapp-btn {
            background: radial-gradient(circle, #25D366, #128C7E);
            border: 2px solid #25D366;
          }
          .call-btn {
            background: radial-gradient(circle, #00c6ff, #0072ff);
            border: 2px solid #00c6ff;
          }

          .icon-btn:hover {
            transform: scale(1.2);
            box-shadow: 0 0 40px #0ff, 0 0 70px #00f;
          }

          /* Typing animation */
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
        `}
      </style>
    </Container>
  );
}
