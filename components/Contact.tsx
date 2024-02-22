import {
    Flex,
    Input,
    FormControl,
    FormLabel,
    Checkbox,
    Stack,
    Button,
    Heading,
    VStack,
    Text,
    useColorModeValue,
    Textarea
  } from "@chakra-ui/react"
  
    
    export default function Contact() {
      
      return (
        <VStack 
          as={'form'}
          mx={'auto'}
          w={{ base: "90%", md: 500}}
         // h={'1000vh'}
          justifyContent={'center'}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Heading as='h2'>Contact Us</Heading>
          <Text>Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</Text>
          <FormControl>
            <FormLabel>Your email:</FormLabel>
            <Input type="email" placeholder="email@gmail.com"/>
          </FormControl>
          <FormControl>
            <FormLabel>Subject:</FormLabel>
            <Input type="text"/>
          </FormControl>
          <FormControl mb={'8px'}>
            <FormLabel>Your message:</FormLabel>
            <Textarea typeof="text" placeholder=""></Textarea>
          </FormControl>
          
           
          <Button type="submit" as={'a'} href="/" colorScheme="teal" mb={'10'}>
            Send message
          </Button>
  
        </VStack>
      )
    } 
  