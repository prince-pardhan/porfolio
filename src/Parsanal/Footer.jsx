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
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <Box
      py="xl"
      mt="xl"
      style={{
        background: "linear-gradient(135deg, #232222ff, #00bfffff, #0d81a8ff)",
      }}
    >
      <Container size="lg">
        
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          gap="xl"
          wrap="wrap"
        >
         
          <Box w={{ base: "100%", sm: "40%" }}>
            <Title order={3} c="white" mb="sm" style={{ fontWeight: "700" }}>
            Editor Skill↠↠Video,Image,Poater Editor,||  Editor working in 2 year. ? <br />

            </Title>
            <Text size="sm" c="gray.3" style={{ lineHeight: 1.6 }}>
               Software Development  in (Ks junction Sirsa)  Developer ? 
              <br /> <br />
              👨‍💻 Developer↠{" "}
              <strong style={{ color: "rgba(0, 195, 255, 1)", fontWeight:"900" }}>Rahul Swami</strong>
            </Text>
          </Box>
 
          
          <Stack spacing="xs">
          
            {[
           
            ].map((item) => (
              <Anchor
                key={item.label}
                href={item.link}
                size="sm"
                c="gray.2"
                style={{
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#ffd369")}
                onMouseLeave={(e) => (e.target.style.color = "#ccc")}
              >
                {item.label}
              </Anchor>
            ))}
          </Stack> 
          <Stack>
             <Text style={{color:"white", fontWeight:"900"}}>Quick Links </Text>
            <Text> <a href="#about" style={{color:"white", fontWeight:"700"}}>About</a> </Text> 
          <Text> <a href="#motavison" style={{color:"white", fontWeight:"700"}}>Motavison</a></Text>
          <Text> <a href="#" style={{color:"white", fontWeight:"700"}}>Home</a></Text></Stack>
         
          
          <Stack spacing="xs">

            <Title order={5} c="white" mb="xs" fw={900}>
              Contact
            </Title>
            <Text size="sm" c="white" fw="900">
              📞 +91-8290-400-325
            </Text>
            <Text size="xxl" c="white" fw="900">  
              📧 srk016361@.com
            </Text>
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
                <IconBrandFacebook size={40} />
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
                <IconBrandYoutube size={25} />
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
                <IconBrandInstagram size={30} />
              </ActionIcon>
            </Group>
          </Stack>
        </Flex>

        {/* Divider */}
        <Divider my="lg" color="gray.7" />

        
        <Text size="sm" ta="center" c="white" fw={900}>
          © {new Date().getFullYear()} <strong style={{color:"white", fontWeight:"900"}}>Rahulswami.online</strong> 
        
        </Text>
      </Container>
    </Box>
  );
}
