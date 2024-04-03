import React from 'react';
import { Box, Text, Heading, Container, Grid, GridItem, Image } from '@chakra-ui/react';
import { url } from 'inspector';


const AboutUs = () => {
  return (
    <Box
      backgroundImage="url('https://media.istockphoto.com/id/1494104649/photo/ai-chatbot-artificial-intelligence-digital-concept.jpg?s=612x612&w=0&k=20&c=1Zq2sj3W0tWcpc-n1fVt4dQQOBGhtwcAk1H2eQ5MAbI=')" // Replace '/path/to/your/image.jpg' with the path to your image
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={8}
    >
    <Container maxW="container.lg" mt={8} >
      <Grid templateColumns="repeat(6, 2fr)" gap={4}>
        <GridItem colSpan={{ base: 12, md: 10, lg: 8 }} mx="auto">
          <Box textAlign="center" mb={8} >
            <Heading as="h1" fontSize={{ base: '4xl', md: '5xl' }} color="white" mb={4}>
              About Us
            </Heading>
            <Heading as="h2" fontSize={{ base: '2xl', lg: '3xl' }} color="white" mb={4}>  Our Mission </Heading>
            <Text fontSize={{ base: 'lg', lg: 'xl' }} color='white'>
              Transforming the landscape of development processes through the utilization of AI, our company is dedicated
              to establishing a cutting-edge platform that empowers developers to craft innovative applications seamlessly.
            </Text>
            <Heading as="h2" fontSize={{ base: '2xl', lg: '3xl' }} color="white" mb={4} mt={4}>Our Vision</Heading>
            <Text fontSize={{ base: 'lg', lg: 'xl' }} mt={4} color='white'>
              To streamline development workflows by providing AI-generated, polished full-stack boilerplate code,
              ultimately fostering a climate of enhanced developer creativity and driving forward technological progress.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
    </Box>
  );
};

export default AboutUs;
