import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading, Text, useColorModeValue, Link, Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signupUser } from '../app/Store/slices/SignUpSlice';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function SignUpCard() {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector((state) => state.signup);

  // const onSubmit = (data) => {
  //   dispatch(signupUser(data));
  // };

  useEffect(() => {
    // Handle success/error messages or redirection upon successful signup
    if (isSuccess) {
      // Redirect or show success message
    }
    if (isError) {
      // Handle error, show error message
    }
  }, [isSuccess, isError]);

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text" {...register("firstName", { required: true })} />
                {errors.firstName && <span>This field is required</span>}
              </FormControl>
              <FormControl id="lastName" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input type="text" {...register("lastName", { required: true })} />
                {errors.lastName && <span>This field is required</span>}
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  isLoading={isFetching}
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
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}


