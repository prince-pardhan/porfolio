import React from "react";
import {
  Container,
  Text,
  Group,
  Anchor,
  Divider,
  Stack,
  Box,
} from "@mantine/core";
import {
  IconBrandYoutube,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function HackerFooter() {
  return (
    <Box
      component="footer"
      style={{
        background: "black",
        minHeight: "65vh",
        padding: "50px 20px",
        color: "#00ff00",
        fontFamily: "monospace",
        position: "relative",
        overflow: "hidden",
        borderTop: "2px solid #00ff00",
      }}
    >
      {/* Matrix-style animated background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.95), rgba(0,0,0,0.98)), url('https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif')",
          backgroundSize: "cover",
          opacity: 0.25,
          zIndex: 0,
          filter: "blur(1px)",
        }}
      />

      <Container style={{ position: "relative", zIndex: 2 }}>
        <Stack align="center" spacing="lg">
          {/* Hacker Title */}
          <Text
            size="2.2rem"
            fw={900}
            style={{
              color: "#00ff00",
              textShadow: "0 0 25px #00ff00, 0 0 50px #00ff00",
              letterSpacing: "4px",
              animation: "flicker 2s infinite",
            }}
          >
            [ Rahul Swami]
          </Text>

          <Group spacing="xl">
            {["Home", "About", "Motavison"].map((link, i) => (
              <Anchor
                key={i}
                href={"/" + link.toLowerCase()}
                style={{
                  color: "#00ff00",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "0.3s",
                  fontSize: "1rem",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textShadow =
                    "0 0 20px #00ff00, 0 0 40px #00ff00")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textShadow = "none")
                }
              >
                {"> " + link}
              </Anchor>
            ))}
          </Group>

          <Divider my="md" color="green" style={{ width: "70%" }} />

          {/* Contact Info */}
          <Stack spacing="xs" align="center">
            <Text> Contact +91-8290-400-325</Text>
          </Stack>

          {/* Social Links with Icons */}
          <Group spacing="lg" mt="md">
            <Anchor
              href="https://youtube.com/@princpardhan7782"
              target="_blank"
              style={{ color: "#ff3333" }}
            >
              <IconBrandYoutube size={28} style={{ filter: "drop-shadow(0 0 10px #ff3333)" }} />
            </Anchor>

            <Anchor
              href="https://www.facebook.com/share/p/19WEkPssmd/"
              target="_blank"
              style={{ color: "#00aaff" }}
            >
              <IconBrandFacebook size={28} style={{ filter: "drop-shadow(0 0 10px #00aaff)" }} />
            </Anchor>

            <Anchor
              href="https://www.instagram.com/princ_pardhan_325"
              target="_blank"
              style={{ color: "#ff00ff" }}
            >
              <IconBrandInstagram size={28} style={{ filter: "drop-shadow(0 0 10px #ff00ff)" }} />
            </Anchor>
          </Group>

          {/* Footer Note */}
          <Text
            size="sm"
            style={{
              opacity: 0.9,
              marginTop: "25px",
              textShadow: "0 0 12px #00ff00, 0 0 30px #00ff00",
              fontSize: "0.9rem",
            }}
          >
            © 2025 [RahulSwami]
          </Text>
        </Stack>
      </Container>

      {/* Glitch + Flicker Animations */}
      <style>
        {`
          @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
              opacity: 1;
            }
            20%, 24%, 55% {
              opacity: 0.3;
            }
          }
        `}
      </style>
    </Box>
  );
}
