import React from "react";

type cartContextType = {
  data: any[];
  addToCart?: (obj: any) => void;
  removeFromCart?: (id: string) => void;
};

export const CartContext = React.createContext<cartContextType>({ data: [] });

export const CartContextWrapper = (props) => {
  const [data, setData] = React.useState<any[]>([]);

  const addToCart = (obj: any) => {
    let newData = [...data];
    newData.push(obj);
    setData(newData);
  };
  const removeFromCart = (id: string) => {
    let newData = data.filter((item: any) => item?.id === id);
  };
  return (
    <CartContext.Provider value={{ data, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
