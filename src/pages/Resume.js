import React from 'react';
import { Box, Heading, Text, Link } from '@chakra-ui/react';

const Resume = () => {
  return (
    <Box maxW="container.md" mx="auto" mt={8}>
      <Heading as="h2" size="lg" mb={4}>
        My Resume
      </Heading>
      <Text mb={4}>
        You can see my resume in PDF format by clicking the link below:
      </Text>
      <Link href="/resume.pdf" download>
        View Resume
      </Link>
    </Box>
  );
};

export default Resume;