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
  Textarea,
  CheckboxGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption
} from "@chakra-ui/react"
import { FaUpload } from "react-icons/fa";

  
  export default function NewProjectCard() {
    
    return (
      <VStack 
        as={'form'}
        mx={'auto'}
        mt={'20'}
        w={{ base: "90%", md: 500, lg: 800}}
       // h={'1000vh'}
        justifyContent={'center'}
        //bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Heading as='h2' mb={'10'}>Create a New Project</Heading>
        <Text mb={'6'}>Let us know more about your app then you can buckle up and watch us do the magic.</Text>
        <FormControl>
          <Text fontSize={'large'} fontWeight={'bold'}>Project Information</Text>
          <FormLabel>Project Name:</FormLabel>
          <Input type="text" placeholder="Enter Project Name (e.g., BlogExpress)" isRequired/>
        </FormControl>
        <FormControl>
          <FormLabel>Client Name:</FormLabel>
          <Input type="text" placeholder="Enter Client Name (e.g., XYZ Media Inc.)"/>
        </FormControl>
        <FormControl>
          <FormLabel>Project Description:</FormLabel>
          <Textarea typeof="string" placeholder="Briefly describe the project and its goals (e.g., Creating a CMS for XYZ Media to manage blog articles)"></Textarea>
        </FormControl>
        <FormControl>
          <Text fontSize={'large'} fontWeight={'bold'}>Objectives and Goals</Text>
          <FormLabel>Main Objectives:</FormLabel>
          <Textarea typeof="string" placeholder="List the main objectives of the web application (e.g., Enhance content creation workflow, Improve SEO)"></Textarea>
        </FormControl>
        <FormControl>
          <FormLabel>Goals for Client:</FormLabel>
          <Textarea typeof="string" placeholder="Define the specific goals the application should achieve (e.g., Increase organic traffic by 30%)"></Textarea>
        </FormControl>
        <FormControl>
          <Text fontSize={'large'} fontWeight={'bold'}>Features and Functionalities</Text>
          <Flex gap={'2'}>
            <FormLabel>User Authentication:</FormLabel><Checkbox />
          </Flex>   
        </FormControl>
        <FormControl >
          <Flex gap={'2'}>
            <FormLabel>Rich Text Editor:</FormLabel><Checkbox />
          </Flex>
        </FormControl>
        <FormControl>
          <Flex gap={'2'}>
            <FormLabel>Social Media Sharing Integration:</FormLabel><Checkbox />
          </Flex> 
        </FormControl>
        <FormControl>
          <FormLabel>Specific Functionalites:</FormLabel>
          <Textarea typeof="string" placeholder="List any additional functionalities or integrations (e.g., Google Analytics)"></Textarea>
        </FormControl>
        <FormControl>
        <Text fontSize={'large'} fontWeight={'bold'}>User Stories</Text>
          <FormLabel>Primary Users:</FormLabel>
          <Input type="text" placeholder="Who are the main users of the application? (e.g., Content Writers, Editors)"/>
        </FormControl>
        <FormControl>
          <FormLabel>User Scenario:</FormLabel>
          <Textarea typeof="string" placeholder="Describe a specific user story (e.g., As a content writer, I want...)"></Textarea>
        </FormControl>
        <FormControl>
        <Text fontSize={'large'} fontWeight={'bold'}>Design and User Interface</Text>
          <FormLabel>Overall Look and Feel:</FormLabel>
          <Textarea typeof="string" placeholder="Describe the desired design (e.g., Clean and minimalist)"></Textarea>
        </FormControl>
        <FormControl>
          <Flex gap={'2'}>
            <FormLabel>Follow Branding Guidelines:</FormLabel><Checkbox />
          </Flex> 
        </FormControl>
        <FormControl>
          <FormLabel>Brand Colors:</FormLabel>
          <Input type="text" placeholder="Enter color codes if applicable"/>
        </FormControl>

        <FormControl>
          <FormLabel>Figma Design:</FormLabel>
          <Flex gap={'8'}>
            <Text>Upload Figma design (optional)</Text>
            <Button type="submit" as={'a'} href="/techstack"  colorScheme="blue" mb={'10'}>
              Upload <FaUpload />
            </Button>
          </Flex>
        </FormControl>
        <FormControl gap={'6'}>
          <FormLabel>Choose your technology stack:</FormLabel>
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} colorScheme='blue'>
              Type of Application
            </MenuButton>
            <MenuList minWidth='240px'>
              <MenuOptionGroup title='Type of Application' type='radio'>
                <MenuItemOption value='frontend'>Front-end</MenuItemOption>
                <MenuItemOption value='fullstack'>Fullstack</MenuItemOption>
                <MenuItemOption value='api'>API</MenuItemOption>
              </MenuOptionGroup>
             </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} colorScheme='blue'  margin={'6'}>
              Front-end Stack
            </MenuButton>
            <MenuList minWidth='240px'>
              <MenuOptionGroup title='Front-end' type='checkbox'>
                <MenuItemOption value='html'>HTML, CSS & JS</MenuItemOption>
                <MenuItemOption value='react'>React</MenuItemOption>
                <MenuItemOption value='next'>Next</MenuItemOption>
                <MenuItemOption value='laravel'>Laravel</MenuItemOption>
              </MenuOptionGroup>
             </MenuList>
          </Menu>
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} colorScheme='blue'>
              Back-end Stack
            </MenuButton>
            <MenuList minWidth='240px'>
              <MenuOptionGroup  title='Back-end' type='radio'>
                <MenuItemOption value='nodejs'>Node.js</MenuItemOption>
                <MenuItemOption value='django'>Django</MenuItemOption>
                <MenuItemOption value='flask'>Flask</MenuItemOption>
              </MenuOptionGroup>
             </MenuList>
          </Menu>
        </FormControl>


        <Flex flexDirection={'row'} gap={'20'} mt={'12'} mb={'12'} justifyContent={'center'}>
          {/* <Button type="submit" as={'a'} href="/techstack" colorScheme="teal">
            Create App
          </Button> */}
          <Button as={'a'} href='/appprocessing' bg={'whatsapp.500'} color={'white'}>Start Building</Button>
        </Flex>

      </VStack>
    )
  } 
