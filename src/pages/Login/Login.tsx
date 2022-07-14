import React from 'react'
import {Link} from "react-router-dom"
import { Text, Flex } from "@chakra-ui/react"
import LoginForm from '../../components/Forms/LoginForm/LoginForm'
import HeadingWrapper from './../../components/HeadingWrapper/HeadingWrapper';

const Login = () => {
  return (
    <div>
      <HeadingWrapper title="Login">
        <LoginForm /> 
        <Flex justify={"center"} gap={"0.5rem"}>
          <Text>Don't have a account?
            </Text>
          <Text color={"green.600"}>
          <Link to="/register">Create Account</Link>
          </Text>
        </Flex>
      </HeadingWrapper>
    </div>
  )
}

export default Login