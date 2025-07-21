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

export default function Contactpage() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
      
    },
    validate: {
      name: (value) => (value ? null : 'Name is required'),
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : 'Invalid email',
      password: (value) =>
        value.length >= 6 ? null : 'Password must be 6+ characters',
      phone: (value) =>
        value.length >= 10 ? null : 'Invalid phone number',
    },
  });

  const handleSubmit = (values) => {
    console.log('Form data', values  );
    // Optionally submit to your endpoint with fetch or axios
  };

  return (
    <Container size="xs" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center',  padding: '3rem',fontWeight:900, }}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack spacing="md">
          <Title order={2} align="center" style={{ color: '#0275d8' }}>
            Contact Me
          </Title>

          <TextInput
            required
            label="Name"
            placeholder="Naam"
            {...form.getInputProps('name')}
          />

          <TextInput
            required
            label="Email"
            placeholder="Email"
            {...form.getInputProps('email')}
          />

          <TextInput
            required
            type="password"
            label="Password"
            placeholder="Password"
            {...form.getInputProps('password')}
          />

          <TextInput
            label="Phone number"
            placeholder="Phone number"
            {...form.getInputProps('phone')}
          />

          <Button type="submit" size="md" color="blue">
            Send Message
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
