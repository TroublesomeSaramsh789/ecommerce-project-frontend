import React from 'react'
import { Grid, Flex, Input, Text, Button, Heading } from '@chakra-ui/react';
import HeadingWrapper from '../../components/HeadingWrapper/HeadingWrapper';

const Homepage = () => {
  return (
    <Grid bg={"white"}>
      {/* Search */}
      <Flex className="search" gap={"1rem"}>
        <Input type="text" />
        <Button>Search</Button>
      </Flex>
      {/* Recent Items */}
      <HeadingWrapper title="Latest Products">
        <Text>Products</Text>
      </HeadingWrapper>

      {/* Popular Items */}
      <HeadingWrapper title="Popular Products">
        <Text>Products</Text>
      </HeadingWrapper>
    </Grid>
  );
}

export default Homepage