// ProfilePageNormal.jsx
import React from "react";
import {
  Container,
  Text,
  Image,
  Card,
  Group,
  Button,
  Stack,
  Title,
  Divider,
  Box,
  Grid,
  Badge,
  Avatar,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import { IconPhoneCall, IconBrandWhatsapp, IconMail, IconMapPin, IconStar } from "@tabler/icons-react";
import img1 from "./images/image.png";
import About from "./About";
import Poirty from "./Motavison";
import LoginPage from "./Login";

export default function ProfilePageNormal() {
  const isMobile = useMediaQuery("(max-width: 780px)");

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        color: "#2d3748",
      }}
    >
      <Container
        size="lg"
        style={{
          padding: isMobile ? "20px" : "40px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%", maxWidth: 1000 }}
        >
          {/* Main Profile Card */}
          <Card
            shadow="xl"
            radius="xl"
            padding="xl"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Background Pattern */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "120px",
                background: "linear-gradient(90deg, #C, #7c3aed)",
                zIndex: 0,
              }}
            />
            
            <Stack spacing="lg" align="center" style={{ position: "relative", zIndex: 1 }}>
              {/* Profile Image with Badge */}
              <div style={{ position: "relative" }}>
                <Avatar
                  src={img1}
                  alt="Profile"
                  size={isMobile ? 120 : 150}
                  radius="50%"
                  style={{
                    border: "4px solid white",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                  }}
                />
                {/* <Badge
                  color="blue"
                  variant="filled"
                  size="sm"
                  style={{
                    position: "absolute",
                    bottom: 5,
                    right: 5,
                    borderRadius: "20px",
                    padding: "5px 10px",
                  }}
                >
                  <IconStar size={12} style={{ marginRight: 4 }} />
                  Pro
                </Badge> */}
              </div>

              {/* Name + Role */}
              <div style={{ textAlign: "center" }}>
                <Title
                  order={1}
                  style={{
                    fontWeight: 800,
                    marginBottom: 8,
                    background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: isMobile ? "1.8rem" : "2.5rem",
                  }}
                >
                  Rk Swami
                </Title>
                <Text size="lg" color="dimmed" fw={600} mb={8}>
                  Creative Professional
                </Text>
                <Group justify="center" spacing="xs">
                  <Badge color="blue" variant="light" size="md">
                     Video Editor
                  </Badge>
                  <Badge color="grape" variant="light" size="md">
                     Poster Designer
                  </Badge>
                  <Badge color="orange" variant="light" size="md">
                     Frontend Developer
                  </Badge>
                </Group>
              </div>

              {/* Location & Contact Info */}
              <Group spacing="lg" mt="sm">
                <Group spacing={5}>
                  <IconMapPin size={16} color="#6b7280" />
                  <Text size="sm" color="dimmed">
                    Madhosinghana (Sirsa)
                  </Text>
                </Group>
                <Group spacing={5}>
                  <IconMail size={16} color="#6b7280" />
                  <Text size="sm" color="dimmed">
                    srk016361@gmil.com
                  </Text>
                </Group>
              </Group>

              {/* Action Buttons */}
              <Group spacing="md" mt="sm" wrap="wrap" justify="center">
                {/* <Button
                  radius="xl"
                  size="md"
                  leftSection={<IconBrandWhatsapp size={20} />}
                  component="a"
                  href="https://wa.me/918290400325"
                  target="_blank"
                  style={{
                    background: "linear-gradient(45deg, #22c55e, #16a34a)",
                    color: "white",
                    fontWeight: 700,
                    boxShadow: "0 4px 15px rgba(34,197,94,0.4)",
                    padding: "0 25px",
                  }}
                >
                  WhatsApp
                </Button> */}

                {/* <Button
                  radius="xl"
                  size="md"
                  component="a"
                  href="tel:+918290400325"
                  leftSection={<IconPhoneCall size={20} />}
                  variant="outline"
                  style={{
                    borderColor: "#4f46e5",
                    color: "#4f46e5",
                    fontWeight: 600,
                    padding: "0 25px",
                  }}
                >
                  Call Now
                </Button> */}
                
                {/* <Button
                  radius="xl"
                  size="md"
                  variant="light"
                  style={{
                    background: "linear-gradient(45deg, #f59e0b, #d97706)",
                    color: "white",
                    fontWeight: 700,
                    padding: "0 25px",
                  }}
                >
                  Hire Me
                </Button> */}
              </Group>
            </Stack>

            {/* Stats Section */}
            {/* <Divider my="xl" /> */}
            

            {/* Quote Section */}
            <Box ta="center" mt="xl" pt="lg" style={{ borderTop: "1px solid #e2e8f0" }}>
              <Text
                size="md"
                color="dimmed"
                fs="italic"
                style={{ 
                  maxWidth: 600, 
                  margin: "0 auto",
                  lineHeight: 1.6
                }}
              >
                "It takes time to become successful — and time is money. Quality work requires dedication, creativity, and attention to detail."
              </Text>
            </Box>
          </Card>
        </motion.div>
      </Container>

      {/* Other Sections with improved spacing */}
      <div style={{ 
        padding: isMobile ? "30px 15px 60px" : "50px 20px 80px",
        background: "rgba(255, 255, 255, 0.97)"
      }}>
        <Container size="lg">
          <About />
          <Box my={50}>
            <Poirty />
          </Box>
          <Box my={50}>
            <LoginPage />
          </Box>
        </Container>
      </div>
    </div>
  );
}