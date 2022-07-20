import React from 'react'
import { Grid, Flex, Input, Text, Button, Heading } from '@chakra-ui/react';
import HeadingWrapper from '../../components/HeadingWrapper/HeadingWrapper';
import ProductCard from '../../components/ProductCards/ProductCard';

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
        <Grid
          rowGap={"2rem"}
          columnGap={"1rem"}
          templateColumns={[
            "1fr",
            "1fr",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Grid>
      </HeadingWrapper>

      {/* Popular Items */}
      <HeadingWrapper title="Popular Products">
        <Text>Products</Text>
      </HeadingWrapper>
    </Grid>
  );
}

export default Homepage