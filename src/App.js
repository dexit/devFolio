import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Resume from './pages/Resume';
import { Container, Box, Heading, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container maxW="container.xl" mt={8}>
      <Heading as="h2" size="lg" mb={4}>
        Home Page
      </Heading>
      <Text>
        Welcome to my portfolio website. Here you can learn more about me,
        my skills, and my projects.
      </Text>
    </Container>
  );
};

const Projects = () => {
  return (
    <Container maxW="container.xl" mt={8}>
      <Heading as="h2" size="lg" mb={4}>
        Projects Page
      </Heading>
      <Project
        title="Project 1"
        imageSrc="project1.jpg"
        deployedLink="https://example.com/project1"
        githubLink="https://github.com/user/project1"
      />
      <Project
        title="Project 2"
        imageSrc="project2.jpg"
        deployedLink="https://example.com/project2"
        githubLink="https://github.com/user/project2"
      />
            <Project
        title="Project 3"
        imageSrc="project3.jpg"
        deployedLink="https://example.com/project3"
        githubLink="https://github.com/user/project3"
      />
            <Project
        title="Project 4"
        imageSrc="project4.jpg"
        deployedLink="https://example.com/project4"
        githubLink="https://github.com/user/project4"
      />
    </Container>
  );
};

const Contact = () => {
  return (
    <Container maxW="container.xl" mt={8}>
      <Heading as="h2" size="lg" mb={4}>
        Contact Page
      </Heading>
      <ContactForm />
    </Container>
  );
};

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box minH="100vh">
          <Header />
          <Navigation />

          <Box as="main" flex="1" p={8}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
            </Switch>
          </Box>

          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;