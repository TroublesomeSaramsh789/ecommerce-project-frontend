import { CartContextWrapper } from "./cartContext";

const ContextWrapper = (props: any) => {
  return <CartContextWrapper>{props.children}</CartContextWrapper>;
};

export default ContextWrapper;
