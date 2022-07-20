import React from "react";

type cartContextType = {
  data: any[];
  addToCart?: (obj: any) => void;
  removeFromCart?: (id: string) => void;
  increaseQuantity?: (id: string) => void;
  decreaseQuantity?: (id: string) => void;
};

const cartI = {
  product_id: "dsfsd5265",
  product_name: "Apple Pie",
  product_price: 565,
  product_quantity: 1,
  product_crossprice: 700,
  product_image: "",
};
const cartII = {
  product_id: "65sdfsdf",
  product_name: "Apple Pie",
  product_price: 200,
  product_quantity: 5,
  product_crossprice: 300,
  product_image: "",
};

export const CartContext = React.createContext<cartContextType>({ data: [] });

export const CartContextWrapper = (props: any) => {
  const [data, setData] = React.useState<any[]>([cartI, cartII]);

  const addToCart = (obj: any) => {
    let newData = [...data];
    const newObj = { ...obj, product_quantity: 0 };
    newData.push(obj);
    setData(newData);
  };
  const removeFromCart = (id: string) => {
    let newData = data.filter((item: any) => item?.id === id);
  };
  const increaseQuantity = (id: string) => {
    let newData = [...data];
    newData.find((item: any) => {
      if (item.product_id === id) {
        if (item.product_quantity < 12) item.product_quantity += 1;
      }
    });
    setData(newData);
  };
  const decreaseQuantity = (id: string) => {
    let newData = [...data];
    newData.find((item: any) => {
      if (item.product_id === id) {
        if (item.product_quantity > 0) item.product_quantity -= 1;
      }
    });
    setData(newData);
  };

  return (
    <CartContext.Provider
      value={{
        data,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
