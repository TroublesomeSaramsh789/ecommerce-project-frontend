import React from 'react'
import {Grid,Flex,Text,Button} from "@chakra-ui/react" 
const ProductCard = () => {
  return (
    <Grid w="100%" gap={"0.25rem"} borderRadius={"0.5rem"} borderWidth={"1px"} borderColor={"gray.300"} p={"0.5rem"}>
      <Flex w={"100%"} h={"300px"} bg={"green.200"}></Flex>
      <Grid gap="1rem" templateColumns={["1fr"]}>
        <Button size={"sm"} colorScheme={"green"}>Add To Cart</Button>
        <Button size={"sm"}>See More Details</Button>
      </Grid>
    </Grid>
  );
}

export default ProductCard