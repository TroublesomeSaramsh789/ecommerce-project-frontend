import React from 'react'
import { Grid, Heading } from '@chakra-ui/react';

type HeadingWrapper = {
    title: string,
    children?: any
}
const HeadingWrapper = (props: HeadingWrapper) => {
    return <Grid my="1rem">
        <Heading>{ props.title}</Heading>
      {props.children}
  </Grid>;
};

export default HeadingWrapper