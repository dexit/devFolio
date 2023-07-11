
/* GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 

A single Header component that appears on multiple pages

A single Navigation component within the header that will be used to conditionally render the different sections of your portfolio

A single Project component that will be used multiple times in the Portfolio section

A single Footer component that appears on multiple pages

Application must use React to render content.

Application has a single Header component that appears on multiple pages, with a Navigation component within it that’s used to conditionally render About Me, Portfolio, Contact, and Resume sections.

Application has a single Project component that’s used multiple times in the Portfolio section.

Application has a single Footer component that appears on multiple pages.

The contact form should be similar to the one you built in the module project. Because this application doesn’t include a back end or connect to an API, you can set up this functionality the same way you did in the module project and add in back-end functionality after you’ve covered it in the next few weeks.

In the meantime, consider adding your email address and phone number on the Contact page.

*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import theme from './theme';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
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

