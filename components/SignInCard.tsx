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
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import { loginUser, loginSelector, clearState } from '../app/Store/slices/LoginSlice';
import { useEffect } from "react";
  
  export default function LogInCard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { isFetching, isSuccess, isError, errorMessage } = useSelector(
      loginSelector
    );
    const onSubmit = (data) => {
      dispatch(loginUser(data));
    };

    useEffect(() => {
      return () => {
        dispatch(clearState());
      };
    }, []);

    useEffect(() => {
      if (isError) {
        console.log(errorMessage);
        dispatch(clearState());
      }

      if (isSuccess) {
        dispatch(clearState());
        navigate('/dashboard');
      }
    }, [isError, isSuccess]);
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
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email"   {...register('email', { pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i })} />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" {...register('password', { required: true })} />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={"blue.400"} href="/forgot-password">Forgot password?</Link>
                  </Stack>
                  {isFetching ? (
                    <Button
                    loadingText="Submitting"
                    type="submit"
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
                  ) : (
                    <Button
                    loadingText="Submitting"
                    type="submit"
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
                  )}
                  {isFetching ? (
                    <Button
                    loadingText="Submitting"
                    type="submit"
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
                  ) : null}
                  <Text ml={'8'}>
                    Don&apos;t have an account?
                    <Link as={'a'} href="/signup" color={"blue.400"} ml={'4'}>Sign Up</Link>  
                  </Text>
                </Stack>
              </Stack>
            </Form>
          </Box>
        </Stack>
      </Flex>
  );

}