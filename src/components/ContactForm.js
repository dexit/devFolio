import React from 'react';
import { useForm } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  Box,
  Heading,
} from '@chakra-ui/react';

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box>
      <Heading as="h3" size="md" mb={4}>
        Send me a message
      </Heading>
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        maxW="container.sm"
        mx="auto"
      >
        <FormControl id="name" mb={4} isRequired isInvalid={errors.name}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            {...register('name', { required: true, maxLength: 80 })}
          />
          <FormErrorMessage>
            {errors.name?.type === 'required' && 'Name is required'}
            {errors.name?.type === 'maxLength' &&
              'Name cannot exceed 80 characters'}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="email" mb={4} isRequired isInvalid={errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            {...register('email', { required: true, maxLength: 80 })}
          />
          <FormErrorMessage>
            {errors.email?.type === 'required' && 'Email is required'}
            {errors.email?.type === 'maxLength' &&
              'Email cannot exceed 80 characters'}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          id="message"
          mb={4}
          isRequired
          isInvalid={errors.message}
        >
          <FormLabel>Message</FormLabel>
          <Textarea
            {...register('message', { required: true, maxLength: 2000 })}
          />
          <FormErrorMessage>
            {errors.message?.type === 'required' && 'Message is required'}
            {errors.message?.type === 'maxLength' &&
              'Message cannot exceed 2000 characters'}
          </FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;