import React from 'react'
import { Grid, Text } from '@chakra-ui/react';
import HeadingWrapper from './../../components/HeadingWrapper/HeadingWrapper';
import { CartContext } from './../../context/cartContext';
import CartItems from './../../components/CartItem/CartItems';

const Cart = () => {
    const { data } = React.useContext(CartContext);
    return (
        <HeadingWrapper title="Cart">
            {data.length > 0 ? <Grid my="1rem" gap={"0.5rem"}>
                {
                    data.map((item) => {
                        return <CartItems key={item.product_id} product_data={item} />
                    })
                }
            </Grid> : <Text color={"gray.700"} py={"2rem"} fontSize="2xl">Cart is Empty.</Text>}
        </HeadingWrapper>
    )
}

export default Cart