import React from 'react';
import { Image, Box, Heading, Text, Link } from '@chakra-ui/react';

const Project = ({ title, imageSrc, deployedLink, githubLink }) => {
  return (
    <Box py={8}>
      <Heading as="h3" size="md" mb={2}>
        {title}
      </Heading>
      <Image src={imageSrc} alt={title} mb={4} />
      <Text mb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        vestibulum euismod lacus, eu tincidunt elit tincidunt quis. Ut
        volutpat rutrum eros, vitae dignissim metus aliquam id. Fusce
        efficitur dictum risus eget elementum. Donec rhoncus, odio eu
        convallis accumsan, elit dolor pharetra nibh, eget iaculis augue
        leo sit amet sapien.
      </Text>
      <Link href={deployedLink} isExternal mr={4}>
        View Deployed Site
      </Link>
      <Link href={githubLink} isExternal>
        View on GitHub
      </Link>
    </Box>
  );
};

export default Project;