import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Heading,
    Text,
    Flex,
    Button,

  } from '@chakra-ui/react'

  
  export default function Dashboard() {
    return (
        
        <TableContainer m={'10'} mb={'28'}>
            <Flex align={'center'} flexDir={'column'}>
                <Heading as={'h2'} mb={'8'} >Welcome back, Peter</Heading>
                <Text fontSize={'xl'} mb={'8'}>Your recent projects</Text>
              <Button as='a' href='/services' alignSelf={'flex-end'} mb={'4'} bg={'teal'} color={'white'} size={'md'}>Create New Project</Button>
            </Flex>
        <Table variant='striped' colorScheme='teal' size={'md'}>
          <Thead>
            <Tr>
              <Th>Project Name</Th>
              <Th>Description</Th>
              <Th>Files</Th>
              <Th>Modify</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Project 1</Td>
              <Td></Td>
              <Td></Td>
              <Td>
                <Button as='a' href='#' bg={'blue'} color={'white'} size={'md'}>Edit</Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Project 2</Td>
              <Td></Td>
              <Td></Td>
              <Td>
                <Button as='a' href='#' bg={'blue'} color={'white'} size={'md'}>Edit</Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Project 3</Td>
              <Td></Td>
              <Td></Td>
              <Td>
                <Button as='a' href='#' bg={'blue'} color={'white'} size={'md'}>Edit</Button>
              </Td>
            </Tr>
          </Tbody>
          
        </Table>
      </TableContainer>
    )
  }
  