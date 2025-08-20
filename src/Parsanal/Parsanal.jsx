import React from 'react';

import {
    Container,
    Text,
    Image,
    Box,
} from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import img1 from "./images/technology-background-with-a-ai-concept-vector.jpg";
import img3 from "./images/background-ai_094202459.png";
import "../App.css";

export default function ProfilePage() {
    const isMobile = useMediaQuery("(max-width: 780px)");
    const [opened, { toggle }] = useDisclosure(false);

    const [activeBtn, setActiveBtn] = React.useState(null);

    const handleClick = (btn) => {
        setActiveBtn(btn);
    };

    // Style with glow on click + hover
    const getButtonStyle = (btn) => ({
        background: activeBtn === btn
            ? "linear-gradient(135deg, #ff6ec4, #7873f5, #4ADEDE)"
            : "black",
        color: "white",
        border: "none",
        padding: "10px 16px",
        borderRadius: "8px",
        cursor: "pointer",
        margin: "0 5px",
        boxShadow: activeBtn === btn
            ? "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,0,150,0.6)"
            : "none",
        transition: "all 0.3s ease",
    });

    return (
        <Container
            fluid
            style={{
                minHeight: '100vh',
                width: "100%",
                padding: 10,
                backgroundImage: `url(${img3})`,
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundSize: "cover"
            }}
        >
            <div className='hii'>
                <div className='ramki'>
                    <button
                        onClick={() => handleClick('about')}
                        style={getButtonStyle('about')}
                        onMouseEnter={() => setActiveBtn('about')}
                        onMouseLeave={() => setActiveBtn(null)}
                    >
                        <a href="/About" style={{ color: "inherit", textDecoration: "none" }}>About</a>
                    </button>

                    <button
                        onClick={() => handleClick('poetry')}
                        style={getButtonStyle('poetry')}
                        onMouseEnter={() => setActiveBtn('poetry')}
                        onMouseLeave={() => setActiveBtn(null)}
                    >
                        <a href="/Motavison" style={{ color: "inherit", textDecoration: "none" }}>Poetry</a>
                    </button>

                    <button
                        onClick={() => handleClick('whatsapp')}
                        style={getButtonStyle('whatsapp')}
                        onMouseEnter={() => setActiveBtn('whatsapp')}
                        onMouseLeave={() => setActiveBtn(null)}
                    >
                        <a href="https://wa.me/8290400325" style={{ color: "inherit", textDecoration: "none" }}>Whatsapp</a>
                    </button>

                    <button
                        onClick={() => handleClick('call')}
                        style={getButtonStyle('call')}
                        onMouseEnter={() => setActiveBtn('call')}
                        onMouseLeave={() => setActiveBtn(null)}
                    >
                        <a href="tel:+918290400325" style={{ color: "inherit", textDecoration: "none" }}>Call</a>
                    </button>
                </div>
            </div>

            <Box maw={900} mx="auto"></Box>

            <Image
                src={img1}
                alt="Profile Image"
                style={{
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                }}
                mb="sm"
            />

            <Text
                size="xl"
                fw={900}
                variant="gradient"
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                gradient={{ from: 'rgba(255, 255, 255, 1)', to: 'rgba(255, 255, 255, 0.16)', deg: 180 }}
            >
                <h1>Rahul Swami.online</h1>
            </Text>
        </Container>
    );
}
