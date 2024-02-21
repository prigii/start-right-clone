import { Container, Grid, GridItem, Text, Button } from '@chakra-ui/react'
import React from 'react'

export default function AppReview() {
  return (
    <Container>
      <Text align={'center'} fontSize={'x-large'} fontWeight={'bold'} mt={'10'}>Review your code</Text>
      <Grid templateColumns='repeat(5, 1fr)' templateRows='repeat(2, 1fr)' gap={'4'} h={'200'} m={'12'}>
        <GridItem rowSpan={2} colSpan={1} bg={'tomato'}>
          <Text>Folders</Text>
        </GridItem>
        <GridItem colSpan={4} rowSpan={2} bg={'tomato'} >
          <Text>Code</Text>
        </GridItem>
      </Grid>
      <Button as={'a'} href='/services' bg={'teal'} color={'white'} mb={'20'}  mx={'24'}>Improve Code</Button>
      <Button as={'a'} href='/finish' bg={'teal'} color={'white'} mb={'20'}>Finish</Button>
    </Container>
  )
}
