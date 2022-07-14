import { Flex, Text, Button, Box } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <Box boxShadow={"md"} shadow="md" borderBottom={"2px"} borderColor={"gray.200"}>
    <Flex maxW={"90%"} p="1rem" mx="auto" justify="space-between" align="center">
      <NavLink to="/">
        <Text>Home</Text>
      </NavLink>
      <Flex align="center" gap="1rem">
        <NavLink to="/cart">
          <Text>Cart</Text>
        </NavLink>
        <NavLink to="/login">
          <Button variant={"ghost"}>Login</Button>
        </NavLink>
      </Flex>
    </Flex>
    </Box>
  );
}

export default Navbar