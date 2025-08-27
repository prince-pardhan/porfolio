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

export default function About() {
  return (
    <div id="about">
      <Container
        size="lg"
        p="xl"
        style={{
          minHeight: "100vh",
          color: "#fff",
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.95), rgba(0,20,0,0.95)), url(${img3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // boxShadow: "inset 0 0 80px rgba(48,255,6,0.2)",
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
                color: "#30ff06",
                textShadow: "0px 0px 35px rgba(48,255,6,1)",
                fontSize: "3.8rem",
                fontWeight: 900,
                letterSpacing: "4px",
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              Rahul Swami
            </Title>

            <Divider
              my="sm"
              style={{
                borderColor: "#30ff06",
                width: "150px",
                margin: "14px auto",
                borderWidth: "3px",
                boxShadow: "0px 0px 20px rgba(48,255,6,0.9)",
              }}
            />

            <Text
              size="lg"
              style={{
                color: "#aaa",
                fontSize: "1.4rem",
                letterSpacing: "2px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Creative Editor | Gamer | Development
            </Text>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <Image
              src={img2}
              alt="Profile"
              radius="xl"
              style={{
                width: "220px",
                height: "220px",
                border: "4px solid #30ff06",
                borderRadius: "50%",
                boxShadow: "0 0 70px rgba(48,255,6,0.9)",
              }}
            />
          </motion.div>

          {/* Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card
              shadow="xl"
              padding="lg"
              radius="xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(48,255,6,0.15), rgba(0,0,0,0.7))",
                border: "1px solid rgba(48,255,6,0.5)",
                backdropFilter: "blur(15px)",
                boxShadow: "0 0 35px rgba(48,255,6,0.4)",
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
                👋 <strong>Hi</strong>, I’m{" "}
                <span style={{ color: "#30ff06", fontWeight: "bold" }}>
                  Rahul Swami
                </span>{" "}
                –{" "}
                <span style={{ color: "#30ff06" }}>Video & Photo Editor</span>,{" "}
                <span style={{ color: "#30ff06" }}>Poster Designer</span>
              </Text>
            </Card>
          </motion.div>

          {/* Skills Card (Edited) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card
              shadow="xl"
              padding="lg"
              radius="xl"
              style={{
                background: "linear-gradient(145deg, rgba(0,0,0,0.9), rgba(15,30,15,0.95))",
                border: "2px solid #30ff06",
                boxShadow: "0 0 40px rgba(48,255,6,0.6)",
                textAlign: "center",
              }}
            >
              <Title
                order={3}
                style={{
                  color: "#30ff06",
                  marginBottom: "15px",
                  textShadow: "0px 0px 15px rgba(48,255,6,1)",
                }}
              >
                Skills
              </Title>
              <Group position="center" spacing="sm" style={{ flexWrap: "wrap" }}>
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
                ].map((skill, i) => (
                  <Badge
                    key={i}
                    size="lg"
                    variant="outline"
                    style={{
                      borderColor: "#30ff06",
                      color: "#30ff06",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      padding: "10px 16px",
                      borderRadius: "12px",
                      boxShadow: "0 0 15px rgba(48,255,6,0.7)",
                      background: "rgba(0, 0, 0, 0.6)",
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
              shadow="xl"
              padding="lg"
              radius="xl"
              style={{
                background: "rgba(0,0,0,0.85)",
                border: "1px solid rgba(48,255,6,0.7)",
                backdropFilter: "blur(15px)",
                boxShadow: "0 0 30px rgba(48,255,6,0.6)",
                textAlign: "center",
              }}
            >
              <Title
                order={3}
                style={{
                  color: "#30ff06",
                  textShadow: "0px 0px 15px rgba(48,255,6,0.9)",
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
                  color: "#eee",
                }}
              >
                <strong>Rahul</strong> hoon, ek{" "}
                <strong>Photo Editor, Video Editor & Poster Designer</strong> – Sirsa me based.
              </Text>
              <Text
                mt="md"
                style={{
                  color: "#30ff06",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              >
                Thanks
              </Text>
              <Group position="center" mt="lg" spacing="lg">
                {/* WhatsApp Button */}
                <Button
                  component="a"
                  href="https://wa.me/918290400325"
                  target="_blank"
                  radius="xl"
                  size="lg"
                  leftIcon={<IconBrandWhatsapp size={28} color="#25D366" stroke={2} />}
                  styles={{
                    root: {
                      backgroundColor: "#111",
                      border: "2px solid #25D366",
                      color: "#25D366",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      padding: "14px 30px",
                      boxShadow: "0 0 25px rgba(37,211,102,0.7)",
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  WhatsApp
                </Button>

                {/* Call Button */}
                <Button
                  component="a"
                  href="tel:+918290400325"
                  radius="xl"
                  size="lg"
                  leftIcon={<IconPhoneCall size={26} color="#1DA1F2" stroke={2} />}
                  styles={{
                    root: {
                      backgroundColor: "#111",
                      border: "2px solid #1DA1F2",
                      color: "#1DA1F2",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      padding: "14px 30px",
                      boxShadow: "0 0 25px rgba(29,161,242,0.7)",
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
      </Container>
    </div>
  );
}
