import React from 'react';
import {
  Stack,
  Group,
  Text,
  Anchor,
  Divider,
  Container,
  Rating,
  AspectRatio,
  Avatar,
  Indicator, 
} from '@mantine/core';
import { Link } from 'react-router-dom';

import img3 from "./images/circuit-data-neural-network-ai-technology-cloud-computing-bits-internet-5g-blue-background-information-ai-talking-circuit-women-free-video.jpg"

export default function Footer() {
  return (
    <Container component="footer" py="md"style={{ backgroundImage:`url(${img3})`, minHeight: '50vh', color: '#fff' }}>
    

         <Indicator position="bottom-end" size={6} disabled>
      <Avatar
        size="lg"
        radius="sm"
        src="https://cdn1.vectorstock.com/i/1000x1000/99/25/modern-ai-logo-design-for-business-and-company-vector-37619925.jpg"
      />
    </Indicator>
      <Stack align="center" spacing="sm"  >
       
         <Rating defaultValue={0} />

        
        <h1 style={{color:"white"}}  >My ↡ Business ↡ link...</h1>
        <Group spacing="lg" fw={900} color="dimmed" c="white  ">
          <a href="https://youtube.com/@princpardhan7782?si=L09C7Xo4r6uUwGVN" style={{color:"red"}}>youtube ...</a>
          <a href="https://www.facebook.com/share/p/19WEkPssmd/" style={{color:"red"}}>fackbook ...</a>
          <a href="https://www.blogger.com/blog/posts/571040556621222478" style={{color:"red"}}>Blogger ...</a>
          <a href="https://www.instagram.com/princ_pardhan_325?igsh=MXFxaTBjMHdpZW5ueg==" style={{color:"red  "}}>Instagram ...</a>
        </Group>
        <Text  size="xl" color="dimmed" c="white" fw={900}>Chak ↟ all link</Text>
        <Divider my="md" c="white"/>      
        <Text size="xs" color="dimmed" c="white" fw={500} >
         Rahul swami.com
        </Text>
      </Stack>
        <Text size="sm" color="dimmed" c="white" fw={700}>
          © 2025 Rahul swami.com
        </Text>
          <select>
        <option>parsanal</option>
        <option>Contact us to build a website</option>
        <option>madhosinghana</option>
        <option>sirsa</option>
        <option>8290400325</option> 
        </select>
      
    </Container>
  );
}