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

  
  export default function NewProjectCard() {
    
    return (
      <VStack 
        as={'form'}
        mx={'auto'}
        w={{ base: "90%", md: 500}}
       // h={'1000vh'}
        justifyContent={'center'}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Heading as='h2'>Create App</Heading>
        <Text>Let us know more about your app then you can buckle up and watch us do the magic.</Text>
        <FormControl>
          <FormLabel>App name:</FormLabel>
          <Input type="text" placeholder="my-app" isRequired/>
        </FormControl>
        <FormControl>
          <FormLabel>Core functionality:</FormLabel>
          <Input type="text" placeholder="Describe your app in a few words"/>
        </FormControl>
        <FormControl>
          <FormLabel>Why this app? Why??</FormLabel>
          <Input type="text" placeholder=""/>
        </FormControl>
        <FormControl>
          <FormLabel>What problem is it supposed to solve, man?</FormLabel>
          <Input type="text" placeholder=""/>
        </FormControl>
        <FormControl mb={'8px'}>
          <FormLabel>Tell us more</FormLabel>
          <Textarea typeof="string" placeholder="Tell us more..."></Textarea>
        </FormControl>
        

        <Button type="submit" as={'a'} href="/techstack" colorScheme="teal" mb={'10'}>
          Create App
        </Button>

      </VStack>
    )
  } 
