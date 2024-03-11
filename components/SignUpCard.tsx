import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Icon,
  } from "@chakra-ui/react"
  import { useState, useEffect } from "react"
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
  import { FaGithub } from "react-icons/fa6"
  import { FcGoogle } from "react-icons/fc"
  import { Form } from "react-router-dom"

  export default function SignUpCard() {
    return (
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Sign Up
              </Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool features ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
                <Form>{/*  onSubmit={handleSubmit(onSubmit)} */}
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input type="text"  />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName">
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" />
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input type= "password" />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          
                        >
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={"blue"}
                        color={"white"}
                        _hover={{
                          bg: "white",
                          color: "blue",
                        }}
                      >
                        Create Account
                      </Button>
                    
                      <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={"white"}
                        color={"blue"}
                        border={"2px"}
                        borderColor={"blue.400"}
                        _hover={{
                          bg: "blue.100",
                        }}
                      >
                        Sign up with Google <Icon as={FcGoogle} mx="10px" />
                      </Button>

                    <Button
                        loadingText="Submitting"
                        size="lg"
                        mr={"6px"}
                        bg={"black"}
                        color={"white"}
                        _hover={{
                          bg: "gray.200",
                          color: "black",
                        }}
                      >
                        Sign up with GitHub <Icon as={FaGithub} mx="10px" />
                      </Button>
                    
                  </Stack>
                  <Stack pt={6}>
                    <Text align={"center"}>
                      Already a user?{" "}
                      <Link color={"blue.400"} href="/signin">
                        Login
                      </Link>
                    </Text>
                  </Stack>
                </Stack>
              </Form>
            </Box>
          </Stack>
        </Flex>
    );

}
