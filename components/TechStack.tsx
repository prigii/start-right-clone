import { Box, Button, Container, Flex, Heading, List, ListItem, Text } from '@chakra-ui/react'


export default function TechStack() {
  return (
    <Container>
      <Heading as={'h2'}>Choose your technology stack</Heading>
      <Flex alignItems={'center'} flexDirection={'column'}>
        <Box flex={'flex-column'}>
          <Text>Type of application</Text>
          <List>
            <ListItem>FrontEnd</ListItem>
            <ListItem>API</ListItem>
            <ListItem>Full-stack</ListItem>
          </List>
        </Box>
        <Box flex={'flex-column'}>
          <Text>Front-end stack</Text>
          <List>
            <ListItem>HTML, CSS, JS</ListItem>
            <ListItem>React</ListItem>
            <ListItem>Next</ListItem>
          </List>
        </Box>
        <Box flex={'flex-column'}>
          <Text>Back-end stack</Text>
          <List>
            <ListItem>Flask</ListItem>
            <ListItem>Node.js</ListItem>
            <ListItem>Django</ListItem>
          </List>
        </Box>
      </Flex>
      <Flex flexDirection={'column'} gap={'8'}>
        <Button as={'a'} href='/' flex={'flex-column'} bg={'whatsapp'} size={'lg'}>Start Building</Button>
        <Button as={'a'} href='/' flex={'flex-column'} bg={'whatsapp'} size={'lg'}>Go Back</Button>
      </Flex>  
    </Container>
  )
}
