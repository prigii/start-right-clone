import React from 'react';
import { Box, Text, Heading, Container, Grid, GridItem, Image } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Container maxW="container.lg" mt={8}>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={{ base: 12, md: 10, lg: 8 }} mx="auto">
          <Box textAlign="center" mb={8}>
            <Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }} color="whatsapp.500" mb={4}>
              About StartRight
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }}>
              Transforming the landscape of development processes through the utilization of AI, our company is dedicated
              to establishing a cutting-edge platform that empowers developers to craft innovative applications seamlessly.
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} mt={4}>
              To streamline development workflows by providing AI-generated, polished full-stack boilerplate code,
              ultimately fostering a climate of enhanced developer creativity and driving forward technological progress.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default AboutUs;
