import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading,
  } from '@chakra-ui/react'

  
  export default function UserDashboard() {
    return (
        
        <TableContainer>
            <Heading as={'h2'}>Welcome back, Peter</Heading>
            <Heading as={'h3'}>Your Recent Projects</Heading>
        <Table variant='striped' colorScheme='teal'>
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
            </Tr>
            <Tr>
              <Td>Project 2</Td>
              <Td></Td>
              <Td></Td>
            </Tr>
            <Tr>
              <Td>Project 3</Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Tbody>
          
        </Table>
      </TableContainer>
    )
  }
  