import React, { useState } from 'react';
import { Button, Flex, FormControl, FormLabel, Heading, Input, Link, Text, VStack } from '@chakra-ui/react';

const SignInCard = () => {
  const [formData, setFormData] = useState({
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

  const handleSignIn = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      // Backend endpoint for authentication
      const response = await fetch('https://url/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Retrieve the token from the response
      const data = await response.json();
      const token = data.token;

      // Optionally, save the token to local storage or state
      console.log('User logged in successfully');
    } catch (error: any) {
      console.error('Login error:', error.message);
      // Optionally, update UI to display error message
    }
  };

  const handleGoogleSignIn = () => {
    // Perform Google sign-in using Firebase Authentication
    // Example: firebase.auth().signInWithPopup(googleProvider);
  };

  const handleGitHubSignIn = () => {
    // Redirect users to your backend server's GitHub OAuth URL
    // Example: window.location.href = 'https://your-backend-endpoint.com/auth/github';
  };

  return (
    <Flex flexDir="column" w="full" p={4} maxW="md" m="auto" align={'center'} justify={'center'}>
      <Heading as='h1' color={'green.400'} mb={4}>StartRight</Heading>
      <Text fontWeight={'bold'} fontSize={'xl'} mb={4}>Welcome back!</Text>
      <Text>Please sign in to your account</Text>
      <form onSubmit={handleSignIn}>
        <VStack spacing={4} mt={10} mb={10} bgColor={'gray.100'} p={4} shadow={'lg'} w={'450px'} borderRadius={'lg'}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={formData.email} bgColor={'white'} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" value={formData.password} bgColor={'white'} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="blue">Sign In</Button>
          <Button onClick={handleGoogleSignIn} colorScheme="red">Sign In with Google</Button>
          <Button onClick={handleGitHubSignIn} colorScheme="teal">Sign In with GitHub</Button>
          <Text>Don't have an account yet? <Link as={"a"} href="/signup" color={"blue.400"}>Sign Up</Link></Text>
        </VStack>
      </form>
    </Flex>
  );
};


export default SignInCard;
