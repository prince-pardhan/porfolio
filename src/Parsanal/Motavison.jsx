import {
  Container,
  Text,
  Card,
  Title,
  Flex,
  Badge,
} from "@mantine/core";
import img3 from "./images/background-ai_094202459.png";

export default function ProfilePage() {
  const quotes = [
    `Write my story after my death. How my youth was wasted. 
     Write that even at the time of my death I was praying for you. 
     My hands were out. Write this sign from my shroud.`,

    `To achieve your dreams, work hard and try till your last breath..!  
     Promise that we will win. Always try harder. Even if fate is angry, 
     don't lose courage. Make this resolve so strong…`,

    `Relationships often end due to misunderstandings.  
     Mistakes are not always to blame.  
     I have seen those who are against me…!!!  
     They used to talk about supporting me forever… 🖤 💔`,

    `Can't see two hearts meeting.  
     People even drive away two sitting birds 💔💔`,

    `Listen, you make me cry every day.  
     Don't you feel pain from someone else's pain? 🤔  
     Those who dwell in the heart 🥀  
     They are the ones who disturb sleep 😔💔`,

    `When I had to say goodbye 💔  
     Then why did you spend years 🥀  
     After losing you I have come to know this much 💔  
     All who find you will regret it 🥀`,

    `There should be no hope of meeting in the next life,  
     If the river dries up then there should be no thirst,  
     Those who were saying that living is impossible without you,  
     They should not be sad even for two days after being separated from me.`,

    `If you can escape my memories,  
     This is my promise to you,  
     I will tell the world myself,  
     The flaw was in my loyalty.`,

    `Take with you the incomplete stories of your false promises.  
     You will need them again in your next love.  
     I had come to decorate the party of your heart,  
     I swear I had come to make you mine.  
     For what did you punish me, you unfaithful person?  
     I had come to make your pain mine.`,
  ];

  return (
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
        <Text c="gray.2" size="md"  fw={900} fs="3.5rem"  style={{ fontStyle: "italic" ,textShadow:"0 0 30px rgba(0, 255, 255, 0.8)"}}>
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
              width: "85%",
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
                "0 0 30px rgba(0,255,255,0.8)";
              e.currentTarget.style.border =
                "1px solid rgba(0,255,255,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(0,0,0,0.6)";
              e.currentTarget.style.border =
                "1px solid rgba(255,255,255,0.2)";
            }}
          >
            {/* Badge Top */}
            <Badge
              variant="gradient"
              gradient={{ from: "cyan", to: "blue" }}
              size="sm"
              style={{
                marginBottom: "12px",
                boxShadow: "0 0 15px rgba(0,255,255,0.8)",
              }}
            >
              🌟 Quote #{i + 1}
            </Badge>

            <Text size="md" style={{ lineHeight: 1.8, fontWeight: "500" }}>
              {q}
            </Text>
          </Card>
        ))}
      </Flex>
    </Container>
  );
}
