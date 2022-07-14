import { useForm } from "react-hook-form";
import {
  Grid,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

import React from "react";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const onSubmit = (e:any) => {
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid py={"1rem"} gap={"1rem"}>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email </FormLabel>
          <Input
            id="email"
            type="email"
              placeholder="Enter Email"
            {...register("email", {
              required: "This is required",
            })}
          />
          <FormHelperText>Please enter your email.</FormHelperText>
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="Password">Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              {...register("password", {
                required: "This is required",
              })}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormHelperText>Please enter your password.</FormHelperText>
        </FormControl>

        <Button colorScheme="green" type="submit">
          Login
        </Button>
      </Grid>
    </form>
  );
};

export default LoginForm;
