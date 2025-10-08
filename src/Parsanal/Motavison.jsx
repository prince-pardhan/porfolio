import { Container, Text, Card, Title, Flex } from "@mantine/core";
import img3 from "./images/design.png";

export default function Poirty() {
  const quotes = [
    `"It takes time to become successful — and time is money, and time is power."`,
    `"Chanakya said that the one who controls Sama, Dana, Danda, and Bhed is called a king — what we now call a strategist."`,
  ];

  return (
   
      <Container
        fluid
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.95)), url(${img3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "'Courier New', monospace",
          position: "relative",
          overflow: "hidden",
          color: "#0f0",
        }}
      >
        {/* Matrix Overlay */}
        <div className="matrix-overlay"></div>

        <style>{`
          .matrix-overlay {
            position: absolute;
            inset: 0;
            background: repeating-linear-gradient(
              0deg,
              rgba(0,255,0,0.08) 0px,
              rgba(0,255,0,0.08) 1px,
              transparent 2px,
              transparent 3px
            );
            animation: scroll 3s linear infinite;
            z-index: 0;
          }
          @keyframes scroll {
            0% { background-position-y: 0; }
            100% { background-position-y: 120px; }
          }
          .glow-border {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
          }
          .glow-border::before {
            content: "";
            position: absolute;
            inset: -2px;
            background: linear-gradient(90deg, rgba(0, 13, 255, 1), #0f0, rgba(0, 13, 255, 1));
            background-size: 800% 800%;
            animation: glow 9s linear infinite;
            z-index: -1;
            filter: blur(6px);
          }
          @keyframes glow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>

        {/* Title Section */}
        <div style={{ textAlign: "center", marginBottom: "60px", position: "relative", zIndex: 1 }}>
          <Title
            order={1}
            style={{
              color: "#0ff",
              fontSize: "3.5rem",
              fontWeight: "900",
              letterSpacing: "3px",
              textShadow: "0 0 15px #0ff, 0 0 40px #0ff, 0 0 70px #0ff",
              animation: "pulse 2.5s infinite",
            }}
          >
            Rk Swami
          </Title>
          <style>{`
            @keyframes pulse {
              0% { text-shadow: 0 0 15px #0ff, 0 0 40px #0ff; }
              50% { text-shadow: 0 0 30px #0ff, 0 0 70px #0ff; }
              100% { text-shadow: 0 0 15px #0ff, 0 0 40px #0ff; }
            }
          `}</style>
          <Text
            size="lg"
            fw={500}
            style={{
              color: "#0f0",
              marginTop: "15px",
              fontStyle: "italic",
              fontSize: "1.3rem",
              textShadow: "0 0 6px #0f0",
            }}
          >
            
          </Text>
        </div>

        {/* Quotes Section */}
        <Flex direction="column" gap="xl" align="center" style={{ width: "100%", position: "relative", zIndex: 1 }}>
          {quotes.map((q, i) => (
            <Card
              key={i}
              padding="xl"
              radius="lg"
              className="glow-border"
              style={{
                width: "75%",
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(0, 255, 255, 1)",
                boxShadow: "0 0 20px rgba(0,255,255,0.4)",
                transition: "all 0.4s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(255, 0, 0, 1), 0 0 80px #0f0 ,#4f46e5";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 0, 0, 0.4)";
              }}
            >
              <Text
                size="lg"
                style={{
                  lineHeight: 1.8,
                  fontWeight: "600",
                  // color: "#0f0",
                  textAlign: "center",
                  fontSize: "1.25rem",
                  textShadow: "0 0 6px #0f0, 0 0 12px #0f0",
                }}
              >
                {q}
              </Text>
            </Card>
          ))}
        </Flex>
      </Container>
    
  );
}
