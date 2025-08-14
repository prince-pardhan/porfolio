
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
import img1 from "./images/maxresdefault.jpg"
import img3 from "./images/7ad0c9b192167fbeac6f53ff97a656df.gif"
import { useDisclosure } from '@mantine/hooks';
import "../App.css"

export default function ProfilePage() {
    const isMobile = useMediaQuery("(max-width: 780px)");
      const [opened, { toggle }] = useDisclosure(false);

    return (
        <Container fluid style={{ minHeight: '100vh', width:"100%", padding: 10, backgroundImage:`url(${img3})` , backgroundPosition:"center",backgroundAttachment:"fixed", backgroundSize:"cover" }}>
           

                 <div className='hii'>
                    <div className='ramki' >
                    <button style={{backgroundColor:"#89CFEF"}} ><a href="/About" style={{color:"black",}} > About</a></button>
                    <button  style={{backgroundColor:"#89CFEF"}}><a href="/Motavison" style={{color:"black"}} >Motavison</a></button>
                    <button  style={{backgroundColor:"#89CFEF"}}><a href="https://wa.me/8290400325" style={{color:"black"}}>Whatsapp</a></button>
                    <button  style={{backgroundColor:"#89CFEF",}}> 📱 <a href="tel:=918290400325" style={{color:"black"}}> call now</a> </button>
                    </div>
                 </div>
            <Center style={{ height: '20%', flexDirection: 'inherit' }}>
                <Title order={1}  c='gray.5'>
                    ↭rahul swami↭
                </Title>

            </Center>

            <Center className="ramm" style={{ flexDirection: 'revert' }}>
                <Text weight={900} size="xs" color="red">
                </Text>
            </Center>
            
            
  <Box maw={900} mx="auto">
      <Group justify="center" mb={12} >
        <Button onClick={toggle} color='blue.9'>Opened</Button>
      </Group>

      <Collapse in={opened}>
      
      </Collapse>
    </Box>
            <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
      </Group>

      <Collapse in={opened} transitionDuration={7000} transitionTimingFunction="linear" color='#ff0000ff' >
               <Text  c='white'  >
            <h1>•Hii..</h1>
            
            <h2>•me  Rahul swami?</h2>
            <h2>•I am Video Editor in siras.</h2>
            <h2>•Editor video link in Footer.</h2>
            <h2>•Chak All Link.</h2>
        </Text>
        <Text fw={900}  c='white' >"It takes time to become successful, and time is money, and time is power"</Text>
        <Text fw={900} c='white'>"Chanakya said that the one who controls Sama, Dana, Danda, and Bhed is called a king
             — what we now call a hacker. And I control all three of them</Text>
      </Collapse>
    </Box>
           

            <Center style={{ height: '100%' }}>
                <Text size="lg" weight={900} color="gray.6" fw={900}>
                    Email: srk016361@gmail.com
                </Text>
            </Center>
          
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
        </Container>
    );
}
