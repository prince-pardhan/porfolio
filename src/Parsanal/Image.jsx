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
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';
import img2 from "./images/OIP (1).jpeg"
import img1 from "./images/swami.jpeg"
export default function Contactpage() {
  return (
  
     <Flex align="center" >
                <Image
                    src={img1}


                    // alt="Profile Image"
                    style={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                        borderRadius: '10%',
                    }}
                    mb="sm"
                />
                <Image
                    src={img2}


                    alt="Profile Image"
                  style={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                        borderRadius: '10%',
                    }}
                    mb="sm"
                />
            </Flex>

  
  );
}
