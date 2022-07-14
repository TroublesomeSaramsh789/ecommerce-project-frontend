import { Flex, Text } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';
import HeadingWrapper from './../../components/HeadingWrapper/HeadingWrapper';

const Register = () => {
  return (
    <div><HeadingWrapper title='Register'>
      <RegisterForm />
      <Flex justify={"center"} gap={"0.5rem"}>
          <Text>Already Registered?
            </Text>
          <Text color={"green.600"}>
          <Link to="/login">Login</Link>
          </Text>
        </Flex>
    </HeadingWrapper></div>
  )
}

export default Register