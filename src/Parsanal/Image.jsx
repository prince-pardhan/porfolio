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
   <>
   
   </>
  );
}
