import {
  Container,
  Text,
  Card,
  Title,
  Flex,
  Badge,
} from "@mantine/core";
import img3 from "./images/background-ai_094202459.png";
import { a } from "framer-motion/client";

export default function Poirty() {
 
  const quotes = [
   
     `"It takes time to become successful-and time is money, and time is power" 
     Chanakya said that the one who controls Sama, Dana, Danda, and Bhed is called "
     a king — what we now call a hacker. And I control all three of them"`,
     
  ];

  return (
    
    <div id="motavison">
      <Container
        fluid
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundImage: `linear-gradient(135deg, rgba(10,10,30,0.95), rgba(40,0,60,0.9)), url(${img3})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          padding: "50px 0",
        }}
      >
        {/* Title Section */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <Title
            order={0}
            style={{
              background: "linear-gradient",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "3.5rem",
              fontWeight: "900",
              letterSpacing: "3px",
              textShadow: "0 0 30px rgba(0, 255, 255, 0.8)",
            }}
          >
            rahul Swami
          </Title>
          <Text
            c="gray.2"
            size="md"
            fw={900}
            fs="3.5rem"
            style={{
              fontStyle: "italic",
              textShadow: "0 0 300px rgba(0, 255, 255, 0.8)",
            }}
          >
            Rahul Swami
          </Text>
        </div>
        
        {/* Quotes Cards */}
        <Flex direction="column" gap="lg" align="center">
          {quotes.map((q, i) => (
            <Card
              key={i}
              shadow="xl"
              padding="xl"
              radius="lg"
              style={{
                width: "75%",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(0,0,0,0.4))",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(18px)",
                color: "white",
                transition: "all 0.4s ease",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 0 9000px rgba(0,255,255,0.8)";
                e.currentTarget.style.border =
                  "0px solid rgba(0,255,255,0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0,0,0,0.6)";
                e.currentTarget.style.border =
                  "0px solid rgba(255,255,255,0.2)";
              }}
            >

              {/* <Badge
                variant="gradient"
                gradient={{ from: "cyan", to: "blue" }}
                size="sm"
                style={{
                  marginBottom: "12px",
                  boxShadow: "0 0 95px rgba(0,255,255,0.8)",
                }}
              >
                ❤️💞 Porty={i + 1}
              </Badge> */}

              <Text size="xxl" style={{ lineHeight: 1.8, fontWeight: "900" }}>
                {q}
              </Text>
            </Card>
          ))}
        </Flex>
      </Container>
    </div>
  );
}
