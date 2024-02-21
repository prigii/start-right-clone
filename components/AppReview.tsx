import { Container, Grid, GridItem, Text, Button } from '@chakra-ui/react'
import React from 'react'

export default function AppReview() {
  return (
    <Container>
      <Grid templateColumns={'2, 1fr'}>
        <GridItem>
          <Text>Folders</Text>
        </GridItem>
        <GridItem>
          <Text>Code</Text>
        </GridItem>
      </Grid>
      <Button as={'a'} href='/services' bg={'teal'} color={'white'}>Improve Code</Button>
      <Button as={'a'} href='/finish' bg={'teal'} color={'white'}>Finish</Button>
    </Container>
  )
}
