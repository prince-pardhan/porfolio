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
} from '@mantine/core';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <Container component="footer" py="md" bg="gray.9">
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
         <AspectRatio ratio={16 }>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d222162.70021320193!2d75.030407!3d29.536984000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114db0893d723d%3A0xc51125be998c4f95!2sSirsa%2C%20Haryana%20125055!5e0!3m2!1sen!2sin!4v1753684470114!5m2!1sen!2sin" 
        style={{ border: 0,  width:940,height:500}}
      />
    </AspectRatio>
    </Container>
  );
}