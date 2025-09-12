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
          backgroundImage: ` url(${img3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Title Section */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <Title
            order={1}
            style={{
              color: "#fff",
              fontSize: "3.2rem",
              fontWeight: "900",
              letterSpacing: "2px",
              textShadow: "2px 4px 6px rgba(0,0,0,0.3)",
            }}
          >
            Rahul Swami
          </Title>
          <Text
            size="lg"
            fw={500}
            style={{
              color: "#e0e0e0",
              marginTop: "10px",
              fontStyle: "italic",
              fontSize: "1.2rem",
            }}
          >
            Turning vision into strategy
          </Text>
        </div>

        {/* Quotes Section */}
        <Flex direction="column" gap="lg" align="center" style={{ width: "100%" }}>
          {quotes.map((q, i) => (
            <Card
              key={i}
              shadow="lg"
              padding="xl"
              radius="lg"
              style={{
                width: "75%",
                background: "rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 12px 25px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.1)";
              }}
            >
              <Text
                size="lg"
                style={{
                  lineHeight: 1.8,
                  fontWeight: "600",
                  color: "#fff",
                  textAlign: "center",
                  fontSize: "1.2rem",
                  textShadow: "1px 2px 4px rgba(0,0,0,0.3)",
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
