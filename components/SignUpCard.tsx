import React, { useState } from 'react';
import { Box, Button, Flex, Text, FormControl, FormLabel, Heading, Input, Stack, VStack, useColorModeValue, Link } from '@chakra-ui/react';

const SignUpCard = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleGoogleSignIn = () => {
    // Perform Google sign-in using Firebase Authentication
    // Example: firebase.auth().signInWithPopup(googleProvider);
  };

  const handleGitHubSignIn = () => {
    // Redirect users to your backend server's GitHub OAuth URL
    // Example: window.location.href = 'https://your-backend-endpoint.com/auth/github';
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('https://url/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      // Optionally, handle successful registration here
      console.log('User registered successfully');
    } catch (error: any) {
      console.error('Registration error:', error.message);
      // Optionally, update UI to display error message
    }
  };

  return (

    <Flex flexDir="column" w="full" p={4} maxW="md" m="auto" align={'center'} justify={'center'}>

      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
        <Heading fontSize={"4xl"} textAlign={"center"} color={'green.400'}>
            Welcome to StartRight
          </Heading>
          <Heading fontSize={"xl"} textAlign={"center"}>
            Sign Up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>

        <form onSubmit={handleSubmit}>
          <VStack spacing={4} w={480} bgColor={'gray.100'} align={'center'} justify={'center'} p={4} shadow={'lg'} >
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input type="text" bgColor={'white'} name="firstname" value={formData.firstname} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Last name</FormLabel>
              <Input type="text" bgColor={'white'} name="lastname" value={formData.lastname} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Preferred Username</FormLabel>
              <Input type="text" bgColor={'white'} name="username" value={formData.username} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" bgColor={'white'} name="email" value={formData.email} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" bgColor={'white'} name="password" value={formData.password} onChange={handleChange} />
            </FormControl>
            <Button type="submit" colorScheme="blue">Register</Button>
            <Button onClick={handleGoogleSignIn} colorScheme="red">Sign In with Google</Button>
            <Button onClick={handleGitHubSignIn} colorScheme="teal">Sign In with GitHub</Button>
            <Text fontSize={"sm"} color={"gray.600"}> Already have an account? <Link as={"a"} href='/signin' color={"blue.400"}>Sign In</Link></Text>
          </VStack>
        </form>

      </Stack>
    </Flex>
  );
};


export default SignUpCard
