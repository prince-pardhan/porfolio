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
          "linear-gradient(135deg, rgba(20,20,20,0.95), rgba(0,191,255,0.9), rgba(13,129,168,0.9))",
        backdropFilter: "blur(10px)",
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
          {/* About / Editor Info */}
          <Box w={{ base: "100%", sm: "40%" }}>
            <Title
              order={3}
              c="white"
              mb="sm"
              style={{ fontWeight: "700", fontSize: "1.4rem" }}
            >
              Editor Skills
            </Title>
            <Text size="sm" c="gray.3" style={{ lineHeight: 1.6 }}>
              🎬 Video, Image, Poster Editing <br />
              💼 2+ years of editing experience <br />
             
              <br />
              
              <strong
                style={{ color: "#ffd369", fontWeight: "900" }}
              >
                Rahul Swami
              </strong>
            </Text>
          </Box>

          {/* Quick Links */}
          <Stack spacing="xs">
            <Title order={5} c="white" mb="xs" fw={700}>
              Quick Links
            </Title>
            {[
              { label: "Home", link: "#" },
              { label: "About", link: "#about" },
              { label: "Motavison", link: "#motavison" },
            ].map((item, idx) => (
              <Anchor
                key={idx}
                href={item.link}
                size="sm"
                c="gray.2"
                style={{
                  fontWeight: 600,
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd369")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ccc")}
              >
                {item.label}
              </Anchor>
            ))}
          </Stack>

          {/* Contact */}
          <Stack spacing="xs">
            <Title order={5} c="white" mb="xs" fw={700}>
              Contact
            </Title>
            <Group spacing="xs">
              <IconPhoneCall size={18} color="#ffd369" />
              <Text size="sm" c="white" fw="600">
                +91-8290-400-325
              </Text>
            </Group>
            <Group spacing="xs">
              <IconMail size={18} color="#ffd369" />
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
                style={{ transition: "0.3s" }}
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
          </Stack>
        </Flex>

        {/* Divider */}
        <Divider my="lg" color="gray.7" />

        {/* Bottom Copyright */}
        <Text size="sm" ta="center" c="white" fw={700}>
          © {new Date().getFullYear()}{" "}
          <strong style={{ color: "#00c3ff" }}>Rahulswami.online</strong> 
        
        </Text>
      </Container>
    </Box>
  );
}
