import { Box, Button, Checkbox, CheckboxGroup, Container, Flex, Grid, GridItem, Heading, List, ListItem, Stack, Text, VStack, useColorModeValue } from '@chakra-ui/react'


export default function TechStack() {
  return (
    <VStack 
    //mx={'auto'}
    mt={'10'}
    w={{ base: "90%", md: 500, lg: "100%"}}
    //justifyContent={'center'}
    bg={useColorModeValue("gray.50", "gray.800")}

  >
    <Container>
      <Heading as={'h2'} mx={''} textAlign='center' >Choose your technology stack</Heading>
      <Grid templateColumns={'repeat(3, 1fr)'} mt={'10'} bg={''} gap={'6'} justifyContent={'center'}>
        <GridItem  border='4px' borderColor='twitter.500' w={'60'} borderRadius={'8'}>
          <Text align={'center'} fontWeight={'bold'} mb={'4'}>Type of application</Text>
          <CheckboxGroup colorScheme='green'>
            <VStack spacing={[1, 5]} direction={['column', 'row']}>
              <Checkbox value='frontend'>Frontend</Checkbox>
              <Checkbox value='api'>API</Checkbox>
              <Checkbox value='fullstack'>Full-stack</Checkbox>
            </VStack>
          </CheckboxGroup> 
        </GridItem>
        <GridItem border='4px' borderColor='twitter.500' w={'60'} borderRadius={'8'}>
          <Text align={'center'} fontWeight={'bold'} mb={'4'}>Front-end stack</Text>
          <CheckboxGroup colorScheme='green'>
        <VStack spacing={[1, 5]} direction={['column', 'row']}>
          <Checkbox value='frontend'>HTML, CSS, JS</Checkbox>
          <Checkbox value='api'>React</Checkbox>
          <Checkbox value='fullstack'>Next</Checkbox>
        </VStack>
      </CheckboxGroup> 
        </GridItem>
        <GridItem border='4px' borderColor='twitter.500' w={'60'} borderRadius={'8'}>
          <Text align={'center'} fontWeight={'bold'} mb={'4'}>Back-end stack</Text>
          <CheckboxGroup colorScheme='green'>
            <VStack spacing={[1, 5]} direction={['column', 'row']}>
              <Checkbox value='frontend'>Node.js</Checkbox>
              <Checkbox value='api'>Django</Checkbox>
              <Checkbox value='fullstack'>Flask</Checkbox>
            </VStack>
          </CheckboxGroup> 
        </GridItem>
      </Grid>
      <Flex flexDirection={'row'} gap={'20'} mt={'12'} mb={'12'} justifyContent={'center'}>
        <Button as={'a'} href='/appprocessing' bg={'whatsapp.500'} color={'white'} size={'lg'}>Start Building</Button>
        <Button as={'a'} href='/dashboard' bg={'tomato'} color={'white'} size={'lg'}>Go Back</Button>
      </Flex>
     
    </Container>
  </VStack>
  )
}
