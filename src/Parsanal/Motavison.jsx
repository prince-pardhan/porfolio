import {
  Container,
  Text,
  Card,
  Title,
  Flex
} from "@mantine/core";
import img3 from "./images/background-ai_094202459.png";

export default function ProfilePage() {
  const quotes = [
    `Write my story after my death.
     How my youth was wasted. 
     Write that even at the time of my death I 
     was praying for you. My hands were out.  
     Write this sign from my shroud.`,

    `To achieve your dreams, work hard and try till your last breath..!  
     Promise that we will win.  
     Always try harder.  
     Even if fate is angry, don't lose courage.  
     Make this resolve so strong…`,

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
     `Web EnthusiThere should be no hope of meeting in the next life,
If the river dries up then there should be no thirst,
Those who were saying that living is impossible without you,
They should not be sad even for two days after being separated from me.`,
`The passing of time makes us realize,
The one we love from the heart is the one who hurts us,
The wounds that time heals,
Someone close to us awakens that pain again.`,
  ];

  return (
    <Container
      fluid
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${img3})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        padding: "30px 0"
      }}
    >
      {/* Title Section */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Title
          order={1}
          style={{
            color: "white",
            fontSize: "2.5rem",
            textShadow: "0 0 20px rgba(255,255,255,0.8)",
          }}
        >
          Rahul Swami
        </Title>
      </div>

      {/* Cards in column */}
      <Flex direction="column" gap="lg" align="center">
        {quotes.map((q, i) => (
          <Card
            key={i}
            shadow="lg"
            padding="lg"
            radius="lg"
            style={{
              width: "80%",   // ✅ हर कार्ड सेंटर और बराबर चौड़ाई में
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              color: "white",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(255,255,255,0.6)";
              e.currentTarget.style.border =
                "1px solid rgba(255,255,255,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.border =
                "1px solid rgba(255,255,255,0.2)";
            }}
          >
            <Text size="sm" style={{ lineHeight: 1.7 }}>
              {q}
            </Text>
          </Card>
        ))}
      </Flex>
    </Container>
  );
}
