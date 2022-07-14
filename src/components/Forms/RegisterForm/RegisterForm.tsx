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
  Checkbox,
  Select,
} from "@chakra-ui/react";

import React from "react";

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const onSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid py={"1rem"} gap={"1rem"}>
        {/* FULL NAME */}
        <FormControl isRequired>
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <Input
            id="name"
            type="text"
            placeholder="Enter full name"
            {...register("name", {
              required: "This is required",
            })}
          />
          <FormHelperText>Please enter your full name.</FormHelperText>
        </FormControl>
        {/* EMAIL */}
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email </FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: "This is required",
            })}
          />
          <FormHelperText>Please enter your email.</FormHelperText>
        </FormControl>
        {/* PASSWORD */}
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
        {/* CONTACT */}
        <FormControl isRequired>
          <FormLabel htmlFor="contact">Contact</FormLabel>
          <Input
            id="contact"
            type="number"
            placeholder="Enter contact number"
            {...register("contact", {
              required: "This is required",
            })}
          />
          <FormHelperText>Please enter your phone.</FormHelperText>
        </FormControl>
        {/* USER TYPE */}
        <FormControl isRequired>
          <FormLabel htmlFor="country">User Type</FormLabel>
          <Select
            id="country"
            {...register("userType", {
              required: "This is required",
            })}
          >
            <option value="user">User</option>
            <option value="seller">Seller</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <Checkbox colorScheme="green" defaultChecked>
            I agree with the terms and conditions.
          </Checkbox>
        </FormControl>

        <Button colorScheme="green" type="submit">
          Register
        </Button>
      </Grid>
    </form>
  );
};

export default RegisterForm;
