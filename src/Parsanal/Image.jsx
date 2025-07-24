import React from 'react';
import {
  Container,
  TextInput,
  Button,
  Title,
  Stack,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';
import img2 from "./images/OIP (1).jpeg"
import img1 from "./images/swami.jpeg"
export default function Contactpage() {
  return (
   <>
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
   </>
  );
}
