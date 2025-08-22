import React from "react";
import {
  Stack,
  Group,
  Text,
  Anchor,
  Divider,
  Container,
  Rating,
  Avatar,
  Indicator,
  Card,
} from "@mantine/core";

import img3 from "./images/circuit-data-neural-network-ai-technology-cloud-computing-bits-internet-5g-blue-background-information-ai-talking-circuit-women-free-video.jpg";

export default function Footer() {
  return (
    <Container
      component="footer"
      fluid
      py="xl"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${img3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "60vh",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Stack align="center" spacing="md">
        {/* Avatar with indicator */}
        <Indicator position="bottom-end" size={12} color="green" offset={4}>
          <Avatar
            size="xl"
            radius="50%"
            src="https://cdn1.vectorstock.com/i/1000x1000/99/25/modern-ai-logo-design-for-business-and-company-vector-37619925.jpg"
            style={{
              border: "3px solid white",
              boxShadow: "0 0 20px rgba(255,255,255,0.5)",
            }}
          />
        </Indicator>

        {/* Heading */}
        <Text
          fw={900}
          size="2rem"
          style={{
            color: "white",
            textShadow: "0 0 15px rgba(255,255,255,0.8)",
            letterSpacing: "3px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
           My Business Links 
        </Text>

        {/* Rating Stars */}
        <Rating defaultValue={5} size="lg" color="yellow" />

        {/* Social Links */}
        <Group spacing="xl" mt="md">
          {[
            {
              name: "YouTube",
              link: "https://youtube.com/@princpardhan7782?si=L09C7Xo4r6uUwGVN",
              color: "red",
            },
            {
              name: "Facebook",
              link: "https://www.facebook.com/share/p/19WEkPssmd/",
              color: "#1877F2",
            },
            {
              name: "Blogger",
              link: "https://www.blogger.com/blog/posts/571040556621222478",
              color: "#FF8800",
            },
            {
              name: "Instagram",
              link: "https://www.instagram.com/princ_pardhan_325?igsh=MXFxaTBjMHdpZW5ueg==",
              color: "#E1306C",
            },
          ].map((social, i) => (
            <Anchor
              key={i}
              href={social.link}
              target="_blank"
              style={{
                color: social.color,
                fontWeight: 700,
                fontSize: "18px",
                textDecoration: "none",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.textShadow = "0 0 15px white")
              }
              onMouseLeave={(e) => (e.currentTarget.style.textShadow = "none")}
            >
              {social.name}
            </Anchor>
          ))}
        </Group>

        {/* Divider */}
        <Divider w="100%" my="lg" color="white" fw={900}/>

        {/* Dropdown Card */}
        {/* <Card
          withBorder
          shadow="xl"
          radius="lg"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.3)",
            boxShadow: "0 0 20px rgba(255,255,255,0.3)",
          }}
        > */}
          {/* <select
            style={{
              padding: "10px 16px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.2)",
              color: "white",
              border: "none",
              fontWeight: 600,
              fontSize: "16px",
              cursor: "pointer",
              outline: "none",
              textShadow: "0 0 10px rgba(255,255,255,0.8)",
            }}
          >
            <option style={{ color: "black" }}>Personal</option>
            <option style={{ color: "black" }}>
              Contact us to build a website
            </option>
            <option style={{ color: "black" }}>Madhosinghana</option>
            <option style={{ color: "black" }}>Sirsa</option>
            <option style={{ color: "black" }}>8290400325</option>
          </select> */}
        {/* </Card> */}

        {/* Bottom Copyright */}
        <Text
          size="sm"
          fw={700}
          style={{
            marginTop: "30px",
            opacity: 0.9,
            textShadow: "0 0 10px rgba(255,255,255,0.6)",
          }}
        >
          © 2025 RahulSwami.com |  💙
        </Text>
      </Stack>
    </Container>
  );
}
