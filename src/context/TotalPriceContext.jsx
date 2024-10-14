import { createContext, useContext, useReducer } from "react";

const TotalPriceContext = createContext(null);

const TotalPriceDispatchContect = createContext(null);

const totalPricecReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(totalPricecReducer, { total: 0 });
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContect.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContect.Provider>
    </TotalPriceContext.Provider>
  );
}

export function useTotalPrice() {
  return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch() {
  return useContext(TotalPriceDispatchContect);
}
