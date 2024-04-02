import React from 'react';
import { Box, Text, Heading, Image } from '@chakra-ui/react';
import { Container, Row, Col } from 'flowbite-react';


const AboutUs = () => {
  return (
    <Container>
      <Row>
        <Col size="12">
          <Box textAlign="center" mb={8}>
            <Heading as="h1" fontSize="3xl" color="whatsapp.500" mb={4}>
              About StartRight
            </Heading>
            <Text fontSize="lg">
              Transforming the landscape of development processes through the utilization of AI, our company is dedicated
              to establishing a cutting-edge platform that empowers developers to craft innovative applications seamlessly.
            </Text>
            <Text fontSize="lg" mt={4}>
              To streamline development workflows by providing AI-generated, polished full-stack boilerplate code,
              ultimately fostering a climate of enhanced developer creativity and driving forward technological progress.
            </Text>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
