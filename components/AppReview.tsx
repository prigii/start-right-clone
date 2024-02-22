import { Container, Grid, GridItem, Text, Button, VStack, Textarea } from '@chakra-ui/react'
import React from 'react'

export default function AppReview() {
  return (
    <VStack 
    //mx={'auto'}
    mt={'10'}
    w={'full'}
    //w={{ base: "90%", md: 500, lg: "full"}}
    justifyContent={'center'}
    //bg={useColorModeValue("gray.50", "gray.800")}

  >
    <Container >
      <Text align={'center'} fontSize={'x-large'} fontWeight={'bold'} mt={'10'}>Review your code</Text>
      <Grid templateColumns='repeat(5, 1fr)' templateRows='repeat(2, 1fr)' gap={'4'} h={'200'} m={'12'}>
        <GridItem rowSpan={2} colSpan={1} bg={'tomato'}>
          <Text>Folders</Text>
        </GridItem>
        <GridItem colSpan={4} rowSpan={2} bg={'white'} >
        <Textarea
          placeholder='Code'
          size='lg'
         
        />
        </GridItem>
      </Grid>
      <Button as={'a'} href='/services' bg={'teal'} color={'white'} mb={'20'}  mx={'24'}>Improve Code</Button>
      <Button as={'a'} href='/finish' bg={'teal'} color={'white'} mb={'20'}>Finish</Button>
    </Container>
    </VStack>
  )
}
