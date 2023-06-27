import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Link, Text } from '@chakra-ui/react';

const Navigation = () => {
  return (
    <Flex bg="blue.100" py={4} px={8}>
      <Link as={RouterLink} to="/" mr={4}>
        <Text>Home</Text>
      </Link>
      <Link as={RouterLink} to="/projects" mr={4}>
        <Text>Projects</Text>
      </Link>
      <Link as={RouterLink} to="/contact" mr={4}>
        <Text>Contact</Text>
      </Link>
      <Link as={RouterLink} to="/resume">
        <Text>Resume</Text>
      </Link>
    </Flex>
  );
};

export default Navigation;