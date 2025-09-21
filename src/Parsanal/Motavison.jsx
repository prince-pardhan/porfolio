import { Container, Text, Card, Title, Flex } from "@mantine/core";
import img3 from "./images/design.png";

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
          backgroundImage: `url(${img3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "'Courier New', monospace",
          position: "relative",
          color: "#0f0",
        }}
      >
        {/* Neon Matrix Overlay */}
        <div className="matrix-overlay"></div>

        <style>{`
          .matrix-overlay {
            position: absolute;
            inset: 0;
            background-image: repeating-linear-gradient(
              0deg,
              rgba(0,255,0,0.05) 0px,
              rgba(0,255,0,0.05) 1px,
              transparent 1px,
              transparent 2px
            );
            z-index: 0;
            animation: scroll 2s linear infinite;
          }
          @keyframes scroll {
            0% { background-position-y: 0; }
            100% { background-position-y: 100px; }
          }
        `}</style>

        {/* Title Section */}
        <div style={{ textAlign: "center", marginBottom: "50px", position: "relative", zIndex: 1 }}>
          <Title
            order={1}
            style={{
              color: "#0ff",
              fontSize: "3rem",
              fontWeight: "900",
              letterSpacing: "2px",
              textShadow: "0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff",
            }}
          >
            Rk Swami
          </Title>
          <Text
            size="lg"
            fw={500}
            style={{
              color: "#0f0",
              marginTop: "10px",
              fontStyle: "italic",
              fontSize: "1.2rem",
              textShadow: "0 0 4px #0f0",
            }}
          >
           
          </Text>
        </div>

        {/* Quotes Section */}
        <Flex direction="column" gap="lg" align="center" style={{ width: "100%", position: "relative", zIndex: 1 }}>
          {quotes.map((q, i) => (
            <Card
              key={i}
              shadow="xl"
              padding="xl"
              radius="lg"
              style={{
                width: "70%",
                background: "rgba(0,0,0,0.7)",
                border: "1px solid #0ff",
                backdropFilter: "blur(8px)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                boxShadow: "0 0 12px #0ff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 0 25px #0ff, 0 0 50px #0ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 0 12px #0ff";
              }}
            >
              <Text
                size="lg"
                style={{
                  lineHeight: 1.8,
                  fontWeight: "600",
                  color: "#0f0",
                  textAlign: "center",
                  fontSize: "1.2rem",
                  textShadow: "0 0 6px #0f0, 0 0 12px #0f0",
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
