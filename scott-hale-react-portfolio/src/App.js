import React from "react";
import { NextUIProvider } from '@nextui-org/react';
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => {
    return (
        <NextUIProvider>
      <PortfolioContainer />
    </NextUIProvider>
  );
}

export default App;
