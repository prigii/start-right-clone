import { Container, Text, Stack, Progress, Button } from '@chakra-ui/react'
import React from 'react'

export default function AppProcessing() {
  return (
    <Container>
      <Text fontSize={'x-large'} align={'center'} fontWeight={'bold'} mt={'20'}>Sit back, relax and watch as we create your app. </Text>
      <Text  align={'center'} mb={'10'}> We endeavour to make this take just a fraction of your precious time.</Text>
      <Stack spacing={5}>
        <Progress colorScheme='green' size='sm' value={20} />
        <Progress colorScheme='green' size='md' value={20} />
        <Progress colorScheme='green' size='lg' value={20} />
        <Progress colorScheme='green' height='32px' value={20} />
        <Progress size='xs' isIndeterminate />
      </Stack>
      <Button as={'a'} href='/appreview' bg={'red'} justifyItems={'center'} color={'white'} mt={'10'} _hover={{bg: 'teal.400'}} mb={'20'}>Review your app</Button>
    </Container>
  )
}
