import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Icon,
  } from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
  
  export default function SimpleCard() {
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue"}
                  color={"white"}
                  _hover={{
                    bg: "white",
                    color: "blue"
                  }}
                >
                  Sign In 
                </Button>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"white"}
                  color={"blue"}
                  border={'2px'}
                  borderColor={'blue.400'}
                  _hover={{
                    bg: "blue.100",
                  }}
                >
                  Continue with Google <Icon as={FcGoogle} mx='10px'></Icon>
                </Button>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  mr={'6px'}
                  bg={"black"}
                  color={"white"}
                  // border={'2px'}
                  // borderColor={'blue.400'}
                  _hover={{
                    bg: "gray.200",
                    color: "black"
                  }}
                >
                  Continue with GitHub <Icon as={FaGithub} mx='10px'></Icon>
                </Button>
                <Text ml={'8'}>
                  Don't have an account?
                  <Link as={'a'} href="/signup" color={"blue.400"} ml={'4'}>Sign Up</Link>  
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    )
  }