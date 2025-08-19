
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
import img3 from "./images/background-ai_094202459.png"
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
                    <button  style={{backgroundColor:"#89CFEF"}}><a href="/Motavison" style={{color:"black"}} >Poetry</a></button>
                    <button  style={{backgroundColor:"#89CFEF"}}><a href="https://wa.me/8290400325" style={{color:"black"}}>Whatsapp</a></button>
                    <button  style={{backgroundColor:"#89CFEF",}}>  <a href="tel:=918290400325" style={{color:"black"}}> call now</a> </button>
                    </div>
                 </div>
           

            
            
            
  <Box maw={900} mx="auto">
      <Group justify="center" mb={12} >
        
      </Group>

      <Collapse in={opened}>
      
      </Collapse>
    </Box>
    
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
    <Text
      size="xl"
      fw={900}
      variant="gradient"
      style={{display:"flex", alignItems:"center",justifyContent:"center"}}
      gradient={{ from: 'rgba(255, 255, 255, 1)', to: 'rgba(255, 255, 255, 0.16)', deg: 180 }}
    >
      <h1>Rahul Swami.onlne</h1>
    </Text></Container>
    );
}
