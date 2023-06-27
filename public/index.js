import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Resume from './pages/Resume';
import { Container, Box, Heading, Text } from '@chakra-ui/react';
ReactDOM.render(
<RouterApp>
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>,
</RouterApp>,

    

    document.getElementById('root')
);

