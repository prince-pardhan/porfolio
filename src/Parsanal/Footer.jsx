import {
  Box,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  Title,
  Anchor,
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
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <Box
      py="xl"
      mt="xl"
      style={{
        background:
          "linear-gradient(135deg, #51a2c5ff, #51a2c5ff, #51a2c5ff)", // Dark gradient background
        borderTop: "3px solid #00c3ff",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.3)",
      }}
    >
      <Container size="lg">
        {/* Main Layout */}
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          gap="xl"
          wrap="wrap"
        >
          {/* Card Style Wrapper for all 3 sections */}
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
            <Text size="sm" c="gray.9" style={{ lineHeight: 1.8, fontWeight:"900" }}>
              🎬 Video, Image, Poster Editing <br />
              💼 2+ years of editing experience <br />
               🖥   Full stak Developer [Ks Junction] <br />
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
              {/* Social Icons */}
              <Group spacing="md" mt="sm">
                <ActionIcon
                  size="lg"
                  radius="xl"
                  variant="filled"
                  color="blue"
                  component="a"
                  href="https://www.facebook.com/share/p/19WEkPssmd/"
                  target="_blank"
                  style={{
                    transition: "0.3s",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                  }}
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
                  style={{
                    transition: "0.3s",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                  }}
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
                  style={{
                    transition: "0.3s",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                  }}
                >
                  <IconBrandInstagram size={22} />
                </ActionIcon>
              </Group>
            </Stack>
          </Card>
        </Flex>

        {/* Divider */}
        <Divider my="lg" color="gray.7" />

        {/* Bottom Copyright */}
        <Text
          size="sm"
          ta="center"
          c="white"
          fw={600}
          style={{ letterSpacing: "0.5px" }}
        >
          © {new Date().getFullYear()}{" "}
          <strong style={{ color: "#00c3ff" }}>Rahulswami.online</strong>
        </Text>
      </Container>
    </Box>
  );
}
