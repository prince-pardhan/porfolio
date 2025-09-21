// ProfilePageNormal.jsx
import React from "react";
import { Container, Text, Image, Card, Group, Button, Stack, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import { IconPhoneCall, IconBrandWhatsapp } from "@tabler/icons-react";
import img1 from "./images/image.png";
import About from "./About";
import Poirty from "./Motavison";
import LoginPage from "./Login";

export default function ProfilePageNormal() {
  const isMobile = useMediaQuery("(max-width: 780px)");

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
        color: "#222",
      }}
    >
      <Container
        size="lg"
        style={{
          padding: isMobile ? "20px" : "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ width: "100%", maxWidth: 960 }}
        >
          <Card
            shadow="lg"
            radius="xl"
            padding="xl"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
              border: "2px solid #e0e7ff",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
            }}
          >
            <Stack spacing="lg" align="center">
              <Image
                src={img1}
                alt="Profile"
                style={{
                  width: isMobile ? 120 : 160,
                  height: isMobile ? 120 : 160,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "5px solid transparent",
                  backgroundImage:
                    "linear-gradient(white, white), linear-gradient(45deg, #06b6d4, #3b82f6, #9333ea, #f59e0b)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                }}
              />
              <div style={{ textAlign: "center" }}>
                <Title
                  order={2}
                  style={{
                    fontWeight: 800,
                    marginBottom: 4,
                    background: "linear-gradient(90deg, #06b6d4, #3b82f6, #9333ea, #f59e0b)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Rk Swami
                </Title>
                <Text color="dimmed" size="sm">
                   Editor •  Poster Designer •  Frontend Developer
                </Text>
              </div>
            {/* <Group spacing="sm">
  WhatsApp Button
  <Button
    radius="xl"
    size="md"
    leftSection={<IconBrandWhatsapp size={18} />}
    component="a"
    href="https://8290400325"
    target="_blank"
    style={{
      background: "linear-gradient(45deg, #22c55e, #16a34a)",
      color: "white",
      fontWeight: 900,
      boxShadow: "0 4px 12px rgba(34,197,94,0.4)",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.background =
        "linear-gradient(45deg, #16a34a, #22c55e)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.background =
        "linear-gradient(45deg, #22c55e, #16a34a)")
    }
  >
    WhatsApp
  </Button>

  Call Button
  <Button
    radius="xl"
    size="md"
    component="a"
    href="tel:+918290400325"
    leftSection={<IconPhoneCall size={18} />}
    style={{
      background: "linear-gradient(45deg, #6366f1, #06b6d4)",
      color: "white",
      fontWeight: 600,
      boxShadow: "0 4px 12px rgba(99,102,241,0.4)",
      transition: "all 0.2s ease",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.background =
        "linear-gradient(45deg, #06b6d4, #6366f1)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.background =
        "linear-gradient(45deg, #6366f1, #06b6d4)")
    }
  >
    Call
  </Button>
</Group> */}

            </Stack>

            {/* About Section */}
            <div style={{ marginTop: 30, textAlign: "center" }}>
              <Title
                order={3}
                style={{
                  background: "linear-gradient(90deg, #f59e0b, #ef4444, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 700,
                }}
              >
               
              </Title>
              <Text size="sm" mt="sm" color="dimmed" style={{ fontStyle: "italic" }}>
                "It takes time to become successful — and time is money."
              </Text>
            </div>
          </Card>
        </motion.div>
      </Container>

      {/* Other Sections */}
      <div style={{ padding: "40px 20px 80px" }}>
        <About />
        <Poirty />
        <LoginPage />
      </div>
    </div>
  );
}
