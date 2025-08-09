
import React from 'react';
import {
    Container,
    Text,
    Anchor,
    SimpleGrid,
    Card,
    Image,
    Center,
    Title,
    Box,
    Flex,
    Group,
    Button,
    Collapse,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import img1 from "./images/swami.jpeg"
import img2 from "./images/OIP (1).jpeg"
import { useDisclosure } from '@mantine/hooks';

export default function ProfilePage() {
    const isMobile = useMediaQuery("(max-width: 780px)");
      const [opened, { toggle }] = useDisclosure(false);

    return (
        <Container fluid style={{ background: 'linear-gradient(135deg, #00fff7ff, white)', minHeight: '100vh', padding: 0, }}>

            <Center style={{ height: '20%', flexDirection: 'inherit' }}>
                <Title order={1} color="black">
                    ↭rahul swami↭
                </Title>

            </Center>

            <Center className="ramm" style={{ flexDirection: 'revert' }}>
                <Text weight={900} size="xs" color="red">
                </Text>
            </Center>
            <Flex justify={'space-between'}>
                <Image
                    src={img1}


                    alt="Profile Image"
                    style={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                    }}
                    mb="sm"
                />
                <Image
                    src={img2}


                    alt="Profile Image"
                    style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                    }}
                    mb="sm"
                />
            </Flex>
  <Box maw={900} mx="auto">
      <Group justify="center" mb={12} >
        <Button onClick={toggle} color='blue.9'>Chak</Button>
      </Group>

      <Collapse in={opened}>
        <Text>
            <h1>•Hii..</h1>
            
            <h2>•me  Rahul swami?</h2>
            <h3>•I am Video Editor in siras.</h3>
            <h4>•Editor video link in Footer.</h4>
            <h5>•Chak All Link.</h5>
        </Text>
      </Collapse>
    </Box>
            <SimpleGrid cols={2} spacing="md" px="md" >
                <Card shadow="sm" radius="md" padding="lg" >
                    <Text weight={20} size="xl" mb="xs" fw={900}>
                        About Me
                    </Text>
                    <Anchor href="/About" weight={900} fw={900}>
                        Read more.. ↠↠↠
                    </Anchor>
                </Card>
                
                <Card shadow="sm" radius="md" padding="lg" withBorder >
                    <Text weight={50} size="sm" mb="xs" fw={900}>
                       Bussian Motavison story 
                    </Text>
                    <Anchor href="/Motavison" weight={900} fw={900}>
                        Read more.. ↠↠↠
                    </Anchor>
                </Card>
               
                <Card shadow="sm" radius="md" padding="lg" withBorder >
                    <Text weight={900} size="xl" mb="xs" fw={900} c="red">
                   <a href="https://wa.me/8290400325">Whatsapp.. ↠↠↠</a>
                    </Text>
                    <Anchor href="/About" weight={900} fw={900}>

                    </Anchor>
                </Card>

                <Card shadow="xs" radius="xs" padding="xs" withBorder>
                    <Text weight={50} size="xl" mb="xs" fw={900}>
                        📱 <a href="tel:=918290400325"> call me.. ↠↠↠</a>
                    </Text>
                </Card>
            </SimpleGrid>

            <Center style={{ height: '100%' }}>
                <Text size="lg" weight={900} color="gray.6" fw={900}>
                    Email: srk016361@gmail.com
                </Text>
            </Center>
            <Center style={{ height: '100%' }}>
                <Text size="xl" weight={900} color="red" fw={900}>
                    "It takes time to become successful, and time is money, and time is power"
                </Text>
            </Center>
            <Center style={{ height: '100%' }}>
                <Text size="lg" weight={900} color="black.9" fw={900} >
                   "Chanakya said that the one who controls Sama, Dana, Danda, and Bhed 
                   is called a king — what we now call a hacker. And I control all three of them
                </Text>
            </Center>
        </Container>
    );
}
