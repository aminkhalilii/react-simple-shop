import { createContext  } from "react";
import { UseCart } from "../hooks/UseCart";
export const ShopContext = createContext(null);
export const ShopContextProvider = ({children}) => {
  
  return (
    <ShopContext.Provider value={UseCart()}>
      {children}
    </ShopContext.Provider>
  );
};
 