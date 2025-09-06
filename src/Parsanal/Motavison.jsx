import {
  Container,
  Text,
  Card,
  Title,
  Flex,
} from "@mantine/core";
import img3 from "./images/background-ai_094202459.png";

export default function Poirty() {
  const quotes = [
    `"It takes time to become successful — and time is money, and time is power."`,
    `"Chanakya said that the one who controls Sama, Dana, Danda, and Bhed is called a king — what we now call a strategist."`,
  ];

  return (
    <div id="motavison">
      <Container
        fluid
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.9), rgba(245,245,245,0.95)), url(${img3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 0",
        }}
      >
        {/* Title Section */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <Title
            order={2}
            style={{
              color: "#2a5298",
              fontSize: "2.8rem",
              fontWeight: "800",
              letterSpacing: "1px",
            }}
          >
            Rahul Swami
          </Title>
          <Text
            size="lg"
            fw={500}
            style={{
              color: "#555",
              marginTop: "8px",
              fontStyle: "italic",
            }}
          >
            
          </Text>
        </div>

        {/* Quotes Section */}
        <Flex direction="column" gap="lg" align="center">
          {quotes.map((q, i) => (
            <Card
              key={i}
              shadow="sm"
              padding="xl"
              radius="md"
              withBorder
              style={{
                width: "70%",
                background: "#fff",
                border: "1px solid #e0e0e0",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-5px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 2px 10px rgba(0,0,0,0.05)";
              }}
            >
              <Text
                size="lg"
                style={{
                  lineHeight: 1.8,
                  fontWeight: "500",
                  color: "#333",
                  textAlign: "center",
                }}
              >
                {q}
              </Text>
            </Card>
          ))}
        </Flex>
      </Container>
    </div>
  );
}
