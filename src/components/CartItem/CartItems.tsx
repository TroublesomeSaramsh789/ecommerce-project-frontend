import React from "react";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { IoAdd, IoRemove, IoTrashOutline } from "react-icons/io5";
import { CartContext } from "./../../context/cartContext";

type CartItemsType = {
  product_data: {
    product_name: string;
    product_id: string;
    product_price: number;
    product_quantity: number;
    product_image: string;
  };
};
const CartItems = (props: CartItemsType) => {
  const { product_data } = props;
  const { increaseQuantity, decreaseQuantity } = React.useContext(CartContext);

  if (!increaseQuantity || !decreaseQuantity) return "Loading";
  return (
    <Flex
      p={"0.5rem 1rem"}
      borderRadius={"0.25rem"}
      bg={"gray.50"}
      boxShadow="md"
      align={"center"}
      justify={"space-around"}
    >
      <Text fontWeight={600}>{product_data.product_name}</Text>
      <Flex align={"center"} gap="0.5rem">
        <IconButton
          onClick={() => decreaseQuantity(product_data.product_id)}
          isRound
          size={"sm"}
          aria-label="decrement"
          icon={<IoRemove />}
        />
        <Text>{product_data.product_quantity}</Text>
        <IconButton
          onClick={() => increaseQuantity(product_data.product_id)}
          isRound
          size={"sm"}
          aria-label="increment"
          icon={<IoAdd />}
        />
      </Flex>
      <Text fontWeight={300}>
        Rs: {product_data.product_price * product_data.product_quantity}
      </Text>

      <IconButton
        size={"sm"}
        colorScheme={"red"}
        aria-label="remove"
        icon={<IoTrashOutline />}
      />
    </Flex>
  );
};

export default CartItems;
