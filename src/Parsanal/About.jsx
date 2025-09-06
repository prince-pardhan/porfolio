import React from "react";
import {
  Container,
  Title,
  Text,
  Image,
  Stack,
  Card,
  Group,
  Divider,
  Button,
  Badge,
} from "@mantine/core";
import { motion } from "framer-motion";
import { IconBrandWhatsapp, IconPhoneCall } from "@tabler/icons-react";
import img2 from "./images/2873617d72b26362d1e6a626efceeac8.jpg";
import img3 from "./images/background-ai_094202459.png";
import img4 from "./images/self-pic.jpeg";

export default function About() {
  return (
    <div id="about">
      <Container
        size="lg"
        p="xl"
        style={{
          minHeight: "100vh",
          color: "#fff",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Stack spacing="xl" style={{ width: "100%" }}>
          {/* Name Section */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            style={{ textAlign: "center" }}
          >
            <Title
              order={1}
              style={{
                color: "#2a5298",
                fontSize: "3.8rem",
                fontWeight: 900,
                letterSpacing: "4px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Rk Swami
            </Title>

            <Divider
              my="sm"
              style={{
                borderColor: "#2a5298",
                width: "150px",
                margin: "14px auto",
                borderWidth: "3px",
              }}
            />

            <Text
              size="lg"
              style={{
                color: "#666",
                fontSize: "1.3rem",
                letterSpacing: "1px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Creative Editor ↠ Gamer ↠ Development
            </Text>
          </motion.div>

          {/* Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card
              shadow="md"
              padding="lg"
              radius="xl"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <Text
                size="md"
                style={{
                  lineHeight: 1.9,
                  fontSize: "1.2rem",
                  color: "#eee",
                  textAlign: "center",
                }}
              >
                 <strong>Hi</strong>, I’m{" "}
                <span style={{ color: "#2a5298", fontWeight: "bold" }}>
                  Rk Swami
                </span>{" "}
                –{" "}
                <span style={{ color: "#2a5298" }}>Video & Photo Editor</span>,{" "}
                <span style={{ color: "#2a5298" }}>Poster Designer...</span>
              </Text>
            </Card>
          </motion.div>

          {/* Skills Card (Updated Design) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card
              shadow="md"
              padding="lg"
              radius="xl"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
                textAlign: "center",
              }}
            >
              <Title
                order={3}
                style={{
                  color: "#2a5298",
                  marginBottom: "20px",
                  fontWeight: 700,
                }}
              >
                My Skills
              </Title>

              <Group position="center" spacing="md" style={{ flexWrap: "wrap" }}>
                {[
                  "Editor",
                  "Gamer",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "ReactJS",
                  "Writer",
                  "Photo Editor",
                  "Video Editor",
                  "Poster Designer",
                  "Frontend Dev",
                  "Basic Computer",
                ].map((skill, i) => (
                  <Badge
                    key={i}
                    size="lg"
                    variant="light"
                    style={{
                      background: "#fff",
                      color: "#2a5298",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      padding: "10px 18px",
                      borderRadius: "20px",
                      boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.08)";
                      e.currentTarget.style.background = "#2a5298";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.boxShadow =
                        "0 5px 15px rgba(42,82,152,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.background = "#fff";
                      e.currentTarget.style.color = "#2a5298";
                      e.currentTarget.style.boxShadow =
                        "0 3px 8px rgba(0,0,0,0.1)";
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </Group>
            </Card>
          </motion.div>

          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card
              shadow="md"
              padding="lg"
              radius="xl"
              style={{
                background: "rgba(0,0,0,0.75)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(15px)",
                textAlign: "center",
              }}
            >
              <Title
                order={3}
                style={{
                  color: "#2a5298",
                  fontWeight: 700,
                }}
              >
                My Details
              </Title>
              <Text
                size="sm"
                style={{
                  marginTop: "10px",
                  lineHeight: 1.9,
                  fontSize: "1.1rem",
                  color: "#ddd",
                }}
              >
                <strong>Rk Swami</strong> – Photo Editor, Video Editor &
                Poster Designer based in Sirsa...
              </Text>
              <Text
                mt="md"
                style={{
                  color: "#2a5298",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              >
                Thanks
              </Text>
              <Group position="center" mt="lg" spacing="lg">
                <Button
                  component="a"
                  href="https://wa.me/918290400325"
                  target="_blank"
                  radius="xl"
                  size="lg"
                  leftIcon={
                    <IconBrandWhatsapp size={28} color="#25D366" stroke={2} />
                  }
                  styles={{
                    root: {
                      backgroundColor: "#fff",
                      border: "2px solid #25D366",
                      color: "#25D366",
                      fontWeight: "bold",
                      padding: "14px 30px",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  WhatsApp
                </Button>

                <Button
                  component="a"
                  href="tel:+918290400325"
                  radius="xl"
                  size="lg"
                  leftIcon={
                    <IconPhoneCall size={26} color="#1DA1F2" stroke={2} />
                  }
                  styles={{
                    root: {
                      backgroundColor: "#fff",
                      border: "2px solid #1DA1F2",
                      color: "#1DA1F2",
                      fontWeight: "bold",
                      padding: "14px 30px",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  Call Now
                </Button>
              </Group>
            </Card>
          </motion.div>
        </Stack>

        {/* Extra Profile Card */}
        <Card
          shadow="md"
          padding="lg"
          radius="xl"
          style={{
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(15px)",
            textAlign: "center",
            display: "flex",
            margin: "15px",
          }}
        >
          <br />
         <Image
  src={img4}
  alt="Profile"
  radius="xl"
  style={{
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    margin: "auto",
  }}
/>

<Text
  align="center"
  size="xl"
  weight={700}
  style={{ color: "blue", marginTop: "15px" }}
>
  Hii 
</Text>

<Text
  align="center"
  size="lg"
  weight={600}
  style={{ marginTop: "10px", color: "#ffffffff", lineHeight: 1.6 }}
>
  I am Rk Swami,  
  Editor Skill in Cult Music Production, Multi Genre Producer, Nohar,  
  working since 2 years.  
  Software Development in (Ks Junction Sirsa) as Frontend Developer.
</Text>

<Text
  align="center"
  size="lg"
  weight={700}
  style={{ color: "blue", marginTop: "20px" }}
>
  Thanks 
</Text>

          
        </Card>
      </Container>
    </div>
  );
}
