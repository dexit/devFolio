import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="blue.500" color="white" py={4}>
      <Heading as="h1" size="2xl" textAlign="center">
        My Portfolio Website
      </Heading>
    </Box>
  );
};

export default Header;