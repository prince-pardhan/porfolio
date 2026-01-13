import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  Title,
  Divider,
  ActionIcon,
  Card,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandInstagram,
  IconPhoneCall,
  IconMail,
  IconStar,
  IconStarFilled,
} from "@tabler/icons-react";
const LOCALSTORAGE_KEY = "rahul_footer_star_count_v1";
const LOCALSTORAGE_CLICKED = "rahul_footer_star_clicked_v1";
export default function Footer() {
  const [starCount, setStarCount] = useState(0);
  const [starClicked, setStarClicked] = useState(false);
  const [anim, setAnim] = useState(false);
  useEffect(() => {
    try {
      const saved = parseInt(localStorage.getItem(LOCALSTORAGE_KEY), 10);
      const clicked = localStorage.getItem(LOCALSTORAGE_CLICKED) === "true";
      if (!Number.isNaN(saved)) setStarCount(saved);
      setStarClicked(Boolean(clicked));
    } catch (err) {
      console.warn("localStorage read error", err);
    }
  }, []);
  const handleStarClick = () => {
    if (starClicked) return; 
    const newCount = (starCount || 0) + 1;
    setStarCount(newCount);
    setStarClicked(true);
try {
      localStorage.setItem(LOCALSTORAGE_KEY, String(newCount));
      localStorage.setItem(LOCALSTORAGE_CLICKED, "true");
    } catch (err) {
      console.warn("localStorage write error", err);
    }  
    setAnim(true);
    setTimeout(() => setAnim(false), 300);
  };
  return (
    <Box
      py="xl"
      mt="xl"
      style={{
        background:
          "linear-gradient(135deg, #51a2c5ff, #51a2c5ff, #51a2c5ff)",
        borderTop: "3px solid #00c3ff",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.3)",
        
      }}
    >
      <Container size="lg">
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          gap="xl"
          wrap="wrap"
        >    
          <Card
            radius="lg"
            shadow="md"
            p="lg"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(12px)",
              flex: 1,
              minWidth: 250,
            }}
          >
            <Title
              order={3}
              c="black"
              mb="sm"
              style={{
                fontWeight: "800",
                fontSize: "1.6rem",
                letterSpacing: "1px",
              }}
            >
              Editor Skills
            </Title>
            <Text size="sm" c="gray.9" style={{ lineHeight: 1.8, fontWeight: "900" }}>
              🎬 Video, Image, Poster Editing <br />
              💼 2+ years of editing experience <br />
              🖥 Full Stack Developer [Ks Junction] <br />
              <a href="https://prince-pardhan.github.io/farming/" target="_blank" style={{color:"green", fontWeight:"900", fontSize:"200%"}}>Green Farma</a>
              <br />
              <strong
                style={{
                  color: "#ffd369",
                  fontWeight: "900",
                  fontSize: "1.1rem",
                }}
              >
                Rahul Swami
              </strong>
            </Text>
          </Card>
          <Flex style={{ flex: 0.2, minWidth: 40 }} />
          <Card
            radius="lg"
            shadow="md"
            p="lg"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(12px)",
              flex: 1,
              minWidth: 250,
            }}
          >
            <Title order={5} c="white" mb="xs" fw={700}>
              Contact
            </Title>
            <Stack spacing="xs">
              <Group spacing="xs">
                <IconPhoneCall size={18} color="#00c3ff" />
                <Text size="sm" c="white" fw="600">
                  +91-8290-400-325
                </Text>
              </Group>
              <Group spacing="xs">
                <IconMail size={18} color="#00c3ff" />
                <Text size="sm" c="white" fw="600">
                  srk016361@.com
                </Text>
              </Group>
              <Group spacing="md" mt="sm">
                <ActionIcon
                  size="lg"
                  radius="xl"
                  variant="filled"
                  color="blue"
                  component="a"
                  href="https://www.facebook.com/share/p/19WEkPssmd/"
                  target="_blank"
                >
                  <IconBrandFacebook size={22} />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  radius="xl"
                  variant="filled"
                  color="red"
                  component="a"
                  href="https://youtube.com/@princpardhan7782?si=h71r0D50nU4aPtFd"
                  target="_blank"
                >  
                  <IconBrandYoutube size={22} />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  radius="xl"
                  variant="filled"
                  color="pink"
                  component="a"
                  href="https://www.instagram.com/princ_pardhan_325?igsh=MXFxaTBjMHdpZW5ueg=="
                  target="_blank"
                >
                  <IconBrandInstagram size={22} />
                </ActionIcon>
              </Group>
                       <Divider my="sm" color="rgba(255,255,255,0.06)" />
              <Group position="apart" align="center">
                <Group spacing="xs">
                  <ActionIcon
                    size="xl"
                    radius="xl"
                    variant={starClicked ? "filled" : "light"}
                    color={starClicked ? "yellow" : "gray"}
                    onClick={handleStarClick}
                    disabled={starClicked} 
                    style={{
                      transform: anim ? "scale(1.15)" : "scale(1)",
                      transition: "transform 120ms ease",
                      cursor: starClicked ? "not-allowed" : "pointer",
                    }}
                    aria-label="Give a star"
                  >
                    {starClicked ? <IconStarFilled size={20} /> : <IconStar size={20} />}
                  </ActionIcon>
                  <div>
                    <Text size="sm" c="white" fw={700}>
                      {starCount || 0}
                    </Text>
                    <Text size="xs" c="gray.5">
                      lifetime stars
                    </Text>
                  </div>
                </Group>
                <Text size="xs" c="gray.5" ta="right">
                  Click once to support ✨
                </Text>
              </Group>
            </Stack>
          </Card>
        </Flex>
        <Divider my="lg" color="gray.7" />
        <Text size="sm" ta="center" c="white" fw={600} style={{ letterSpacing: "0.5px" }}>
          © {new Date().getFullYear()}{" "}
          <strong style={{ color: "#00c3ff" }}>Rahulswami.online</strong>
        </Text>
      </Container>
    </Box>
  );
}