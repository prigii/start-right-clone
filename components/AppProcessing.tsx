import { Container, Text, Stack, Progress, Button, VStack } from '@chakra-ui/react'
import React from 'react'

export default function AppProcessing() {
  return (
    <VStack 
    //mx={'auto'}
    mt={'10'}
    w={{ base: "90%", md: 500, lg: "100%"}}
    justifyContent={'center'}
    //bg={useColorModeValue("gray.50", "gray.800")}

  >
      <Container>
        <Text fontSize={'x-large'} align={'center'} fontWeight={'bold'} mb={'4'}>Sit back, relax and watch as we create your app. </Text>
        <Text  align={'center'} mb={'10'}> This will take just a fraction of your precious time.</Text>
        <Stack spacing={5}>
          <Progress colorScheme='green' size='sm' value={20} />
          <Progress colorScheme='green' size='md' value={20} />
          <Progress colorScheme='green' size='lg' value={20} />
          <Progress colorScheme='green' height='32px' value={20} />
          <Progress size='sm' isIndeterminate />
        </Stack>
        <Button as={'a'} href='/appreview' bg={'red'}  color={'white'} mt={'10'} _hover={{bg: 'teal.400'}} mb={'20'}>Review your app</Button>
      </Container>
    </VStack>
  )
}
