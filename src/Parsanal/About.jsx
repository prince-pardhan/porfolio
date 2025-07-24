import React from 'react';
import {
  Container,
  Title,
  Text,
  Image,
  List,
  Anchor,
  Stack,
  rem,
  Flex,
} from '@mantine/core';
import img1 from "./images/rahul.jpeg"
import img2 from "./images/self-pic.jpeg"

export default function AboutPage() {
  return (
    <Container
      size="sm"
      // p="xl"
      style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}
    >
      <Stack spacing="md">

        <div style={{ textAlign: 'center' }}>
          <Title order={1} style={{ color: '#30ff06ff', }}>
            Rahul Swami
          </Title>
          <Text size="lg" style={{ color: '#ffffff' }}>
          </Text>
        </div>

        <Flex justify={'space-between'} h={150} style={{ boxShadow: '10px 10px 100px 10px 10pxm10px gray' }}>
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
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '50%',

            }}
            mb="sm"

          />
        </Flex>
        <div>
          <Text>
            Namaste ! Main <strong>Rahul Swami</strong>...
          </Text>
        </div>


        <div>
          <Title order={3} style={{ color: '#30ff06ff' }} mb="xs">
            Skills
          </Title>
          <List spacing="xs" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {['Video Editor', 'Photo Editor', 'Writer', 'Gamer', 'Poster  Editor', 'Typing', ' Basic computer',
              'fotto ai video', 'html', 'css', 'javascript'].map((skill) => (
                <List.Item
                  key={skill}
                  style={{
                    backgroundColor: '#333',
                    padding: '8px 20px',
                    borderRadius: '4px',
                    margin: '6px',
                  }}
                >
                  {skill}
                </List.Item>
              ))}
          </List>
        </div>

        {/* Experience */}
        <div>
          <Title order={3} style={{ color: '#30ff06ff' }} mb="xs">
            Experience
          </Title>
          <Text>
            <h3>Hii ..</h3>
            <h4>Me Rahul swami</h4>
            • 1+ years working as a Video & Photo Editor and web <br />
            • my mam motive bussian <br />
            • my 2nd web news  <br />
            • i am best gamer <br />
            • Fotto  Editor ,Vido  Editor and Poster  Editor is my skill   <br />
            • my intersted senging


          </Text>
        </div>


        <div>
          <Title order={3} style={{ color: '#30ff06ff' }} mb="xs">
            My details
          </Title>
          <Text>
            <h4>Hii...</h4>
            <h5>Hook se shuruaat karein: e.g. creative Editor with [1+] years of experience….”</h5>
            <h6>
              I,m Rahul , a  Fotto  Editor ,Vido  Editor and Poster  Editor  based in Panipat, with <br />
              1+ years of experience in building responsive Editor using React and Node.js. <br />
              I love Editor ideas into real digital products that help businesses grow. <br />
              I started my journey during college, building small projects and contributing to open-source. <br />
              Over time, I led a team to deliver a client-focused e-commerce platform that boosted sales by 25%. <br />
              I,m Google-certified in JavaScript and UX-focused design. <br />
            </h6>
            <h4 style={{ color: '#30ff06ff' }}>Thanks...</h4>
          </Text>
        </div>
      </Stack>
    </Container>
  );
}
