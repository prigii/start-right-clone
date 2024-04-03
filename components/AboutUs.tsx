import React from 'react';
import { Box, Text, Heading, Container, Grid, GridItem, Image } from '@chakra-ui/react';


const AboutUs = () => {
  return (
    <Box
      backgroundImage="url('../public/AI_photo.jpg')" // Replace '/path/to/your/image.jpg' with the path to your image
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
            <Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }} color="whatsapp.500" mb={4}>
              About StartRight
            </Heading>
            <Heading as="h2" fontSize={{ base: 'xl', lg: '2xl' }} color="whatsapp.500" mb={4}>Our Mission</Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
              Transforming the landscape of development processes through the utilization of AI, our company is dedicated
              to establishing a cutting-edge platform that empowers developers to craft innovative applications seamlessly.
            </Text>
            <Heading as="h2" fontSize={{ base: 'xl', lg: '2xl' }} color="whatsapp.500" mb={4} mt={4}>Our Vision</Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} mt={4}>
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
